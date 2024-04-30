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
  const linkedinIcon = document.getElementById('linkedinIcon');
  const githubIcon = document.getElementById('githubIcon');

  if (theme === "dark") {
    document.documentElement.classList.remove("day-mode");
    themeImage.src = 'assets/day-icon.png'; // Display icon to switch to day mode
    themeImage.alt = 'Switch to Day Mode';
    linkedinIcon.src = 'assets/linkedin-dark-icon.png'; // LinkedIn icon for dark mode
    githubIcon.src = 'assets/github-dark-icon.png'; // GitHub icon for dark mode
  } else {
    document.documentElement.classList.add("day-mode");
    themeImage.src = 'assets/night-icon.png'; // Display icon to switch to night mode
    themeImage.alt = 'Switch to Night Mode';
    linkedinIcon.src = 'assets/linkedin-light-icon.png'; // LinkedIn icon for light mode
    githubIcon.src = 'assets/github-light-icon.png'; // GitHub icon for light mode
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
//             start: "May 2022",
//             end: "April 2023"
//         },
//         location: "University of British Columbia",
//         responsibilities: [
//           " Facilitated weekly lab sections for a diverse group of 24 students, ensuring a supportive and engaging learning environment",
//           " Conducted regular office hours to address student questions and clarify misunderstandings related to course content, fostering a deeper understanding and academic success", 
//           " Performed detailed demonstrations to train students on the proper and safe usage of lab equipment, enhancing their technical skills and practical understanding",
//           " Evaluated and graded student assignments with a focus on providing timely, constructive feedback to encourage academic growth and improvement",
//           " Maintained a high level of approachability and responsiveness, receiving consistently positive feedback from both students and faculty"
//         ]        
//     },
//     {     title : "Dr. Roman Krems Group",
//           role: "Teaching Assistant for CHEM 1XX Labs/Resource Center",

//     }

//     { title

//     }
// ];
