import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";
import { useState } from "react";
import { search } from "../../utils/fetcher";
import useDebounce from "../../utils/debouncer";

export default function SearchBar({ setLocation }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(null);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);

  const getLocations = async (query) => {
    if (!query) {
      // Empty query, no get request needed
      return;
    }
    try {
      // Search endpoint and params being used from: https://nominatim.org/release-docs/latest/api/Search/
      const data = await search("/search", {
        q: query,
        format: "json",
        countrycodes: "au",
        extratags: 1,
        addressdetails: 1,
      });

      if (data.length > 0) {
        const mapped = data.map((location) => ({
          name: location.name,
          display_name: location.display_name,
          lat: location.lat,
          lon: location.lon,
          // extratags and address params may not be present in all locations, defaulting to empty objects
          info: location.extratags ?? {},
          address: location.address ?? {},
        }));
        setOptions(mapped);
      } else {
        // Inserts as a dropdown option when no locations are found
        setOptions([{ display_name: "No location found", disabled: true }]);
      }
    } catch (error) {
      setOptions([{ display_name: "No location found", disabled: true }]);
      throw new Error("Failed in fetching locations: " + error.message);
    }
  };

  const debounceCall = useDebounce(getLocations, 500);

  // Each key stroke fetches the API for autocomplete
  const handleInputChange = (event, value, reason) => {
    console.log("Query changed: ", value);
    setQuery(value);

    if (reason !== "input") {
      // Prevents API call when query is unchanged, but user selects an option
      setLoading(false);
      return;
    }

    if (!value) {
      // Empty query, reset options and close dropdown
      setOpen(false);
      setOptions([]);
      setLoading(false);
      return;
    }

    // New query, reset options then attempt to fetch new locations
    setOptions([]);
    setLoading(true);
    debounceCall(value);
  };

  const handleChange = (event, value) => {
    setValue(value);
    if (value && !value.disabled) {
      // New location selected, updates map accordingly
      setLocation(value);
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
      value={value}
      popupIcon={null}
      options={options}
      filterOptions={(option) => option}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.display_name}
      getOptionDisabled={(option) => !!option.disabled}
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
