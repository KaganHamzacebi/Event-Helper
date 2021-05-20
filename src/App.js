import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import EventCreateForm from './pages/EventCreate/EventCreateForm'
import EventCreateSuccess from './pages/EventCreate/EventCreateSuccess'
import InvalidToken from './pages/ErrorPage/InvalidToken';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from './pages/Test';
import Loading from './pages/Loading/Loading';
import Home from './pages/Home/Home';
import Page404 from './pages/404/Page404';
import LoginRedirect from './pages/LoginRedirect/LoginRedirect'
import GuildsPanel from './pages/GuildsPanel/GuildsPanel';
import Dashboard from './pages/Dashboard/Dashboard';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const [user, setUser] = useState(null);
  const [userGuilds, setUserGuilds] = useState(null);
  const [userToken, setUserToken] = useState(cookies['userToken']);
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    if (cookies.userToken) {
      const userResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/@me`, {}, {
        headers: {
          authorization: cookies.userToken,
        },
      });

      const user = userResponse.data;

      if (user) {
        setUser(user);
        setLoaded(true);
      }
    }
    else {
      setLoaded(true);
    }
  }, [userToken])

  return (
    <UserContext.Provider value={{ user, setUser, userGuilds, setUserGuilds, userToken }}>
      { loaded ?
        <div>
          <div id="header-wrapper" className='sticky top-0 z-50 items-start'>
            <Header />
          </div>
          <div id="content-wrapper" className="flex-grow-1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={GuildsPanel} />
              <Route path="/dashboard/:id" component={Dashboard} />
              <Route path="/create_event/:token" component={EventCreateForm} />
              <Route path="/login_redirect" component={LoginRedirect} />
              <Route exact path="/invalid_token" component={InvalidToken} />
              <Route exact path="/event_create_success" component={EventCreateSuccess} />
              <Route exact path="/test" component={Test} />
              <Route component={Page404} />
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
