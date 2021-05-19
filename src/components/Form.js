import { useState, useEffect } from 'react';
import InputControl from './InputControl';

const Form = () => {
  const [quote, setQuote] = useState(
    'To be, or not to be, that is the question.'
  );
  const [author, setAuthor] = useState('Hamlet');
  const [category, setCategory] = useState('');

  return (
    <div className="create-quote">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // POST request to create new quote in api
        }}
        className="create-quote__form"
      >
        <InputControl
          id="quote__text-area"
          labelText="Quote"
          inputType="textarea"
          placeholder="Quote text"
        />
        <InputControl
          id="quote__author-input"
          labelText="Author"
          placeholder="Author"
        />
        <InputControl id="category" labelText="Category" inputType="dropdown" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
