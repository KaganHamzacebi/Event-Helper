import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import moment from 'moment';
import EventCreateForm from './pages/EventCreate/EventCreateForm'
import EventCreateSuccess from './pages/EventCreate/EventCreateSuccess'
import InvalidToken from './pages/ErrorPage/InvalidToken';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from './pages/Test';
import Loading from './pages/Loading/Loading';
import Home from './pages/Home/Home';
import LoginRedirect from './pages/LoginRedirect/LoginRedirect';
import Dashboard from './pages/Dashboard/Dashboard';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);
export const UserTokenContext = createContext(null);

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(cookies.userToken);
    if (cookies.userToken) {
      const fragment = new URLSearchParams(cookies.userToken);
      const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`
        }
      })
        .then(result => result.json())
        .then(response => {
          setUser(response);
          setLoaded(true);
        })
        .catch(console.error);
    }
    else {
      setLoaded(true);
    }
  }, [cookies.userToken])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { loaded ?
        <div>
          <div id="header-wrapper">
            <Header />
          </div>
          <div id="content-wrapper" className="flex-grow-1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/create_event/:token" component={EventCreateForm} />
              <Route exact path="/invalid_token" component={InvalidToken} />
              <Route exact path="/event_create_success" component={EventCreateSuccess} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/login_redirect" component={LoginRedirect} />
            </Switch>
          </div>
          <div id="footer-wrapper">
            <Footer />
          </div>
        </div>
        :
        <Route path="/" component={Loading} />
      }
    </UserContext.Provider>
  );
}

export default App;
