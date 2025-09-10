import { clerkClient } from "@clerk/express";

// Middleware (protect Educator Routes)
export const protectEducator = async(req, res, next)=>{
  try {
    const userId = req.auth.userId
    const responce = await clerkClient.users.getUser(userId)
    if (responce.publicMetadata.role !== 'educator'){
      return res.json({success: false, message: "Unathorized Access"})
    }

    next()
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}