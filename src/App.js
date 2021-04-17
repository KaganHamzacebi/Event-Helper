import './App.css';
import EventCreateForm from './components/Event/EventCreateForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={EventCreateForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
