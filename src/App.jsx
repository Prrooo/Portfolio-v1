import style from './App.module.css'
import "@fontsource/roboto";
import Navabar from './components/NavBar/Navabar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skill } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <div className={style.App}>
      <Navabar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
