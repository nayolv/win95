import './App.scss'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Menu } from './components/Menu/Menu';
import { usePrincipalMenuState } from './store/principalMenu';

function App() {
  const { isOpen, cleanState } = usePrincipalMenuState();

  return (
    <>
      <main>

        <div className='container__main' onClick={cleanState}>
          Main
        </div>
        {isOpen ?
          <Menu />
          :
          null}
      </main>
      <footer>
        <Toolbar />
      </footer>
    </>
  )
}

export default App
