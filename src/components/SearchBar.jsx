import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  // TO-DO: Replace with actual data from locations API
  const options = ["Melbourne", "Perth", "Sydney", "Brisbane", "Adelaide"];

  return (
    <Autocomplete
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
