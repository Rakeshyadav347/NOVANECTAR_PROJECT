import "./App.css";
import Navbar from "./components/Homepage/Navbar";
import HeroSection from "./components/Homepage/HeroSection";

import AllLog from "./components/LoginComp/AllLog";
import FeatCompany from "./components/Homepage/FeatCompany";
import PopularCourses from "./components/Homepage/PopularCourses";
import AboutCompany from "./components/Homepage/AboutCompany";
import Blogs from "./components/Homepage/Blogs";
import Testimonials from "./components/Homepage/Testimonials";
import Faq from "./components/Homepage/Faq";
import Footer from "./components/Homepage/Footer";
function App() {
  return (
    <>
      {/* <AllLog /> */}
      <Navbar />
      <HeroSection />
      <FeatCompany />
      <PopularCourses />
      <AboutCompany />
      <Blogs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
