import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EventCreateForm from './pages/EventCreate/EventCreateForm'
import InvalidToken from './pages/ErrorPage/InvalidToken';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/create_event/:token" component={EventCreateForm} />
          <Route exact path="/invalid_token" component={InvalidToken} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
