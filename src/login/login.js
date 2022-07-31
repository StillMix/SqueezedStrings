import './login.css';
import FormValidation from '../FormValidation/FormValidation';
import { Link } from 'react-router-dom';
function Login() {
  const {
    values, handleChange, errors, isValid,
  } = FormValidation({ login: '', password: '' });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

 function CheckValidate(event)  {  
     if (event.key === ' ') {
      event.preventDefault();
     }

  }
    return (
     <>
     <div className='title'>
     <p className='text title__name'>SqueezedStrings</p>
     <p className='text title__named'>Вход</p>
     </div>
         <form onSubmit={handleSubmit} className="regform">
  <label>
  <p className="text regform__name">Логин</p>
          <input name="login" value={values.login} onChange={handleChange} type="login" onKeyPress={(e) => CheckValidate(e)} className="text regform__input" placeholder="Введите логин" id="login" required pattern="[a-zA-z]{1,}"/>
          <p className="text form__error">{errors.login}</p>
  </label>
  <label> 
  <p className="text regform__name">Пароль</p>
          <input name="password" type="password" id='password' minLength={1} maxLength={30} value={values.password} onChange={handleChange} className="text regform__input" placeholder="Введите пароль" required/>
          <p className="text form__error">{errors.password}</p>
  </label>
        <button type="submit" className={`btn button__signin reg__btn-signin ${isValid ? '' : 'disable'}`}><Link to={'/main'} className="btn signin__ent ent_sign">Авторизоваться</Link></button>
        <p className='btn button__login reg__btn-login'><Link to={'/registration'} className="btn login__ent ent__sign">Нет аккаунта?</Link></p>
     </form>
     
     </>
    );
  }
  
  export default Login;