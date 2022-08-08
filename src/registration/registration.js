import './registration.css';

import React from 'react';
import FormValidation from '../FormValidation/FormValidation';
import { Link } from 'react-router-dom';
function Registration(props) {

  const {
    values, handleChange, errors, isValid,
  } = FormValidation({ email: '',login: '', password: '' , passwordagain: ''});


  function handleSubmit(event) {
        event.preventDefault();
       props.handleSubmit(values)
    }

 function CheckValidate(event)  {  
     if (event.key === ' ') {
      event.preventDefault();
     }

  }
    return (
     <>
     <div className='title'>
     <p className='text title__name'>SqueezedStrings</p>
     <p className='text title__named'>Регистрация</p>
     </div>
         <form onSubmit={handleSubmit} name="sign-up" className="regform">
  <label>
  <p className="text regform__name">Почта</p>
          <input name="email" value={values.email} onChange={handleChange} onKeyPress={(e) => CheckValidate(e)} type="email" className="text regform__input" placeholder="Введите E-mail" id="email" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
          <p className="text form__error">{errors.email}</p>
  </label>
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
  <label>
  <p className="text regform__name">Пароль (ещё раз)</p>
          <input name="passwordagain" type="password" id='passwordagain' minLength={1} maxLength={30} value={values.passwordagain} onChange={handleChange} className="text regform__input" placeholder="Введите пароль (ещё раз) " required/>
          <p className="text form__error">{errors.passwordagain}{values.password === values.passwordagain ? '' : 'Пароли не совпадают'}</p>
  </label>
        <button type="submit" className={`btn button__signin reg__btn-signin ${isValid && values.password === values.passwordagain    ? '' : 'disable'}`}>Зарегистрироваться</button>
        <p className='btn button__login reg__btn-login'><Link to={'/login'} className="btn login__ent ent__sign">Войти</Link></p>
     </form>
     
     </>
    );
  }
  
  export default Registration;