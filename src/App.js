import './App.css';
import EventCreateForm from './components/Event/EventCreateForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InvalidToken from './components/InvalidToken';

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
