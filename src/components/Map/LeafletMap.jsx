import L from "leaflet";
import { useEffect, useRef } from "react";

export default function LeafletMap() {
  const mapRef = useRef(null);

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

  return <div id="map"></div>;
}
