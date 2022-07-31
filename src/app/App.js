
import './App.css';
import Initial from '../initial/initial';
import Login from '../login/login';
import Registration from '../registration/registration';
import NotFound from '../NotFound/NotFound';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
function App() {
  return (
    <>
    <Switch>
    <Route path="/notfound">
                  <NotFound />
    </Route>
    <Route exact path="/">
    < Redirect to="/initial" />
    </Route>
    <Route exact path="/initial">
    <Initial />
    </Route>
    <Route exact path="/login">
    <Login />
    </Route>
    <Route exact path="/registration">
    <Registration />
    </Route>
    <Route path="*">
      <Redirect to="/notfound" />
      </Route>
    </Switch>
    </>
  );
}

export default App;
