import L from "leaflet";
import { useEffect, useRef } from "react";

export default function LeafletMap({ location }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const defaultCoordinates = [-37.810272, 144.962646]; // Melbourne CBD coordinates
  const defaultZoom = 13;

  useEffect(() => {
    // Map is initialised once, avoids error of Map already initialised
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView(defaultCoordinates, defaultZoom);

      // Display Leaflet map, adopted from: https://leafletjs.com/examples/quick-start/
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }
  }, []);

  useEffect(() => {
    if (!location) return;

    const latLon = [parseFloat(location.lat), parseFloat(location.lon)];

    if (markerRef.current) {
      // Removes previous marker
      mapRef.current.removeLayer(markerRef.current);
    }

    // Places marker of the selected location on map
    markerRef.current = L.marker(latLon).addTo(mapRef.current);

    mapRef.current.panTo(latLon); // Slowly pans to new marker
    mapRef.current.setView(latLon, 18); // Centers and zoomed into new marker
  }, [location]);

  return <div id="map"></div>;
}
