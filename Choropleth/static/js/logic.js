//Creating the map object
let myMap = L.map("map", {
  center: [37.54, -96.0059],
  zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
let geoData = "https://data-lakecountyil.opendata.arcgis.com/api/download/v1/items/cd63911cc52841f38b289aeeeff0f300/geojson?layers=8";

// Get the data with d3.
d3.json(geoData).then(function(data) {
  console.log(data);
  
  // Create a new choropleth layer.
  let geojson = L.choropleth(data, {
 
    // Define which property in the features to use.
    valueProperty:"Obesity",

    // Set the color scale.
    scale: ['#ffffb2','#b10026'],

    // The number of breaks in the step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: 'q',
    style: {
    // Border color
      color: '#fff', 
      weight: 1,
      fillOpacity: 0.8
    },
    
    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br>Obesity Rate: "+feature.properties.Obesity);
    }
  }).addTo(myMap);

 // Set up the legend.
 let legend = L.control({ position: "bottomright" });
 legend.onAdd = function() {
   let div = L.DomUtil.create("div", "info legend");
   let limits = geojson.options.limits;
   let colors = geojson.options.colors;
   let labels = [];

   // Add the minimum and maximum.
   let legendInfo = "<h1>Obesity Rate Percentage</h1>" +
     "<div class=\"labels\">" +
       "<div class=\"min\">" + limits[0] + "</div>" +
       "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
     "</div>";

   div.innerHTML = legendInfo;

   limits.forEach(function(limit, index) {
     labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
   });

   div.innerHTML += "<ul>" + labels.join("") + "</ul>";
   return div;
 };

 // Adding the legend to the map
 legend.addTo(myMap);

});