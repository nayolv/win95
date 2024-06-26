import './App.scss'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Menu } from './components/Menu/Menu';
import { useOpenManagement } from './store/openManagement';
import { About } from './pages/About/About';

function App() {
  const { isOpen, cleanState } = useOpenManagement();
  console.log(isOpen)
  return (
    <>
      <main>
        <div className='container__main' onClick={() => cleanState("menu")}>
          {isOpen["about"] && <About />}
          
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
