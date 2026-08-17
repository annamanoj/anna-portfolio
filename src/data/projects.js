export const projects = [
  {
    id: 1,
    title: "Smart Spatial Assistant",
    subtitle: "Telstra × RMIT University",
    category: "Industry",
    duration: "4 Months",
    image: "/images/projects/telstra.jpg",

    tech: [
      "Python",
      "FastAPI",
      "YOLOv8",
      "Qt"
    ],

    shortDescription:
      "Intelligent robotic assistant developed for the Unitree Go2 Robot in collaboration with Telstra and RMIT University.",

    overview: `The Smart Spatial Assistant was developed as an industry-sponsored capstone project in collaboration with Telstra and RMIT University using the Unitree Go2 Robot. The objective was to transform the robot into an intelligent assistant capable of understanding its surroundings, interacting naturally with users, and navigating autonomously within indoor environments.

    Working as part of a four-member Agile team over four months, we designed and integrated multiple software components into a unified robotic system. The robot was equipped with real-time object detection using YOLOv8, speech-enabled interaction, autonomous navigation powered by LiDAR and SLAM, and intelligent conversational capabilities. Throughout the project, we collaborated closely with Telstra mentors and RMIT supervisors using Agile Scrum, Jira, GitHub and regular sprint reviews.

    The project concluded with a fully functional prototype capable of autonomous navigation, object recognition, voice interaction and emotion-aware communication. This experience strengthened my technical skills in Python, FastAPI, robotics and AI integration while providing valuable exposure to industry collaboration and professional software development workflows.`,
        
    contribution: [
        "Developed chat & vision integration",
        "Implemented YOLOv8 object detection",
        "Backend development using FastAPI",
        "Sprint Planning",
        "GitHub Collaboration",
        "Pull Request Reviews"
        ],

    features: [
        "Autonomous indoor navigation using LiDAR and SLAM",
        "Real-time object detection powered by YOLOv8",
        "Voice interaction with speech recognition and synthesis",
        "Emotion-aware conversational responses",
        "Natural language interaction using AI models",
        "Agile Scrum development using Jira and GitHub",
        "Industry collaboration with Telstra and RMIT University"
        ],

        outcome:
        "The project successfully delivered a fully functional Smart Spatial Assistant capable of autonomous indoor navigation, real-time object detection and natural voice interaction. During demonstrations and testing, the robot accurately detected requested objects, responded to spoken commands, navigated safely through indoor environments, and interacted intelligently with users. The successful integration of AI, robotics and computer vision demonstrated the feasibility of an intelligent robotic assistant for real-world applications.",

        info: {
            client: "Telstra",
            university: "RMIT University",
            platform: "Unitree Go2 Robot",
            duration: "4 Months",
            team: "5 Members",
            methodology: "Agile Scrum"
        }
  },

  {
    id: 2,
    title: "Budget Eats",
    subtitle: "Apple Foundation Program × RMIT",

    category: "Mobile",

    duration: "1 Week",

    image: "/images/projects/budgeteats.jpg",

    tech: [
      "Swift",
      "SwiftUI",
      "Xcode"
    ],

    shortDescription:
        "An iOS application designed to help university students discover affordable dining options and free food events around campus, created during the Apple Foundation Program at RMIT University.",


    overview: `Budget Eats was developed during the Apple Foundation Program at RMIT University, an intensive innovation program focused on Design Thinking, creativity, collaboration, and rapid application development within the Apple ecosystem. Working in a multidisciplinary team, we explored real-world challenges faced by university students and identified affordable food accessibility as a common concern.

    Our solution was Budget Eats, an iOS application designed to help students quickly discover nearby affordable restaurants, meal deals, and free food events around campus. The goal was to reduce the time and cost associated with finding meals, allowing students to focus more on their studies while maintaining a healthy lifestyle.

    Throughout the program, we applied Design Thinking principles including user research, brainstorming, rapid prototyping, user testing, and iterative improvement. Beyond learning SwiftUI and Xcode, the experience strengthened my communication, teamwork, creativity, and problem-solving skills while developing a user-centred mobile application from concept to prototype.`,


    features: [
        "Locate affordable dining options near the university.",
        "Discover free food events and student meal offers.",
        "Designed using Apple's Design Thinking methodology.",
        "Interactive iOS interface developed with SwiftUI.",
        "Rapid prototyping and iterative user testing.",
        "Collaborative multidisciplinary team development."
        ],

        outcome:
        "The project resulted in a functional iOS application prototype that demonstrated how technology can improve student wellbeing by making affordable food more accessible. More importantly, the Apple Foundation Program strengthened my ability to apply Design Thinking, collaborate in multidisciplinary teams, communicate ideas effectively, and transform user needs into practical digital solutions.",

    contribution: [
       "Conducted user research to understand student challenges.",
        "Participated in brainstorming and Design Thinking workshops.",
        "Designed user interface screens using SwiftUI.",
        "Developed interactive application prototypes in Xcode.",
        "Collaborated with a multidisciplinary team throughout the program.",
        "Presented the final solution and project outcomes."
    ],

    info: {
            program: "Apple Foundation Program",
            university: "RMIT University",
            platform: "iOS",
            duration: "1 Week",
            team: "Multidisciplinary Team",
            methodology: "Design Thinking"
        },
  },

  {
        id: 3,

        title: "Online Music Subscription Application",

        subtitle: "Cloud Computing • RMIT University",

        category: "Cloud",

        duration: "2024",

        image: "/images/projects/music.jpg",

        tech: [
            "Java",
            "REST API",
            "AWS EC2",
            "Amazon S3",
            "DynamoDB"
        ],

        shortDescription:
            "A cloud-based music streaming application developed as an individual cloud computing assignment using Java and Amazon Web Services.",

        overview: `The Online Music Subscription Application was developed as an individual Cloud Computing assignment at RMIT University to explore the design, development and deployment of scalable cloud-native applications using Amazon Web Services. The project focused on building a backend service capable of managing users, subscriptions and music content while applying cloud computing principles to improve scalability, reliability and performance.

        The application was developed using Java and RESTful APIs, with the backend deployed on Amazon EC2. Amazon S3 was used to manage and store media assets, while DynamoDB provided fast, low-latency storage for application data. Through this project, I gained practical experience in designing distributed applications, integrating multiple AWS services and understanding how cloud infrastructure supports modern software systems.

        Working independently throughout the assignment, I designed the application architecture, implemented backend functionality, configured cloud services and deployed the complete solution on AWS. This project strengthened my understanding of cloud deployment, REST API development, database design and scalable application architecture.`,

        features: [
            "Developed RESTful API endpoints for user authentication and subscription management.",
            "Deployed backend services on Amazon EC2.",
            "Integrated Amazon S3 for cloud-based media storage.",
            "Used DynamoDB for scalable and low-latency data management.",
            "Designed a modular backend architecture using Java.",
            "Applied cloud computing principles for scalable application deployment."
        ],

        outcome:
            "The project successfully demonstrated the deployment of a cloud-native music subscription application using multiple AWS services. The application supported user authentication, subscription management and cloud-based media storage while providing valuable hands-on experience with cloud architecture, distributed systems and backend development using Amazon Web Services.",

        contribution: [
            "Designed the complete application architecture independently.",
            "Developed backend services using Java and REST APIs.",
            "Configured and deployed the application on Amazon EC2.",
            "Integrated Amazon S3 for media storage.",
            "Designed DynamoDB data structures for efficient data access.",
            "Tested and validated application functionality throughout development."
        ],

        info: {
            type: "Individual Assignment",
            university: "RMIT University",
            course: "Cloud Computing",
            duration: "1 Semester",
            deployment: "Amazon Web Services"
        }
  },

  {
    id: 4,

    title: "Pneumonia Detection System",

    subtitle: "Artificial Intelligence • Final Year Project",

    category: "AI",

    duration: "2023",

    image: "/images/projects/pneumonia.jpg",

    tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "NumPy"
    ],

    shortDescription:
        "An AI-powered medical image classification system capable of analysing chest X-ray images to detect and classify different types of pneumonia using deep learning.",

    overview: `The Pneumonia Detection System was developed as my final-year undergraduate project to explore the application of artificial intelligence in medical image analysis. The objective was to build a deep learning model capable of analysing chest X-ray images and assisting in the early detection and classification of pneumonia.

    A large dataset containing thousands of labelled chest X-ray images was collected and prepared for training. Images were preprocessed using OpenCV techniques including resizing, normalisation and enhancement before being used to train a convolutional neural network with TensorFlow and Keras. Through this training process, the model learned to recognise visual patterns associated with different categories of pneumonia and distinguish them from healthy chest X-rays.

    The completed system allows users to upload a chest X-ray image, after which the trained model analyses the image and predicts whether pneumonia is present. Depending on the trained dataset, the system classifies the detected condition into the corresponding pneumonia category and presents the prediction to the user through a simple interface. This project strengthened my understanding of deep learning, medical image processing, computer vision and artificial intelligence while demonstrating the potential of AI-assisted healthcare solutions.`,

    features: [
        "Upload chest X-ray images for automated diagnosis.",
        "Image preprocessing using OpenCV.",
        "Deep learning model trained using thousands of labelled X-ray images.",
        "Automatic detection of pneumonia from chest X-rays.",
        "Classification of different pneumonia categories based on the trained dataset.",
        "Simple interface displaying prediction results."
        ],

    outcome:
        "The project successfully demonstrated the use of deep learning for medical image classification. The trained model analysed uploaded chest X-ray images and predicted whether pneumonia was present while classifying the condition according to the categories included in the training dataset. This project enhanced my practical knowledge of machine learning, computer vision, TensorFlow, medical image preprocessing and AI model development.",


    contribution: [
        "Collected and prepared labelled chest X-ray datasets.",
        "Preprocessed medical images using OpenCV.",
        "Developed and trained the deep learning model using TensorFlow and Keras.",
        "Evaluated model performance using validation datasets.",
        "Integrated image upload and prediction functionality.",
        "Tested and refined the model to improve prediction accuracy."
        ],

        info: {
        type: "Final Year Project",
        university: "APJ Abdul Kalam Technological University",
        domain: "Artificial Intelligence",
        dataset: "Labelled Chest X-ray Images",
        model: "Convolutional Neural Network (CNN)",
        language: "Python"
        },
    },

  {
  id: 5,

  title: "Library Management System",

  subtitle: "Software Engineering • RMIT University",

  category: "Web",

  duration: "2024",

  image: "/images/projects/library.jpg",

  tech: [
    "Java",
    "JDBC",
    "Collections",
    "SQL"
  ],

  shortDescription:
    "A digital library management system developed to simplify book browsing, user management and borrowing activities through an interactive web application.",

  overview: `The Library Management System was developed as an individual university project to simulate the functionality of a modern digital library. The objective was to create an application that allows users to browse books, manage their personal library, and perform common library operations through an intuitive interface.

The application provides secure user authentication with login and logout functionality, allowing users to maintain personalised accounts. Users can browse the book catalogue, search for books, view detailed book information, save books to their favourites list, and download available digital resources. Administrative features were designed to manage books and maintain library records while ensuring efficient data handling through Java and JDBC.

This project strengthened my understanding of object-oriented programming, database connectivity, software architecture, CRUD operations, and user interface design. It also provided practical experience in developing a complete software application that combines backend logic with database management to deliver a seamless user experience.`,

  features: [
    "Secure user login and authentication.",
    "Browse and search the library catalogue.",
    "View detailed information for each book.",
    "Add books to a personal favourites list.",
    "Download available digital books and resources.",
    "CRUD operations for managing library records.",
    "Database connectivity using JDBC."
  ],

  outcome:
    "The project successfully delivered a functional digital library management system capable of managing users, books and library operations. Users were able to browse the catalogue, search for books, save favourites, access book details and download available resources through a simple and user-friendly interface.",

  contribution: [
    "Designed the overall application architecture.",
    "Developed user authentication with login and logout functionality.",
    "Implemented book search and filtering features.",
    "Created favourites management and download functionality.",
    "Integrated Java with a relational database using JDBC.",
    "Tested and refined the application to ensure reliable functionality."
  ],

  info: {
    type: "University Project",
    university: "RMIT University",
    course: "Software Engineering",
    architecture: "MVC",
    database: "SQL with JDBC",
    language: "Java"
  }
},

  
  {
  id: 6,

  title: "Blood Donation Management System",

  subtitle: "Web Development • Community Healthcare",

  category: "Web",

  duration: "2022",

  image: "/images/projects/blood.jpg",

  tech: [
    "Java",
    "PHP",
    "MySQL",
    "XAMPP"
  ],

  shortDescription:
    "A web-based blood donation management system designed to connect blood donors, hospitals and patients through a secure and accessible platform.",

  overview: `The Blood Donation Management System was developed as a university project with the objective of improving the process of connecting blood donors, hospitals and patients during medical emergencies. The system was designed to simplify blood donation management by providing a centralised platform where hospitals could manage donor information while individuals could easily register as blood donors and respond to blood requests.

The application enables users to create secure accounts, register as blood donors, search for available blood donors based on blood group and location, and access relevant donor information through the system. Hospitals can maintain blood inventory records, monitor donor availability and contact suitable donors when blood is urgently required. Donor privacy was considered by ensuring that contact information could only be accessed through the application's approval process.

The project provided practical experience in full-stack web development, database design and user authentication while demonstrating how technology can support healthcare services and improve communication between hospitals, blood donors and patients. The application was also designed to be accessible across desktop and mobile devices, allowing users to conveniently access the system whenever needed.`,

  features: [
    "Secure user registration and login system.",
    "Blood donor registration and profile management.",
    "Search donors by blood group and availability.",
    "Hospital management of blood inventory records.",
    "Request and contact suitable blood donors through the system.",
    "Responsive interface accessible on desktop and mobile devices.",
    "Database-driven management using MySQL."
  ],

  outcome:
    "The project successfully delivered a functional blood donation management platform that simplified communication between hospitals, blood donors and patients. The application enabled hospitals to efficiently manage donor records and blood inventory while allowing registered donors to receive and respond to blood requests through an organised digital platform.",

  contribution: [
    "Designed the application architecture and database.",
    "Developed user registration and authentication features.",
    "Implemented donor search and blood request functionality.",
    "Created hospital management features for donor and blood records.",
    "Integrated MySQL database with the web application.",
    "Tested the system across different user workflows and devices."
  ],

  info: {
    type: "University Project",
    university: "APJ Abdul Kalam Technological University",
    domain: "Healthcare Management",
    platform: "Web Application",
    database: "MySQL",
    language: "Java & PHP"
  }
}
];