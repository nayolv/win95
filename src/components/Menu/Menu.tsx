import { Links } from './components/Links';
import './styles.scss';

export const Menu = () => {
  return (
    <div className="menu d-flex">
      <div className='menu__lateral d-flex'>
        <p className='text mb-3'>
          Windows95
        </p>
      </div>
      <Links />
    </div>
  )
}