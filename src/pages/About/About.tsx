import { Window } from '../../components/Window/Window';
import './style.scss';

export const About = () => {
  return (
    <div className='about'>
      <div className='about__container pe-3 pt-3'>
        <Window keyName='about'>
          About
        </Window>
      </div>
    </div>
  )
}