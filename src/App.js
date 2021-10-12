import './App.css';
import {useCookies} from 'react-cookie';
import {Switch, Route} from 'react-router-dom';
import {createContext, useState, useEffect} from 'react';
//Pages
import Home from './views/Home/Home';
import Page404 from './views/404/Page404';
import Loading from './views/Loading/Loading';
import Premium from "./views/Premium/Premium";
import Features from './views/Features/Features';
import Commands from './views/Commands/Commands';
import Dashboard from './views/Dashboard/Dashboard';
import GuildsPanel from './views/GuildsPanel/GuildsPanel';
import InvalidToken from './views/ErrorPage/InvalidToken';
import Integrations from './views/Integrations/Integrations';
import Documentation from './views/Documentation/Documentation';
import LoginRedirect from './views/LoginRedirect/LoginRedirect';
import EventCreateForm from './views/EventCreate/EventCreateForm';
import EventCreateSuccess from './views/EventCreate/EventCreateSuccess';

import Test from './views/Test';
import UserService from './service/UserService';

export const UserContext = createContext(null);

function App() {
    const userService = new UserService();
    const [user, setUser] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [userGuilds, setUserGuilds] = useState(null);
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    // eslint-disable-next-line
    const [userToken, setUserToken] = useState(cookies['userToken']);
    const [language, setLanguage] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : getNavigatorLang());

    function getNavigatorLang() {
        const supportedLanguages = ['en', 'tr'];
        if (supportedLanguages.includes(navigator.language))
            return navigator.language;
        return 'en';
    }

    useEffect(() => {
        if (userGuilds) {
            setUserGuilds(userGuilds);
        }

        async function fetchData() {
            if (cookies.userToken) {
                try {
                    const userResponse = await userService.getUser(cookies.userToken);
                    const user = userResponse.data;
                    setUser(user);
                    setLoaded(true);
                } catch (e) {
                    removeCookie('userToken');
                    setLoaded(true);
                }
            } else {
                setLoaded(true);
            }
        }

        fetchData();
        // eslint-disable-next-line
    }, [userToken])

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language])

    return (
        <UserContext.Provider value={{user, setUser, userGuilds, setUserGuilds, language, setLanguage, userToken}}>
            {loaded ?
                <div>
                    <div id="content-wrapper" className='flex flex-col flex-grow'>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/integrations" component={Integrations}/>
                            <Route exact path="/features" component={Features}/>
                            <Route exact path="/documentation" component={Documentation}/>
                            <Route exact path="/commands" component={Commands}/>
                            <Route exact path="/premium" component={Premium}/>
                            <Route exact path="/dashboard" component={GuildsPanel}/>
                            <Route path="/dashboard/:id" component={Dashboard}/>
                            <Route path="/create_event/:token" component={EventCreateForm}/>
                            <Route path="/login_redirect" component={LoginRedirect}/>
                            <Route exact path="/invalid_token" component={InvalidToken}/>
                            <Route exact path="/event_create_success" component={EventCreateSuccess}/>
                            <Route exact path="/test" component={Test}/>
                            <Route component={Page404} status={404}/>
                        </Switch>
                    </div>
                </div>
                :
                <Route component={Loading}/>
            }
        </UserContext.Provider>
    );
}

export default App;
