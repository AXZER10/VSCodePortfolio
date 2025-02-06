import Aurora from "../../assets/images/Aurora.png";
import vscode from "../../assets/images/vscode.png";
import HabitGenie from "../../assets/images/HabitGenie.png";
// import HabitGenie2 from "../../assets/images/HabitGenie2.png";
import TravelBuddy from "../../assets/images/TravelBuddy.png"
import Gemini from "../../assets/images/Gemini.png"
export const project = [
  {
    title: "VSCode themed Portfolio",
    description:
      "A Vscode themed developer portfolio website built with React.js and TailwindCSS.",
    image: vscode,
    tags: ["react", "tailwind", "axios"],
    sourceCode: "https://github.com/AXZER10/VSCodePortfolio",
    demo: "https://vs-code-portfolio.netlify.app/",
    imgFormat: "object-cover"
  },
  {
    title: "TravelBuddy.ai",
    description:
      "A fully responsive Trip Planner app in react utilising Firebase, TailwindCSS and GeminiAI.",
    image: TravelBuddy,
    tags: ["react", "tailwind", "context-api", "Firebase", "OAuth"],
    sourceCode: "https://github.com/AXZER10/TravelBuddy.ai/",
    demo: "https://travelbuddyai.netlify.app/",
    imgFormat: "object-contain"
  },
  {
    title: "Habit Genie",
    description:
      "Responsive Habit Tracker App using React Native with authentication and backend using firebase.",
    image: HabitGenie,
    tags: ["react-native", "tailwind", "redux"],
    sourceCode: "https://github.com/AXZER10/HabitGenie",
    // demo: "https://fast-reactredux-pizza.netlify.app/",
    imgFormat: "object-cover"
  },
  {
    title: "Aurora",
    description:
      "A Full stack social media application in react-native using Expo and NativeWind.",
    image: Aurora,
    tags: ["react", "axios", "material-ui"],
    sourceCode: "https://github.com/AXZER10/Aurora",
    // demo: "https://mydictionarysearch.netlify.app/",
    imgFormat: "object-contain"
  },
  {
    title: "Google Gemini",
    description:
      "A modern, interactive Google Gemini clone with smooth animations, persistent chat history, and Google Gemini API integration for intelligent conversations.",
    image: Gemini,
    tags: ["react", "axios", "material-ui", "Firebase", "Gemini", "redux"],
    sourceCode: "https://github.com/AXZER10/Aurora",
    demo: "https://google-gemini-axzer0.netlify.app/",
    imgFormat: "object-cover"
  },
];
