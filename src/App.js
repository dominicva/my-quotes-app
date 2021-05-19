import ReactDOM from 'react-dom';
import Quote from './components/Quote';
import Form from './components/Form';

const App = () => {
  return (
    <div className="app">
      <h1>Quotes App</h1>
      <Form />
      <Quote text="Invest in yourself" author="Scott Moss" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
