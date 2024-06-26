import { useOpenManagement } from '../../store/openManagement';
import Logo from '../../assets/img/png/win-logo.png'
import './styles.scss';

export const Toolbar = () => {
  const { handleOpen } = useOpenManagement();

  return (
    <div className='toolbar d-flex align-items-center'>
      <button className='toolbar__start px-1 d-flex align-items-center justify-content-center' onClick={() => handleOpen("menu", true)}>
        <img className='me-1' src={Logo} alt="" />
        Start
      </button>
    </div>
  )
}