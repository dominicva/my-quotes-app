import { useState } from 'react';

const Form = () => {
  const [quote, setQuote] = useState(
    'To be, or not to be, that is the question.'
  );
  const [author, setAuthor] = useState('Hamlet');

  return (
    <div className="create-quote">
      <form className="create-quote__form">
        <label htmlFor="quote__text-area">
          Quote
          <textarea
            onChange={(e) => setQuote(e.target.value)}
            onBlur={(e) => setQuote(e.target.value)}
            rows="4"
            id="quote__text-area"
            type="text"
            value={quote}
            placeholder="Quote text"
          />
        </label>
        <label htmlFor="quote__author-input">
          Author
          <input
            onChange={(e) => setAuthor(e.target.value)}
            onBlur={(e) => setAuthor(e.target.value)}
            rows="4"
            id="quote__author-input"
            type="text"
            value={author}
            placeholder="Author"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
