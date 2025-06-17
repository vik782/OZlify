import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";
import { useState } from "react";
import { search } from "../../utils/fetcher";

export default function SearchBar({ location, onSelect }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);

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

      if (data.length > 0) {
        data.map((location) => ({
          // extratags and address params may not be present in all locations, defaulting to empty objects
          info: location.extratags ?? {},
          address: location.address ?? {},
        }));
        setOptions(data);
      }

      console.log("Mapped data: ", data);
    } catch (error) {
      throw new Error("Failed in fetching locations: " + error.message);
    }
  };

  // Each key stroke fetches the API for autocomplete
  // TO-DO: debounce function to reduce API calls
  const handleInputChange = (event, value) => {
    console.log("Query changed: ", value);
    setQuery(value);

    if (!value) {
      // Empty query, reset options and close dropdown
      setOpen(false);
      setOptions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    getLocations(query);
  };

  const handleChange = (event, value) => {
    // Deleting query from input is also a change, hence prevent empty selection
    if (value) {
      onSelect(value);
    }
  };

  const handleOpen = () => {
    if (query) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Autocomplete
      className="search-bar"
      loading={loading}
      open={open}
      options={options}
      value={location}
      getOptionLabel={(option) => option.display_name}
      noOptionsText={"No locations found"}
      onOpen={handleOpen}
      onClose={handleClose}
      onInputChange={handleInputChange}
      onChange={handleChange}
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
