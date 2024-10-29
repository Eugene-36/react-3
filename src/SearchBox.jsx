const SearchBox = ({ search, onSearch }) => {
  return (
    <div className="search-input">
      <label htmlFor=''>Search by name</label>
      <input
        type='text'
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
