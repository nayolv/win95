import { usePrincipalMenuState } from '../../store/principalMenu';
import Logo from '../../assets/img/png/win-logo.png'
import './styles.scss';

export const Toolbar = () => {
  const { handleMenu } = usePrincipalMenuState();

  return (
    <div className='toolbar d-flex align-items-center' onClick={handleMenu}>
      <button className='toolbar__start px-1 d-flex align-items-center justify-content-center'>
        <img className='me-1' src={Logo} alt="" />
        Start
      </button>
    </div>
  )
}