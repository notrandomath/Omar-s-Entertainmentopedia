import "./searchBar.scss";

const SearchBar = ({ field, value, ...props }) => {
  return (
    <div className="searchBar">
      <input name="searchBar" {...field} {...props} />
      <button type="submit">
        <img src="assets/search.svg" alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
