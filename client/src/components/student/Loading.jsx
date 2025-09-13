import { useEffect } from "react";

const Loading = ({ path, onComplete }) => {
  // Simulate navigation (replace with your actual navigation logic)
  const navigate = (route) => {
    if (onComplete) onComplete(route);
  };

  useEffect(() => {
    if (path) {
      const timer = setTimeout(() => {
        navigate(`/${path}`);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [path]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      
    


      {/* Option 3: Orbit Loader */}
      {/* <div className="relative w-16 h-16">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 animate-spin origin-[0_32px]"></div>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 animate-spin origin-[0_32px]" style={{animationDelay: '0.5s', animationDuration: '1.5s'}}></div>
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full transform -translate-x-1/2 animate-spin origin-[0_32px]" style={{animationDelay: '1s', animationDuration: '2s'}}></div>
      </div>  */}
<div className="relative w-24 h-24 flex items-center justify-center">
  {/* Center sun */}
  <div className="w-3 h-3 bg-yellow-400 rounded-full absolute z-10"></div>
  
  {/* Outer orbit */}
  <div className="absolute w-16 h-16 border border-gray-200 rounded-full animate-spin" style={{animationDuration: '3s'}}>
    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full absolute -top-1.5 left-1/2 transform -translate-x-1/2"></div>
  </div>
  
  {/* Middle orbit */}
  <div className="absolute w-12 h-12 border border-gray-100 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}>
    <div className="w-2 h-2 bg-purple-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
    <div className="w-2 h-2 bg-pink-500 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
  </div>
  
  {/* Inner orbit */}
  <div className="absolute w-8 h-8 border border-gray-50 rounded-full animate-spin" style={{animationDuration: '1.5s'}}>
    <div className="w-1.5 h-1.5 bg-green-500 rounded-full absolute -top-0.5 left-1/2 transform -translate-x-1/2"></div>
    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full absolute top-1/2 -right-0.5 transform -translate-y-1/2"></div>
    <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-1/2 -left-0.5 transform -translate-y-1/2"></div>
  </div>
</div>

      {/* Option 5: Glowing Dots Chain */}
      {/* <div className="flex items-center space-x-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
            style={{
              animation: `glowPulse 1.5s ease-in-out infinite ${i * 0.3}s`,
              filter: `drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))`
            }}
          />
        ))}
      </div> */}




      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: scale(1.3); 
            opacity: 1; 
          }
        }
        
        @keyframes breathe {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            transform: scale(1.1) rotate(180deg); 
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;