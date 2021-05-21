import { useState } from 'react';
import useInput from '../../hooks/useInput';
import Quote from '../Quote';

const Search = () => {
  const { value, bind, reset } = useInput('');
  const [results, setResults] = useState([]);

  const requestQuotes = async () => {
    const url = `http://localhost:3000/search/${value}`;

    const response = await fetch(url).then((response) => response.json());

    setResults(response);
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
      <section className="results__container">
        <h2>Search results</h2>
        {results.map((result) => (
          <Quote
            quote={result.quote}
            author={result.author}
            key={`${result.quote}-${result.author}`}
          />
        ))}
      </section>
    </div>
  );
};

export default Search;
