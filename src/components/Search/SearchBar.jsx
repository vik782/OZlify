import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

export default function SearchBar() {
  // TO-DO: Replace with actual data from locations API
  const options = ["Melbourne", "Perth", "Sydney", "Brisbane", "Adelaide"];

  return (
    <Autocomplete
      className="search-bar"
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          placeholder="Find a location in Australia"
        />
      )}
    />
  );
}
