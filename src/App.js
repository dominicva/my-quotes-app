import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/index';

const App = () => {
  return (
    <div className="app">
      <h1>Quotes App</h1>
      <Form quote="To be or not to be, that is the question." author="Hamlet" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
