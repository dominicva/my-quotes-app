import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './components/Form/index';
import Search from './components/Search/index';
import QuotesList from './components/QuotesList/index';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Link to="/">
          <header>
            <h1 className="main-heading">Quotes App</h1>
          </header>
        </Link>

        <Switch>
          <Route path="/quotes">
            <QuotesList />
          </Route>
          <Route path="/">
            <Link to="/quotes">
              <button className="all-quotes__btn">View all quotes</button>
            </Link>
            <Form
              quote="To be or not to be, that is the question."
              author="Hamlet"
            />
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
