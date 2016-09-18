var http = require('http');
var url = "http://eonet.sci.gsfc.nasa.gov/api/v2.1/events";

var response = http.request({'url':url});
var result = JSON.parse(response.body);

var object = {}

var list = []

for(var event in result.events)
{
  if(result.events[event].geometries[0].type == "Point")
  {
    list.push({
    category: result.events[event].categories[0].title,
    title: result.events[event].title,
    type: result.events[event].geometries[0].type,
    long: result.events[event].geometries[0].coordinates[0],
    lat: result.events[event].geometries[0].coordinates[1],
  	});
  }
  else
  {
    list.push({
    category: result.events[event].categories[0].title,
    title: result.events[event].title,
    type: result.events[event].geometries[0].type,
    coordinate: result.events[event].geometries[0].coordinates[0],
  	});
  }
  
  
}
return list