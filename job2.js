// day and night mode
let transTheme = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 500); // Transition lasts 500 ms
  };
  

  // Function to set the theme-specific highlighting
  let setHighlight = (theme) => {
    const themeImage = document.getElementById('themeToggleImage');
    if (theme === "dark") {
      document.documentElement.classList.remove("day-mode");
      themeImage.src = 'assets/day-icon.png'; // Display icon to switch to day mode
      themeImage.alt = 'Switch to Day Mode';
    } else {
      document.documentElement.classList.add("day-mode");
      themeImage.src = 'assets/night-icon.png'; // Display icon to switch to night mode
      themeImage.alt = 'Switch to Night Mode';
    }
  };
  


  // Main function to set the theme
  let setTheme = (theme) => {
    transTheme();
    setHighlight(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  
  // Function to toggle between light and dark themes
  let toggleTheme = () => {
    let currentTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  };
  
  // Function to initialize the theme based on user preference or saved theme
  let initTheme = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      const userPref = window.matchMedia('(prefers-color-scheme: dark)');
      theme = userPref.matches ? 'dark' : 'light';
    }
    setTheme(theme);
  };
  
  // Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running scripts
  document.addEventListener('DOMContentLoaded', () => {
    initTheme(); // Initialize the theme
    const mode_toggle = document.getElementById("themeToggle");
    mode_toggle.addEventListener("click", toggleTheme);
  });
  

// let jobExperiences = [
//     {   title: "UBC Chemistry Department",
//         role: "Teaching Assistant for CHEM 1XX Labs/Resource Center",
//         tag: "Teaching",
//         duration: {
//             start: "September 2021",
//             end: "April 2023"
//         },
//         location: "The University of British Columbia",
//         responsibilities: [
//           " Facilitated weekly lab sections for a diverse group of 24 students, ensuring a supportive and engaging learning environment",
//           " Conducted regular office hours to address student questions and clarify misunderstandings related to course content, fostering a deeper understanding and academic success", 
//           " Performed detailed demonstrations to train students on the proper and safe usage of lab equipment, enhancing their technical skills and practical understanding",
//           " Evaluated and graded student assignments with a focus on providing timely, constructive feedback to encourage academic growth and improvement",
//           " Maintained a high level of approachability and responsiveness, receiving consistently positive feedback from both students and faculty"
//         ]        
//     },
//     {     title : "Dr. Roman Krems Group",
//           role: "NSERC CREATE Undergraduate Research Assistant, Directed Studies Student",
//           tag: "Research, Internship", 
//           duration: {
//               start: "May 2022",
//               end: "April 2024"
//           }, 
//           location: "The University of British Columbia",
//           responsibilities: [
//             "Developed and improved group website using HTML, CSS, and JavaScript, enhancing user experience and accessibility of published research", 
//             "Implemented error-mitigation techniques and recoded existing scripts for hybrid to be run on IBM Quantum Computers (i.e. IBM System One)", 
//             "Identifying the impact of quantum hardware constraints on use of DVR quantum algorithms", 
//             "Working on the devlopment of a new quantum algorithm that uses Gaussian Processes to design quantum circuits"
//           ]
//      }      
//     {   title: "UBC BIOMOD", 
//         role: "Wetlab and Computational Team Lead, Undergraduate Researcher, Developer", 
//         tag: ["Research","Student Leadership"] 
//         location: "The University of British Columbia (Life Sciences Institute)",
//         projects: {
//           project_1: {
//             name: "The Nanohinge: Diagnosing the Problem of Complex Structure Design in a Low Carbon Economy", 
//             responsibilities: [
//             "Designed (using CaDNAno) and optimized DNA-origami structures (using Python) that self-actuate and can self-assemble with applications in drug-delivery, immunology and nanosurgery", 
//             "Developed python scripts to locate design flaws in DNA origami structures via JSON coordinate analysis",
//             "Developed a website to showcase the findings and results of the project, using Wordpress and DIVI with CSS", 
//             "Edited videos to showcase the project and its findings, using a combination of Blender 3D and Davinci Resolve", 
//             "Improved protocols for DNA origmai structure and analysis using literature reviews and experimental data",
//             "Developed posters and presentations to showcase the project and its findings", 
//             "Implemented lab protocols for DNA origami characterization and purification analysis"
//            : 
//             ]
//             results: {
//               award: {
//                 competition_1: "BIOMOD 2022 Japan Open",
//               },
//                    awards: [ " Audience Choice Award", 
//                    "Best Presentation Award", 
//                    "Best Project Website", 
//                   "Gold Project Award", 
//                  "Overall Winner"] 
//                 }
//              poster:[ 
//                S. Nguyen, I. Abdi, M. Law., C. Sushams, E. Rajkumar, E. Halbe, M. Lei, L. Ju, R. Yeung,  "Novel and Stable Self Polymerization of DNA Origami Structures" (2020-2022)    
//              ]
//             }
//           }

//           project_2: { 
//             name: 
//           }
//         }


//     }
// ];