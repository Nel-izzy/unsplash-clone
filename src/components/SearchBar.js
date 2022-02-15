import React from "react";

const SearchBar = ({ setSearchTerm, loading, searchTerm, handleSubmit }) => {
  return (
    <div className="header my-3">
      {loading
        ? searchTerm.length > 0 && <h5>Searching for "{searchTerm}"</h5>
        : searchTerm.length > 0 && <h5>Search Results for "{searchTerm}"</h5>}
      <form onSubmit={handleSubmit}>
        <input
          className="searchbar form-control"
          type="text"
          placeholder="Search for photo"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
