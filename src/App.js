import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EventCreateForm from './pages/EventCreate/EventCreateForm'
import EventCreateSuccess from './pages/EventCreate/EventCreateSuccess'
import InvalidToken from './pages/ErrorPage/InvalidToken';
import Test from './pages/Test';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/create_event/:token" component={EventCreateForm} />
          <Route exact path="/invalid_token" component={InvalidToken} />
          <Route exact path="/event_create_success" component={EventCreateSuccess} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
