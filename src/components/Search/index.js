const Search = () => {
  return (
    <div className="search-quotes__container">
      <label htmlFor="">
        Search quotes
        <input type="text" />
      </label>
      <button className="search-quotes__btn">Search</button>
    </div>
  );
};

export default Search;
