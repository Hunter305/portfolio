import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
