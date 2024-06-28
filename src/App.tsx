import './App.scss'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Menu } from './components/Menu/Menu';
import { useOpenManagement } from './store/openManagement';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Experience } from './pages/Experience/Experience';
import { Contact } from './pages/Contact/Contact';

function App() {
  const { isOpen, handleClose } = useOpenManagement();
  return (
    <>
      <main>
        <div className='container__main' onClick={() => handleClose("menu")}>
          {isOpen["about"] && <About />}
          {isOpen["projects"] && <Projects />}
          {isOpen["experience"] && <Experience />}
          {isOpen["contact"] && <Contact />}
        </div>
        {isOpen["menu"] && <Menu />}
      </main>
      <footer>
        <Toolbar />
      </footer>
    </>
  )
}

export default App
