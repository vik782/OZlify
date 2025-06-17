import SearchBar from "./components/Search/SearchBar";
import "./App.css";
import Map from "./components/Map/LeafletMap";

function App() {
  return (
    <>
      <h1>OZlify</h1>
      <p>Find your favorite Aussie locations here! </p>
      <SearchBar />
      <Map />
    </>
  );
}

export default App;
