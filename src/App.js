import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EventCreateForm from './pages/EventCreate/EventCreateForm'
import EventCreateSuccess from './pages/EventCreate/EventCreateSuccess'
import InvalidToken from './pages/ErrorPage/InvalidToken';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from './pages/Test';
import Home from './pages/Home/Home';


function App() {
  return (
    <div>
      <div id="header-wrapper">
        <Header />
      </div>
      <div id="content-wrapper" className="flex-grow-1">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create_event/:token" component={EventCreateForm} />
            <Route exact path="/invalid_token" component={InvalidToken} />
            <Route exact path="/event_create_success" component={EventCreateSuccess} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </div>
      <div id="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
