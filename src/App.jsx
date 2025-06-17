import SearchBar from "./components/Search/SearchBar";
import "./App.css";
import Map from "./components/Map/LeafletMap";

function App() {
  return (
    <>
      <div className="left-container">
        <div className="header">
          <h1>OZlify</h1>
          <p>Find your favorite Aussie locations here! </p>
        </div>
        <SearchBar />
      </div>

      <div className="right-container">
        <Map />
      </div>
    </>
  );
}

export default App;
