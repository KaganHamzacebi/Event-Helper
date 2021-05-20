import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
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
import GuildsPanel from './pages/GuildsPanel/GuildsPanel';
import Dashboard from './pages/Dashboard/Dashboard';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

export const UserContext = createContext(null);

ReactGA.initialize('UA-197548337-1');
TagManager.initialize('GTM-NJSM4BL');
ReactGA.pageview(window.location.pathname + window.location.search);

const RouteChangeTracker = ({ history }) => {

  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div></div>;
};

withRouter(RouteChangeTracker);

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
              <Route exact path="/invalid_token" component={InvalidToken} />
              <Route exact path="/event_create_success" component={EventCreateSuccess} />
              <Route exact path="/test" component={Test} />
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
