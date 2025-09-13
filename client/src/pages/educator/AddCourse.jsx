import { useContext, useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import Quill from "quill";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const { backendUrl, getToken } = useContext(AppContext);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const handleChapter = (action, chapterId) => {
    if (action === "add") {
      const title = prompt("Enter Chapter Name:");
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:
            chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === "remove") {
      setChapters(
        chapters.filter((chapter) => chapter.chapterId !== chapterId)
      );
    } else if (action === "toggle") {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      );
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === "add") {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === "remove") {
      setChapters((prevChapters) =>
        prevChapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            return {
              ...chapter,
              chapterContent: chapter.chapterContent.filter(
                (_, index) => index !== lectureIndex
              ),
            };
          }
          return chapter;
        })
      );
    }
  };

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!image) {
        toast.error("Thumbnail is not added");
      }

      const couresData = {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters,
      };
      const formData = new FormData();
      formData.append("courseData", JSON.stringify(couresData));
      formData.append("image", image);
      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/educator/add-course`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success(data.message);
        setCourseTitle("");
        quillRef.current.root.innerHTML = "";
        setCoursePrice(0);
        setDiscount(0);
        setImage(null);
        setChapters([]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Initiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 animate-fade-in">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md w-full text-gray-500"
      >
        <div className="flex flex-col gap-1">
          <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
            Course Title
          </p>
          <input
            type="text"
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 transform hover:scale-105"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
            Course Description
          </p>
          <div
            ref={editorRef}
            className="hover:scale-105 transition-transform duration-300"
          ></div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap1">
            <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
              Course Price
            </p>
            <input
              type="number"
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              placeholder="0"
              className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 transform hover:scale-105"
              required
            />
          </div>
          <div className="flex md:flex-row flex-col items-center gap-3 ">
            <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
              Course Thumbnail
            </p>
            <label
              htmlFor="thumbnailImage"
              className="flex items-center gap-3 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.file_upload_icon}
                alt="upload icon"
                className="p-3 bg-blue-500 rounded cursor-pointer hover:bg-blue-600 hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg"
              />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
                className="max-h-10 hover:scale-125 hover:rotate-2 transition-transform duration-300 rounded shadow-md"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
            Discount %
          </p>
          <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            placeholder="0"
            className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 transform hover:scale-105"
            required
          />
        </div>

        {/* Adding Chapters & Lectures */}
        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className="bg-white border rounded-lg mb-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-between items-center p-4 border-b hover:bg-gray-50 transition-colors duration-300">
                <div className="flex items-center">
                  <img
                    onClick={() => handleChapter("toggle", chapter.chapterId)}
                    src={assets.dropdown_icon}
                    width={14}
                    alt="dropdown icon"
                    className={`mr-2 cursor-pointer transition-all hover:scale-125 ${
                      chapter.collapsed && "-rotate-90"
                    }`}
                  />
                  <span className="font-semibold hover:text-blue-600 transition-colors duration-300">
                    {chapterIndex + 1} {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
                  {chapter.chapterContent.length} Lectures
                </span>
                <img
                  src={assets.cross_icon}
                  alt=""
                  className="cursor-pointer hover:scale-125 hover:rotate-90 transition-transform duration-300"
                  onClick={() => handleChapter("remove", chapter.chapterId)}
                />
              </div>
              {!chapter.collapsed && (
                <div className="p-4">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="flex justify-between items-center mb-2 hover:bg-gray-50 p-2 rounded transition-colors duration-300"
                    >
                      <span className="hover:text-blue-600 transition-colors duration-300">
                        {lectureIndex + 1}
                        {lecture.lectureTitle} - {lecture.lectureDuration} mins
                        -
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        ></a>
                        -{lecture.isPreviewFree ? "Free Preview" : "Paid"}
                      </span>
                      <img
                        src={assets.cross_icon}
                        alt=""
                        className="cursor-pointer hover:scale-125 hover:rotate-90 transition-transform duration-300"
                        onClick={() =>
                          handleLecture(
                            "remove",
                            chapter.chapterId,
                            lectureIndex
                          )
                        }
                      />
                    </div>
                  ))}
                  <div
                    className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2 hover:bg-blue-100 hover:scale-105 hover:shadow-md transition-all duration-300"
                    onClick={() => handleLecture("add", chapter.chapterId)}
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}
          <div
            className="flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => handleChapter("add")}
          >
            + Add Chapter
          </div>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 animate-fade-in">
              <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-lg font-semibold mb-4 hover:text-blue-600 transition-colors duration-300">
                  Add Lecture
                </h2>

                <div className="mb-2">
                  <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
                    Lecture Title
                  </p>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded py-1 px-2 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={lectureDetails.lectureTitle}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureTitle: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-2">
                  <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
                    Duration (minutes)
                  </p>
                  <input
                    type="number"
                    className="mt-1 block w-full border rounded py-1 px-2 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={lectureDetails.lectureDuration}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureDuration: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-2">
                  <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
                    Lecture URL{" "}
                  </p>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded py-1 px-2 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    value={lectureDetails.lectureUrl}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        lectureUrl: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex gap-2 my-4">
                  <p className="hover:text-blue-600 transition-colors duration-300 font-medium">
                    Is Preview Free?
                  </p>
                  <input
                    type="checkbox"
                    className="mt-1 scale-125 hover:scale-150 transition-transform duration-300"
                    checked={lectureDetails.isPreviewFree}
                    onChange={(e) =>
                      setLectureDetails({
                        ...lectureDetails,
                        isPreviewFree: e.target.checked,
                      })
                    }
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
                  onClick={addLecture}
                >
                  Add
                </button>
                <img
                  src={assets.cross_icon}
                  alt="cross icon"
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 w-4 cursor-pointer hover:scale-125 hover:rotate-90 transition-transform duration-300"
                />
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white w-max py-2.5 px-8 rounded my-4 hover:bg-gray-800 hover:scale-110 hover:shadow-xl transition-all duration-300 transform active:scale-95"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
