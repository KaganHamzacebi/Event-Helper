import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';

import EventCreateForm from './pages/EventCreate/EventCreateForm'
import EventCreateSuccess from './pages/EventCreate/EventCreateSuccess'
import InvalidToken from './pages/ErrorPage/InvalidToken';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from './pages/Test';
import Home from './pages/Home/Home';
import LoginRedirect from './pages/LoginRedirect/LoginRedirect';
import Dashboard from './pages/Dashboard/Dashboard';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);
export const UserTokenContext = createContext(null);

function App() {
  const history = useHistory();

  const [user, setUser] = useState(localStorage.getItem('user'));
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));

  useEffect(() => {
    if (userToken) {
      const fragment = new URLSearchParams(userToken);
      const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`
        }
      })
        .then(result => result.json())
        .then(response => {
          setUserToken(userToken);
          setUser(response);
          localStorage.setItem('userToken', userToken);
          localStorage.setItem('user', JSON.stringify(response));
          /* history.push('/dashboard'); */
        })
        .catch(console.error);
    }
  }, [userToken])

  return (
    <UserContext.Provider value={{ user, setUser, userToken, setUserToken }}>
      <div>
        <div id="header-wrapper">
          <Header />
        </div>
        <div id="content-wrapper" className="flex-grow-1">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login_redirect" component={LoginRedirect} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/create_event/:token" component={EventCreateForm} />
            <Route exact path="/invalid_token" component={InvalidToken} />
            <Route exact path="/event_create_success" component={EventCreateSuccess} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
        <div id="footer-wrapper">
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
