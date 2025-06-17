import { useState } from "react";
import SearchBar from "./components/Search/SearchBar";
import LeafletMap from "./components/Map/LeafletMap";
import "./App.css";

function App() {
  const [location, setLocation] = useState(null);

  return (
    <>
      <div className="left-container">
        <div className="header">
          <h1>OZlify</h1>
          <p>Find your favorite Aussie locations here! </p>
        </div>
        <SearchBar setLocation={setLocation} />
      </div>

      <div className="right-container">
        <LeafletMap location={location} />
      </div>
    </>
  );
}

export default App;
