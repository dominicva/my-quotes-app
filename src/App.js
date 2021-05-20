import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form/index';
import Search from './components/Search/index';
import QuotesList from './components/QuotesList/index';

const App = () => {
  return (
    <div className="app">
      <h1>Quotes App</h1>
      <Router>
        <Switch>
          <Route path="/quotes">
            <QuotesList />
          </Route>
          <Route path="/">
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
