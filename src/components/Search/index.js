import useInput from '../../hooks/useInput';

const Search = () => {
  const { value, bind, reset } = useInput('');

  const handleSearch = (e) => {
    const url = `http://localhost:3000/search/${value}`;

    fetch(url);

    reset();
  };

  return (
    <div className="search__container">
      <label htmlFor="search-input">
        Search quotes
        <input type="text" id="search-input" {...bind} />
      </label>
      <button onClick={handleSearch} className="search__btn">
        Search
      </button>
    </div>
  );
};

export default Search;
