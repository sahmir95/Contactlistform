/* eslint-disable react/prop-types */
const Search=({ value, onChange })=> {
  return (
    <div>
      <label>
        Search:
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default Search;