# OZlify
Your personal locator for locations in Aussie.

OZlify is a simple GIS visualiser web-app that let users enter a place, address, or landmark, and shows the user where it is on the map. Ozylife also shows any useful information about that place. For instance, if a user searches "Melbourne TownHall", it might show them the link to its website, and the date in which it was built in. 

You can checkout OZlify online at https://ozlify.vercel.app


## Acknowledgement
 - [Nominatim](https://nominatim.org/release-docs/latest/api/Search/) API was used to obtain the most relevant locations based on user query. In particular, the /search API was used.
 - [Leaflet](https://leafletjs.com/examples/quick-start/) was used to visualise the interactive map.


## Technical details

### Stack

This section lists any major frameworks/libraries used to bootstrap this project. In short, it is mainly a front-end app built with React and Javascript for helper functions, and initialised using Vite.

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react)](https://skillicons.dev)

### Folder Structure

```js
/
├── src/  // front-end directory
│   │
│   ├── components/ // Map, Card and Search
│   │
│   ├── utils/ // fetcher, debouncer, labelFormatter
│
├── App.jsx/
│
├── index.html/
│
├── package.json
```

## Getting Started

- Clone the project

```bash
  git clone https://github.com/vik782/OZlify.git
```

- Under the root directory, run the following commands to install required dependencies

```bash
  npm install
```

- Run the following command to run the web-app

```bash
  npm run dev
```

- Done, go browse through some locations!
