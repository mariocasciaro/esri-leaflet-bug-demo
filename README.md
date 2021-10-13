Esri leaflet bug demo
===

GH issue link: https://github.com/Esri/esri-leaflet-vector/issues/103

**IMPORTANT: Set a valid Esri API key in `src/app.js`** before trying the demo

To run the demo simply clone this repo, then:

```shell
cd path/to/esri-leaflet-bug-demo
npm install
npm start
```

This will build the sources and start a webpack dev server.

Go to `http://localhost:5000` to see the demo

If you want to build the sources in production mode and save the files in the the `public` directory, run:

```shell
npm run build-release
```

Then run:

```shell
npm run serve
```

This will start a local http server, serving the files in the `public` directory.


