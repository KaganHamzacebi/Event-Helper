import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EventCreateForm from './pages/EventCreate/EventCreateForm'
import EventCreateSuccess from './pages/EventCreate/EventCreateSuccess'
import InvalidToken from './pages/ErrorPage/InvalidToken';
import Header from "./components/Header";
import Test from './pages/Test';


function App() {
  return (
    <div>
      <div id="header-wrapper">
        <Header />
      </div>
      <div id="content-wrapper" className="flex-grow-1">
        <Router>
          <Switch>
            <Route path="/create_event/:token" component={EventCreateForm} />
            <Route exact path="/invalid_token" component={InvalidToken} />
            <Route exact path="/event_create_success" component={EventCreateSuccess} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
