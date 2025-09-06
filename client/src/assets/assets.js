import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Advanced Python Programming",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Classes and Objects",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Inheritance and Polymorphism",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6776369244daad0f313d81a9"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Cybersecurity Basics",
        "courseDescription": "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Cyber Threats",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Password Management",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Network Security Essentials",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/jZFaMEqEqEQ/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "Web Development Bootcamp",
        "courseDescription": "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to HTML",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Styling with CSS",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "DOM Manipulation",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/lpx2zFkapIk/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "Cloud Computing Essentials",
        "courseDescription": "<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cloud Computing?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cloud Service Models",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Exploring Cloud Platforms",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AWS Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Introduction to Google Cloud",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/0yboGn8errU/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ad",
        "courseTitle": "Data Science with Python",
        "courseDescription": "<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Python for Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Python Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Working with NumPy",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Visualization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to Matplotlib",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Advanced Visualizations with Seaborn",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773acf160cb0ab974342248"
            }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/E4znbZgUWzA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1aa",
        "courseTitle": "Data Science and Machine Learning",
        "courseDescription": "<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Data Science?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Data Collection and Cleaning",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Machine Learning Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Supervised vs Unsupervised Learning",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building Your First Model",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/631lFJdQvoo/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ab",
        "courseTitle": "Introduction to Cybersecurity",
        "courseDescription": "<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cybersecurity Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Cybersecurity",
                        "lectureDuration": 700,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding Cyber Threats",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Network Security Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Securing Networks",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Firewalls and VPNs",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/WbV3zRgpw_E/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b1",
        "courseTitle": "React.js Complete Guide",
        "courseDescription": "<h2>Master Modern React Development</h2><p>Learn React.js from the ground up with this comprehensive course. You'll master components, hooks, state management, and build production-ready applications.</p><p>Perfect for developers who want to specialize in frontend development using one of the most popular JavaScript frameworks.</p><ul><li>Build dynamic user interfaces</li><li>Master React hooks and context</li><li>Implement routing and state management</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "React Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to React",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Components and JSX",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "State and Props",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Managing State",
                        "lectureDuration": 1050,
                        "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Props and Component Communication",
                        "lectureDuration": 980,
                        "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b25",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342315"
            },
            {
                "userId": "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
                "rating": 5,
                "_id": "6773e37360cb0ab974342316"
            }
        ],
        "createdAt": "2024-12-18T09:20:15.800Z",
        "updatedAt": "2025-01-03T07:15:30.500Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b2",
        "courseTitle": "Node.js Backend Development",
        "courseDescription": "<h2>Build Scalable Backend Applications</h2><p>Learn server-side development with Node.js and Express. This course covers API development, database integration, authentication, and deployment strategies.</p><p>Ideal for developers who want to become full-stack or specialize in backend development.</p><ul><li>Create RESTful APIs</li><li>Work with databases and authentication</li><li>Deploy applications to production</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Node.js Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Node.js",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/RLtyhwFtXQA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "NPM and Package Management",
                        "lectureDuration": 650,
                        "lectureUrl": "https://youtu.be/RLtyhwFtXQA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Express Framework",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Building APIs with Express",
                        "lectureDuration": 1100,
                        "lectureUrl": "https://youtu.be/RLtyhwFtXQA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Middleware and Routing",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/RLtyhwFtXQA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b25",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_4sSowZat04D6Ds8jV2Ixcc7hV1X"
        ],
        "courseRatings": [
            {
                "userId": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "rating": 5,
                "_id": "6773e37360cb0ab974342317"
            }
        ],
        "createdAt": "2024-12-19T11:45:22.150Z",
        "updatedAt": "2025-01-03T08:30:45.200Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/RLtyhwFtXQA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b3",
        "courseTitle": "Mobile App Development with Flutter",
        "courseDescription": "<h2>Create Beautiful Cross-Platform Apps</h2><p>Learn Flutter and Dart to build native mobile applications for both iOS and Android. This course covers UI design, state management, and app deployment.</p><p>Perfect for developers who want to enter mobile app development with a single codebase approach.</p><ul><li>Build cross-platform mobile apps</li><li>Master Flutter widgets and layouts</li><li>Integrate APIs and local storage</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Flutter Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Flutter",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/1ukSR1GRtMU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dart Programming Language",
                        "lectureDuration": 1300,
                        "lectureUrl": "https://youtu.be/1ukSR1GRtMU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Building User Interfaces",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Widgets and Layouts",
                        "lectureDuration": 1150,
                        "lectureUrl": "https://youtu.be/1ukSR1GRtMU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Navigation and Routing",
                        "lectureDuration": 1000,
                        "lectureUrl": "https://youtu.be/1ukSR1GRtMU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b26",
        "enrolledStudents": [
            "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
            "user_4sSowZat04D6Ds8jV2Ixcc7hV1X",
            "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y"
        ],
        "courseRatings": [
            {
                "userId": "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
                "rating": 4,
                "_id": "6773e37360cb0ab974342318"
            }
        ],
        "createdAt": "2024-12-20T13:10:30.300Z",
        "updatedAt": "2025-01-03T09:45:15.750Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/1ukSR1GRtMU/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b4",
        "courseTitle": "Digital Marketing Mastery",
        "courseDescription": "<h2>Grow Your Business Online</h2><p>Comprehensive digital marketing course covering SEO, social media marketing, email marketing, and paid advertising. Learn to create effective marketing campaigns and analyze performance.</p><p>Ideal for entrepreneurs, marketers, and business owners who want to expand their online presence.</p><ul><li>Master SEO and content marketing</li><li>Run effective social media campaigns</li><li>Understand analytics and conversion optimization</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 35,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Digital Marketing Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Digital Marketing",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/bixR-KIJKYM",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding Your Target Audience",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/bixR-KIJKYM",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Search Engine Optimization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "SEO Fundamentals",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/bixR-KIJKYM",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Keyword Research and Content Strategy",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/bixR-KIJKYM",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b27",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
            "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z"
        ],
        "courseRatings": [
            {
                "userId": "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
                "rating": 5,
                "_id": "6773e37360cb0ab974342319"
            }
        ],
        "createdAt": "2024-12-21T14:25:45.600Z",
        "updatedAt": "2025-01-03T10:20:30.100Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/bixR-KIJKYM/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b5",
        "courseTitle": "Artificial Intelligence and Machine Learning",
        "courseDescription": "<h2>Dive Deep into AI and ML</h2><p>Comprehensive course on artificial intelligence and machine learning concepts. Learn neural networks, deep learning, natural language processing, and computer vision applications.</p><p>Perfect for developers and data scientists who want to specialize in AI technologies.</p><ul><li>Understand neural networks and deep learning</li><li>Build AI models for real-world problems</li><li>Explore computer vision and NLP</li></ul>",
        "coursePrice": 129.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "AI Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Artificial Intelligence",
                        "lectureDuration": 1000,
                        "lectureUrl": "https://youtu.be/ad79nYk2keg",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Machine Learning vs Deep Learning",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/ad79nYk2keg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Neural Networks",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Building Your First Neural Network",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/ad79nYk2keg",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Training and Optimization",
                        "lectureDuration": 1100,
                        "lectureUrl": "https://youtu.be/ad79nYk2keg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b28",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_4sSowZat04D6Ds8jV2Ixcc7hV1X",
            "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
            "user_7vVrzDcw07G9Gv1mY5Laff0kY4A"
        ],
        "courseRatings": [
            {
                "userId": "user_4sSowZat04D6Ds8jV2Ixcc7hV1X",
                "rating": 5,
                "_id": "6773e37360cb0ab974342320"
            },
            {
                "userId": "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
                "rating": 4,
                "_id": "6773e37360cb0ab974342321"
            }
        ],
        "createdAt": "2024-12-22T16:30:12.900Z",
        "updatedAt": "2025-01-03T11:55:20.400Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/ad79nYk2keg/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b6",
        "courseTitle": "Blockchain and Cryptocurrency Development",
        "courseDescription": "<h2>Build Decentralized Applications</h2><p>Learn blockchain technology, smart contract development, and cryptocurrency creation. This course covers Ethereum, Solidity, Web3, and DeFi protocols.</p><p>Ideal for developers interested in blockchain technology and decentralized finance applications.</p><ul><li>Understand blockchain fundamentals</li><li>Develop smart contracts with Solidity</li><li>Build DApps and integrate with Web3</li></ul>",
        "coursePrice": 149.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Blockchain Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Blockchain?",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/SSo_EIwHSd4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cryptocurrency and Bitcoin",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/SSo_EIwHSd4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Smart Contract Development",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to Solidity",
                        "lectureDuration": 1300,
                        "lectureUrl": "https://youtu.be/SSo_EIwHSd4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building Your First Smart Contract",
                        "lectureDuration": 1450,
                        "lectureUrl": "https://youtu.be/SSo_EIwHSd4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b29",
        "enrolledStudents": [
            "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
            "user_7vVrzDcw07G9Gv1mY5Laff0kY4A"
        ],
        "courseRatings": [
            {
                "userId": "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
                "rating": 4,
                "_id": "6773e37360cb0ab974342322"
            }
        ],
        "createdAt": "2024-12-23T17:45:30.200Z",
        "updatedAt": "2025-01-03T12:40:10.800Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/SSo_EIwHSd4/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b7",
        "courseTitle": "UI/UX Design Masterclass",
        "courseDescription": "<h2>Design Beautiful and Intuitive Interfaces</h2><p>Complete UI/UX design course covering design principles, user research, wireframing, prototyping, and design systems. Learn to use Figma, Adobe XD, and other industry-standard tools.</p><p>Perfect for designers, developers, and anyone interested in creating better user experiences.</p><ul><li>Master design principles and color theory</li><li>Conduct user research and usability testing</li><li>Create prototypes and design systems</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 40,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Design Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to UI/UX Design",
                        "lectureDuration": 650,
                        "lectureUrl": "https://youtu.be/c9Wg6Cb_YlU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Design Principles and Typography",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/c9Wg6Cb_YlU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "User Experience Design",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "User Research and Personas",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/c9Wg6Cb_YlU",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Wireframing and Prototyping",
                        "lectureDuration": 1000,
                        "lectureUrl": "https://youtu.be/c9Wg6Cb_YlU",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b30",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
            "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
            "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B"
        ],
        "courseRatings": [
            {
                "userId": "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
                "rating": 5,
                "_id": "6773e37360cb0ab974342323"
            },
            {
                "userId": "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
                "rating": 4,
                "_id": "6773e37360cb0ab974342324"
            }
        ],
        "createdAt": "2024-12-24T18:20:45.500Z",
        "updatedAt": "2025-01-03T13:25:55.300Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/c9Wg6Cb_YlU/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b8",
        "courseTitle": "DevOps and Cloud Infrastructure",
        "courseDescription": "<h2>Master Modern Development Operations</h2><p>Comprehensive DevOps course covering CI/CD pipelines, containerization with Docker, Kubernetes orchestration, infrastructure as code, and monitoring strategies.</p><p>Essential for developers and system administrators who want to streamline deployment processes and manage cloud infrastructure.</p><ul><li>Implement CI/CD pipelines</li><li>Master Docker and Kubernetes</li><li>Automate infrastructure deployment</li></ul>",
        "coursePrice": 119.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "DevOps Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to DevOps",
                        "lectureDuration": 700,
                        "lectureUrl": "https://youtu.be/Xrgk023l4lI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Version Control with Git",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/Xrgk023l4lI",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Containerization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Docker Fundamentals",
                        "lectureDuration": 1100,
                        "lectureUrl": "https://youtu.be/Xrgk023l4lI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Kubernetes Orchestration",
                        "lectureDuration": 1350,
                        "lectureUrl": "https://youtu.be/Xrgk023l4lI",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b31",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_7vVrzDcw07G9Gv1mY5Laff0kY4A",
            "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B"
        ],
        "courseRatings": [
            {
                "userId": "user_7vVrzDcw07G9Gv1mY5Laff0kY4A",
                "rating": 5,
                "_id": "6773e37360cb0ab974342325"
            }
        ],
        "createdAt": "2024-12-25T19:35:20.700Z",
        "updatedAt": "2025-01-03T14:10:40.600Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/Xrgk023l4lI/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1b9",
        "courseTitle": "SQL Database Management",
        "courseDescription": "<h2>Master Database Design and Management</h2><p>Complete SQL course covering database design, complex queries, stored procedures, indexing, and performance optimization. Learn MySQL, PostgreSQL, and database administration.</p><p>Essential for developers, data analysts, and anyone working with databases in their career.</p><ul><li>Design efficient database schemas</li><li>Write complex SQL queries and joins</li><li>Optimize database performance</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "SQL Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Databases",
                        "lectureDuration": 550,
                        "lectureUrl": "https://youtu.be/HXV3zeQKqGY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Basic SQL Queries",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/HXV3zeQKqGY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Advanced SQL",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Joins and Subqueries",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HXV3zeQKqGY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Stored Procedures and Functions",
                        "lectureDuration": 1100,
                        "lectureUrl": "https://youtu.be/HXV3zeQKqGY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b32",
        "enrolledStudents": [
            "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
            "user_4sSowZat04D6Ds8jV2Ixcc7hV1X",
            "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B",
            "user_9xXtbFey09I1Ix3oA7Nchh2mA6C"
        ],
        "courseRatings": [
            {
                "userId": "user_4sSowZat04D6Ds8jV2Ixcc7hV1X",
                "rating": 4,
                "_id": "6773e37360cb0ab974342326"
            },
            {
                "userId": "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B",
                "rating": 5,
                "_id": "6773e37360cb0ab974342327"
            }
        ],
        "createdAt": "2024-12-26T20:50:35.100Z",
        "updatedAt": "2025-01-03T15:45:25.900Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1c0",
        "courseTitle": "Game Development with Unity",
        "courseDescription": "<h2>Create Amazing Games from Scratch</h2><p>Learn game development using Unity engine and C#. This course covers 2D and 3D game creation, physics, animations, UI design, and game publishing strategies.</p><p>Perfect for aspiring game developers who want to build their own games and enter the gaming industry.</p><ul><li>Master Unity engine and C# scripting</li><li>Create both 2D and 3D games</li><li>Implement game mechanics and physics</li></ul>",
        "coursePrice": 109.99,
        "isPublished": true,
        "discount": 35,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Unity Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Unity",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/gB1F9G0JXOo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Unity Interface and Tools",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/gB1F9G0JXOo",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "C# Scripting for Games",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "C# Fundamentals for Unity",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/gB1F9G0JXOo",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Game Object Management",
                        "lectureDuration": 1050,
                        "lectureUrl": "https://youtu.be/gB1F9G0JXOo",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b33",
        "enrolledStudents": [
            "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
            "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
            "user_9xXtbFey09I1Ix3oA7Nchh2mA6C"
        ],
        "courseRatings": [
            {
                "userId": "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
                "rating": 5,
                "_id": "6773e37360cb0ab974342328"
            }
        ],
        "createdAt": "2024-12-27T21:15:50.400Z",
        "updatedAt": "2025-01-03T16:30:10.200Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/gB1F9G0JXOo/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1c1",
        "courseTitle": "PHP Laravel Framework",
        "courseDescription": "<h2>Build Modern Web Applications with Laravel</h2><p>Comprehensive Laravel course covering MVC architecture, Eloquent ORM, authentication, API development, and deployment. Learn to build robust and scalable web applications.</p><p>Ideal for PHP developers who want to master the most popular PHP framework.</p><ul><li>Master Laravel's MVC architecture</li><li>Build RESTful APIs and authentication systems</li><li>Deploy applications to production servers</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Laravel Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Laravel",
                        "lectureDuration": 650,
                        "lectureUrl": "https://youtu.be/ImtZ5yENzgE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Routing and Controllers",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/ImtZ5yENzgE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Database and Eloquent",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Database Migrations and Models",
                        "lectureDuration": 1000,
                        "lectureUrl": "https://youtu.be/ImtZ5yENzgE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Eloquent Relationships",
                        "lectureDuration": 1150,
                        "lectureUrl": "https://youtu.be/ImtZ5yENzgE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b34",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_7vVrzDcw07G9Gv1mY5Laff0kY4A",
            "user_9xXtbFey09I1Ix3oA7Nchh2mA6C",
            "user_0yYucGfz00J2Jy4pB8Odii3nB7D"
        ],
        "courseRatings": [
            {
                "userId": "user_7vVrzDcw07G9Gv1mY5Laff0kY4A",
                "rating": 4,
                "_id": "6773e37360cb0ab974342329"
            }
        ],
        "createdAt": "2024-12-28T22:40:15.800Z",
        "updatedAt": "2025-01-03T17:55:45.700Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/ImtZ5yENzgE/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1c2",
        "courseTitle": "AWS Cloud Solutions Architect",
        "courseDescription": "<h2>Design and Deploy Cloud Solutions</h2><p>Advanced AWS course preparing you for the Solutions Architect certification. Learn cloud architecture patterns, security best practices, cost optimization, and disaster recovery strategies.</p><p>Essential for cloud engineers and architects working with enterprise-level AWS deployments.</p><ul><li>Design highly available and scalable architectures</li><li>Implement security and compliance best practices</li><li>Optimize costs and performance</li></ul>",
        "coursePrice": 159.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "AWS Architecture Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "AWS Well-Architected Framework",
                        "lectureDuration": 1100,
                        "lectureUrl": "https://youtu.be/MfxF-FYEFjY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Designing for High Availability",
                        "lectureDuration": 1300,
                        "lectureUrl": "https://youtu.be/MfxF-FYEFjY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Security and Compliance",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AWS Security Services",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/MfxF-FYEFjY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Identity and Access Management",
                        "lectureDuration": 1000,
                        "lectureUrl": "https://youtu.be/MfxF-FYEFjY",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b35",
        "enrolledStudents": [
            "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
            "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B",
            "user_0yYucGfz00J2Jy4pB8Odii3nB7D"
        ],
        "courseRatings": [
            {
                "userId": "user_3rRmwYzs03C5Cr7iU1Hwbb6gU0W",
                "rating": 5,
                "_id": "6773e37360cb0ab974342330"
            },
            {
                "userId": "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B",
                "rating": 5,
                "_id": "6773e37360cb0ab974342331"
            }
        ],
        "createdAt": "2024-12-29T23:25:40.300Z",
        "updatedAt": "2025-01-03T18:40:20.100Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/MfxF-FYEFjY/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1c3",
        "courseTitle": "Vue.js Frontend Development",
        "courseDescription": "<h2>Build Interactive Web Applications</h2><p>Master Vue.js framework for building modern, reactive user interfaces. Learn Vue 3 Composition API, Vuex state management, Vue Router, and component-based architecture.</p><p>Perfect for frontend developers who want to learn one of the most developer-friendly JavaScript frameworks.</p><ul><li>Master Vue.js reactive data and computed properties</li><li>Build single-page applications with Vue Router</li><li>Manage application state with Vuex</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Vue.js Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Vue.js",
                        "lectureDuration": 700,
                        "lectureUrl": "https://youtu.be/FXpIoQ_rT_c",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Vue Instance and Reactivity",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/FXpIoQ_rT_c",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Components and Routing",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Vue Components",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/FXpIoQ_rT_c",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Vue Router and Navigation",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/FXpIoQ_rT_c",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b36",
        "enrolledStudents": [
            "user_4sSowZat04D6Ds8jV2Ixcc7hV1X",
            "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
            "user_0yYucGfz00J2Jy4pB8Odii3nB7D"
        ],
        "courseRatings": [
            {
                "userId": "user_6uUqyCbv06F8Fu0lX4Kzee9jX3Z",
                "rating": 4,
                "_id": "6773e37360cb0ab974342332"
            }
        ],
        "createdAt": "2024-12-30T08:10:25.600Z",
        "updatedAt": "2025-01-03T19:20:35.800Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/FXpIoQ_rT_c/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1c4",
        "courseTitle": "Ethical Hacking and Penetration Testing",
        "courseDescription": "<h2>Learn Cybersecurity from an Attacker's Perspective</h2><p>Comprehensive ethical hacking course covering penetration testing methodologies, vulnerability assessment, social engineering, and security tools like Metasploit, Nmap, and Wireshark.</p><p>Essential for cybersecurity professionals who want to think like attackers to better defend systems.</p><ul><li>Master penetration testing methodologies</li><li>Learn to use professional security tools</li><li>Understand web application and network security</li></ul>",
        "coursePrice": 139.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Ethical Hacking Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Ethical Hacking",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/3Kq1MIfTWCE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Penetration Testing Methodology",
                        "lectureDuration": 1000,
                        "lectureUrl": "https://youtu.be/3Kq1MIfTWCE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Network Security Testing",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Network Scanning and Enumeration",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/3Kq1MIfTWCE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Exploitation Techniques",
                        "lectureDuration": 1400,
                        "lectureUrl": "https://youtu.be/3Kq1MIfTWCE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b37",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_5tTpxAbu05E7Et9kW3Jydd8iW2Y",
            "user_9xXtbFey09I1Ix3oA7Nchh2mA6C"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342333"
            }
        ],
        "createdAt": "2024-12-31T09:45:10.900Z",
        "updatedAt": "2025-01-03T20:05:50.400Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1c5",
        "courseTitle": "Angular Complete Course",
        "courseDescription": "<h2>Build Enterprise-Level Applications</h2><p>Comprehensive Angular course covering TypeScript, components, services, routing, forms, HTTP client, and state management. Learn to build scalable enterprise applications.</p><p>Perfect for developers who want to master Angular for large-scale application development.</p><ul><li>Master TypeScript and Angular fundamentals</li><li>Build reactive forms and handle HTTP requests</li><li>Implement authentication and routing</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Angular Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Angular",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/k5E2AVpwsko",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "TypeScript for Angular",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/k5E2AVpwsko",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Components and Services",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Angular Components",
                        "lectureDuration": 1050,
                        "lectureUrl": "https://youtu.be/k5E2AVpwsko",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Services and Dependency Injection",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/k5E2AVpwsko",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b38",
        "enrolledStudents": [
            "user_7vVrzDcw07G9Gv1mY5Laff0kY4A",
            "user_8wWsaEdx08H0Hw2nZ6Mbgg1lZ5B"
        ],
        "courseRatings": [
            {
                "userId": "user_7vVrzDcw07G9Gv1mY5Laff0kY4A",
                "rating": 4,
                "_id": "6773e37360cb0ab974342334"
            }
        ],
        "createdAt": "2025-01-01T10:30:55.200Z",
        "updatedAt": "2025-01-03T21:15:10.700Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/k5E2AVpwsko/maxresdefault.jpg"
    }
]