import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Initial from '../initial/initial';
import Login from '../login/login';
import Registration from '../registration/registration';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';
import Main from '../main/main';
import api from '../utils/Api.js';
import apiAuth from '../utils/Auth.js'



function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [isInfoToolTip, setisInfoToolTip] = useState(false);

  function get() {
    api.getUserInfo().then((user) => {
      if(user){
        console.log(user)
      }
    }).catch((err) => {
      console.log(err)
  });
  }

  function tokenCheck() {
    if(localStorage.getItem('jwt')){
   apiAuth.getContent().then((res) => {
     if(res.message === 'Необходима авторизация'){
      console.log(res)
     }else{
       setloggedIn(true)
     }
   }).catch(err => console.log(err));
 }
 }
 React.useEffect(() =>{
  tokenCheck()
},[])
 function handleLogin(login){
  setloggedIn(true)
}

 function login(log) {
   if (!log){
     return;
   }
 
   apiAuth.authorize(log.password,log.login).then((data) => {
     if (data.message === 'Неправильные почта или пароль'){
       console.log(data)
     }else{
       handleLogin(log.login);
       get()
       console.log(isInfoToolTip)
       localStorage.setItem('jwt', log.login);
     }
   })
   .catch(err => console.log(err));
 }
 
 
 
 function register(reg) {
   apiAuth.register(reg.password,reg.email, reg.login).then((res) => {
     if(res){
      console.log(res)
      login({password: reg.password, login: reg.login})

 
     } else {
       setisInfoToolTip(true)
 
     }
 }).catch(err =>{
   console.log(err)
   setisInfoToolTip(true)
 });
 }



  return (
    <>
    <Switch>
    
    <Route path="/notfound">
                  <NotFound />
    </Route>
    <Route exact path="/">
    {loggedIn
                    ? < Redirect to="/main" />
                    : <Initial />
                  }
    < Redirect to="/initial" />
    </Route>
    <Route exact path="/initial">
    {loggedIn
                    ? < Redirect to="/main" />
                    : <Initial />
                  }

    </Route>
    
    <Route exact path="/login">
    {loggedIn
                    ? < Redirect to="/main" />
                    : <Login handleSubmit={login}/>
                  }
    </Route>
    <Route exact path="/registration">
    {loggedIn
                    ? < Redirect to="/main" />
                    : <Registration handleSubmit={register} />
    }
    </Route>

    <ProtectedRoute
    path="/main"
    loggedIn={loggedIn}
    component={Main}
    />

    <Route path="*">
      <Redirect to="/notfound" />
      </Route>
    
    </Switch>

    </>
  );
}

export default App;
