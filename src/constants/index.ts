export const BASE_URL = "http://192.168.43.33:4000/api/v1"

const departments = [
  "All",
  "Computer Science",
  "Information Technology",
  "Biology",
  "Chemistry",
  "Mathimatics",
  "Geology",
  "Statistics",
  "Physics",
  "Biological Technology",
  "Sport Science",
  "Veternary Medicine"
]



const courses = [
  {
    id: "1",
    title: "Learn Python: The Complete Python Programming Course",
    description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
    image: require('../../assets/course1.jpg'),
    department: "Information Systems",
    lecture: "Mayet",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]
  },
  {
    id: "2",
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    description: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    image: require('../../assets/course2.jpg'),
    department: "Computer Science",
    lecture: "Kedir",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]

  },
  {
    id: "3",
    title: "Computer Networks Fundamentals",
    description: "Use this course to cover your Computer Networking basics!",
    image: require('../../assets/course3.jpg'),
    department: "Computer Science",
    lecture: "Getnet",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]

  },
  {
    id: "4",
    title: "Numerical Methods and Optimization in Python",
    description: "Gaussian Elimination, Eigenvalues, Numerical Integration, Interpolation, Differential Equations and Operations Research",
    image: require('../../assets/course4.jpg'),
    department: "Mathimatics",
    lecture: "Tekleweld",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]
  },
  {
    id: "5",
    title: "Mathematical Foundations of Machine Learning",
    description: "Essential Linear Algebra and Calculus Hands-On in NumPy, TensorFlow, and PyTorch",
    image: require('../../assets/course1.jpg'),
    department: "Information Technology",
    lecture: "Sami",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]

  },
  {
    id: "6",
    title: "Learn JAVA Programming - Beginner to Master",
    description: "Deep Dive in Core Java programming -Standard Edition. A Practical approach to learn Java. Become a Java Expert",
    image: require('../../assets/course2.jpg'),
    department: "Information Technology",
    lecture: "Kibret Zewdu",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]
  },
  {
    id: "7",
    title: "The Complete SQL and MySQL Course - From Beginner to Expert",
    description: "Learn the Basics of Managing Data with SQL - Basics, Transactions, Views, Pages and Stored Procedures",
    image: require('../../assets/course3.jpg'),
    department: "Information Science",
    lecture: "Hailu G",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]
  },
  {
    id: "8",
    title: "Complete Machine Learning & Data Science Course",
    description: "Learn Data Science, Data Analysis, Machine Learning (Artificial Intelligence) and Python with Tensorflow, Pandas & more!",
    image: require('../../assets/course4.jpg'),
    department: "Computer Science",
    lecture: "Girma",
    videos: [
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "The Basics(Data Types)"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Conditions and Loops"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Functions!"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Object Oriented programming"
      },
      {
        description: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "File Input/Output"
      },
    ]
  }
]

const videos = [
  {
    id: "2",
    courseId: "2",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  },
  {
    id: "3",
    courseId: "3",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  },
  {
    id: "4",
    courseId: "4",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  },
  {
    id: "5",
    courseId: "5",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  },
  {
    id: "6",
    courseId: "6",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  },
  {
    id: "7",
    courseId: "7",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  },
  {
    id: "8",
    courseId: "8",
    videos: [
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
      {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
      },
    ]
  }
]

export {
  departments,
  courses,
  videos
}