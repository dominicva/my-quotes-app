import { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import Quote from '../Quote';

const Search = () => {
  const { value, bind, reset } = useInput('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {}, []);

  const requestQuotes = async (e) => {
    const url = `http://localhost:3000/search/${value}`;

    const response = await fetch(url).then((response) => response.json());

    setQuotes(response);
    reset();
  };

  return (
    <div className="search__container">
      <label htmlFor="search-input">
        Search quotes
        <input type="text" id="search-input" {...bind} />
      </label>
      <button onClick={requestQuotes} className="search__btn">
        Search
      </button>
      {quotes.map((quote) => (
        <Quote
          quote={quote.quote}
          author={quote.author}
          key={`${quote.quote}-${quote.author}`}
        />
      ))}
    </div>
  );
};

export default Search;
