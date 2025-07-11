import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Project from './components/project';
import Contact from './components/contact';
function App() {
  return (
    <div style={{ overflowX: "hidden", width: "100%", maxWidth: "100%" }}>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
  </div>
  );
};

export default App;