 require([
      "esri/map",
        "esri/geometry/Point",
      "esri/SpatialReference",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
         "esri/Color",
      "esri/tasks/locator",
      "dojo/domReady!",
       "esri/graphic",
    ], function (Map,Point,SpatialReference,SimpleMarkerSymbol,SimpleLineSymbol,Color, locator,dom,Graphic){
      var map;
/////////////////////////////////////////////////////
function ShowLocation(x, y) {
    // var point = new Point([-122.65,45.53],new SpatialReference({ wkid:4326 }));
    var point = new Point(x,y);
   var sms = new  SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 10,
    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
    new Color([255,0,0]), 1),
    new Color([0,255,0,0.25]));
    var graphic = new Graphic(point, sms);
    map.graphics.add(graphic);
  console.log(map.graphics)
  };
/////////////////////////////////////////////////////
      map = new Map("map", {
        basemap: "topo-vector",
        // 32.06401333664925__84.76181718748788
        center: [84.76181718748788, 32.06401333664925], // lon, lat
        zoom: 4
      });
     map.on("click", function (e) {
		parent.postMessage(e.mapPoint.getLatitude()+"__"+e.mapPoint.getLongitude(),'*' )

console.log(e.mapPoint.getLatitude())
console.log(e.mapPoint.getLongitude())
ShowLocation(e.mapPoint.getLongitude(),e.mapPoint.getLatitude());
        });
    });
