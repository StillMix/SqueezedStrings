import './initial.css';
import { Link } from 'react-router-dom';
function Initial() {
    return (
     <>
     <div className='title'>
     <p className='text title__hello'>Добро пожаловать!</p>
     <p className='text title__name'>SqueezedStrings</p>
     </div>
    <div className='buttons'>
      <button className='button__signin btn'><Link to={'/registration'} className="btn signin__ent">Зарегистрироваться</Link></button>
      <p className='text button_text'>или</p>
      <p className='btn button__login'><Link to={'/login'} className="btn login__ent">Войти</Link></p>
    </div>
     </>
    );
  }
  
  export default Initial;