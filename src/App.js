import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/index';
import Search from './components/Search/index';

const App = () => {
  return (
    <div className="app">
      <h1>Quotes App</h1>
      <Form quote="To be or not to be, that is the question." author="Hamlet" />
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
