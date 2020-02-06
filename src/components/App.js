import React from 'react';
import PropTypes, { string } from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Home = () => (
  <h1>Rick and Morty</h1>
);

const Details = ({ match }) => {
  return <h2> Who is {match.params.name}</h2>;
};

Details.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ name: string.isRequired }) }).isRequired
};

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </nav>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:name" component={Details} />
      </Switch>
    </Router>
  );
}
