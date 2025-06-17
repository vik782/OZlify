import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";
import { search } from "../../utils/fetcher";

export default function SearchBar() {
  // TO-DO: Replace with actual data from locations API
  const options = ["Melbourne", "Perth", "Sydney", "Brisbane", "Adelaide"];

  const getLocations = async (query) => {
    if (!query) {
      // Empty query, no get request needed
      return;
    }
    try {
      // endpoint and params being used: https://nominatim.org/release-docs/latest/api/Search/
      const data = await search("/search", {
        q: query,
        format: "json",
        countrycodes: "au",
        extratags: 1,
        addressdetails: 1,
      });
      console.log("Fetched locations: ", data);
    } catch (error) {
      throw new Error("Failed in fetching locations: " + error.message);
    }
  };

  // TO-DO: Only for testing
  getLocations("Melbourne Town Hall");

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
