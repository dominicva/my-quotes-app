import ReactDOM from 'react-dom';
import Form from './components/Form/index';

const App = () => {
  return (
    <div className="app">
      <h1>Quotes App</h1>
      <Form />
      {/* <Quote text="Invest in yourself" author="Scott Moss" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
