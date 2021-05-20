// import { useState } from 'react';
// import QuoteInput from './QuoteInput';
// import AuthorInput from './AuthorInput';
// import SelectCategory from './SelectCategory';
import useInput from '../../hooks/useInput';

const CATEGORIES = ['philosophy', 'science', 'contemplation'];

const Form = function () {
  const { value: quote, bind: bindQuote, reset: resetQuote } = useInput('');
  const { value: author, bind: bindAuthor, reset: resetAuthor } = useInput('');
  const {
    value: category,
    bind: bindCategory,
    reset: resetCategory,
  } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Submitting ${quote} attributed to ${author} with the category ${category}`
    );
    resetQuote();
    resetAuthor();
    resetCategory();
    // fetch(`http://localhost:3000/create-quote`, {
    //   method: 'POST',
    //   body: JSON.stringify({ quote }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  };

  return (
    <div className="create-quote">
      <form onSubmit={handleSubmit} className="create-quote__form">
        <label htmlFor="quote__text-area">
          Quote
          <textarea
            rows="4"
            id="quote__text-area"
            type="text"
            {...bindQuote}
            placeholder="Quote"
          />
        </label>
        <label htmlFor="quote__author-input">
          Author
          <input
            id="quote__author-input"
            type="text"
            {...bindAuthor}
            placeholder="Hamlet"
          />
        </label>
        <label htmlFor="category">
          Category
          <select id="category" {...bindCategory}>
            <option />
            {CATEGORIES.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        {/* <QuoteInput />
        <AuthorInput />
        <SelectCategory /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
