import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiReact,
  SiTensorflow,
  SiMysql,
  SiGithub,
  SiGit,
  SiJira,
  SiPostman,
  SiFigma
} from "react-icons/si";

import {
  FaServer,
  FaCode,
  FaRobot,
  FaDatabase,
  FaLaptopCode,
  FaWindows
} from "react-icons/fa";


export const skillCategories = [

{
    title:"Programming Languages",

    skills:[
        {name:"Python",icon:SiPython},
        {name:"Java",icon:FaCode},
        {name:"JavaScript",icon:SiJavascript},
        {name:"Swift", icon: FaCode},
        {name:"PHP",icon:SiPhp},
        {name:"SQL",icon:FaDatabase},
    ]
},

{
    title:"Frameworks & Libraries",

    skills:[
        {name:"React",icon:SiReact},
        {name:"FastAPI",icon:FaServer},
        {name:"SwiftUI",icon:FaLaptopCode},
        {name:"TensorFlow",icon:SiTensorflow},
        {name:"OpenCV",icon:FaCode},
        {name:"Qt",icon:FaCode},
        {name:"JDBC",icon:FaDatabase},
    ]
},

{
    title:"Cloud & Database",

    skills:[
        {name:"AWS", icon: FaServer},
        {name:"EC2",icon:FaServer},
        {name:"Amazon S3",icon:FaDatabase},
        {name:"DynamoDB",icon:FaDatabase},
        {name:"MySQL",icon:SiMysql},
    ]
},

{
    title:"Development Tools",

    skills:[
        {name:"Git",icon:SiGit},
        {name:"GitHub",icon:SiGithub},
        {name:"Jira",icon:SiJira},
        {name:"VS Code",icon:FaCode},
        {name:"Postman",icon:SiPostman},
        {name:"Xcode",icon:FaWindows},
        {name:"Figma",icon:SiFigma},
        {name:"XAMPP",icon:FaServer},
    ]
},

{
    title:"AI & Computer Vision",

    skills:[
        {name:"YOLOv8",icon:FaRobot},
        {name:"Machine Learning",icon:FaRobot},
        {name:"Deep Learning",icon:FaRobot},
        {name:"Computer Vision",icon:FaRobot},
        {name:"Image Classification",icon:FaRobot},
    ]
},

{
    title:"Software Development",

    skills:[
        {name:"REST APIs",icon:FaCode},
        {name:"MVC Architecture",icon:FaCode},
        {name:"Object-Oriented Programming",icon:FaCode},
        {name:"Responsive Web Design",icon:FaLaptopCode},
        {name:"Database Design",icon:FaDatabase},
    ]
},

{
    title:"Professional Skills",

    skills:[
        {name:"Agile Scrum",icon:FaCode},
        {name:"Team Collaboration",icon:FaCode},
        {name:"Communication",icon:FaCode},
        {name:"Problem Solving",icon:FaCode},
        {name:"Time Management",icon:FaCode},
        {name:"Customer Service",icon:FaCode},
    ]
}



];