const BASE_URL = "https://nominatim.openstreetmap.org";

/* Fetches locations data from user query from Nominatim API */
export function search(endpoint, params) {
  const apiURL = new URL(BASE_URL + endpoint);
  Object.entries(params).forEach(([key, value]) => {
    apiURL.searchParams.append(key, value);
  });
  return fetch(apiURL).then((response) => response.json());
}
