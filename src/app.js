const $ = require('jquery')
window.$ = $
window.jQuery = $

require('angular')
require('leaflet')
L.esri = require('esri-leaflet')
L.esri.Vector = require('esri-leaflet-vector')

angular.module('esriTest', [])
  .directive('mapvtwo', function () {
    return {
      restrict: 'AE',
      template: require('./map.html'),
      scope: {},
      link: function (scope, $elem, $attrs) {
        const mapElem = $elem.find('.map')

        const map = L.map(mapElem.get(0), {});
        map.setView([37.78, -42.85], 3, { animate: false });
        L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", {
          apikey: "YOUR ESRI API KEY"
        }).addTo(map);
      }
    }
  })
