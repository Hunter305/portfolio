import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills2 from "./components/Skills2";
import "./styles/app.css";
import SkillSection from "./components/SkillSection";
import ProfessionalExperience from "./components/ProfessionalExperience";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <SkillSection />
      <Projects />
      <ProfessionalExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
