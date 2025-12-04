import Navbar from './components/NavBar'
import Banner from './components/Banner'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Course from './components/Course'

function App() {
  const courses = [
  {
    courseName: "JavaScript Mastery",
    price: 4999,
    trainer: "Rahul Sharma",
    duration: "6 weeks",
    description: "Deep dive into JavaScript fundamentals, ES6+ and real-world coding."
  },
  {
    courseName: "React.js Complete Guide",
    price: 5999,
    trainer: "Anita Verma",
    duration: "8 weeks",
    description: "Learn React, hooks, state management, and project building."
  },
  {
    courseName: "HTML & CSS Bootcamp",
    price: 2999,
    trainer: "Vikram Singh",
    duration: "4 weeks",
    description: "Master modern HTML5, CSS3, layouts, and responsive design."
  },
  {
    courseName: "Node.js for Beginners",
    price: 5500,
    trainer: "Karan Patel",
    duration: "5 weeks",
    description: "Start backend development using Node, Express, and APIs."
  },
  {
    courseName: "Full-Stack Web Development",
    price: 12999,
    trainer: "Sneha Rao",
    duration: "12 weeks",
    description: "End-to-end MERN stack training with real projects."
  },
  {
    courseName: "Python Programming",
    price: 4500,
    trainer: "Arun Kumar",
    duration: "6 weeks",
    description: "Learn Python basics, OOP, automation, and scripting."
  },
  {
    courseName: "Data Structures & Algorithms",
    price: 6999,
    trainer: "Priya Deshmukh",
    duration: "10 weeks",
    description: "Crack coding interviews with DSA fundamentals and practice."
  },
  {
    courseName: "UI/UX Design Essentials",
    price: 6500,
    trainer: "Meera Nair",
    duration: "7 weeks",
    description: "Learn Figma, wireframing, prototyping, and design principles."
  },
  {
    courseName: "Angular Framework",
    price: 6200,
    trainer: "Rohit Mehta",
    duration: "7 weeks",
    description: "Complete guide to Angular components, services, and routing."
  },
  {
    courseName: "Java Programming",
    price: 7000,
    trainer: "Suresh Gupta",
    duration: "8 weeks",
    description: "Core to advanced Java, OOP, collections, and JDBC."
  },
  {
    courseName: "Mobile App Development (Flutter)",
    price: 8000,
    trainer: "Divya Singh",
    duration: "9 weeks",
    description: "Build Android & iOS apps using Flutter and Dart."
  },
  {
    courseName: "DevOps Foundations",
    price: 7500,
    trainer: "Harish Kumar",
    duration: "8 weeks",
    description: "CI/CD, Docker, Jenkins, Linux basics, and cloud deployment."
  },
  {
    courseName: "Cloud Computing with AWS",
    price: 9000,
    trainer: "Neha Sharma",
    duration: "10 weeks",
    description: "Learn core AWS services, deployment, and cloud architecture."
  },
  {
    courseName: "Database Management (SQL)",
    price: 4000,
    trainer: "Mahesh Rao",
    duration: "5 weeks",
    description: "SQL basics, joins, queries, normalization, and real DB tasks."
  },
  {
    courseName: "Cybersecurity Basics",
    price: 6800,
    trainer: "Imran Ali",
    duration: "6 weeks",
    description: "Introduction to ethical hacking, security tools, and protection methods."
  }
];
  return (
      <div className='border border-2 border-danger p-2 m-2 vh-100'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Feedback></Feedback>
        <div className='d-flex flex-wrap'>
          {
          courses.map((cour)=>{
            return (
          <Course price={cour.price} trainer={cour.trainer} duration={cour.duration} des={cour.description}>{cour.courseName}</Course>
            )
          })
        }
        // <Course price={30000} trainer={'veera'} duration={40}>Angular</Course>
        // <Course price={15000} trainer={'Madhu'} duration={30}>NodeJS</Course>
       </div>
        
       </div>
    
  )
}

export default App
