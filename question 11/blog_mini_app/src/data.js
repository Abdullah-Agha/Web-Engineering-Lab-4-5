// src/data.js
export const blogPosts = [
    {
      id: 1,
      title: "Understanding React State",
      excerpt: "State is the heart of React components. Learn how to use it.",
      content: "State allows React components to change their output over time in response to user actions, network responses, and anything else. Think of it as the memory of your component. When state changes, React automatically re-renders the component to show the new data!"
    },
    {
      id: 2,
      title: "React Router Basics",
      excerpt: "How to navigate between pages without reloading the browser.",
      content: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. This is what makes Single Page Applications (SPAs) feel so fast."
    },
    {
      id: 3,
      title: "Why Vite is Awesome",
      excerpt: "Next generation frontend tooling that is lightning fast.",
      content: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It serves your code via native ES modules, making server start-up and hot-module-replacement (HMR) incredibly fast compared to older tools like Create React App."
    }
  ];