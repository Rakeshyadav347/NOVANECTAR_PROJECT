import "./App.css";
import Navbar from "./components/Homepage/Navbar";
import HeroSection from "./components/Homepage/HeroSection";

import AllLog from "./components/LoginComp/AllLog";
import FeatCompany from "./components/Homepage/FeatCompany";
import PopularCourses from "./components/Homepage/PopularCourses";
import AboutCompany from "./components/Homepage/AboutCompany";
import Blogs from "./components/Homepage/Blogs";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatCompany />
      <PopularCourses />
      <AboutCompany />
      <Blogs />
    </>
  );
}

export default App;
