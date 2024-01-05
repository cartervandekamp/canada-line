import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [40, 40] 
  });



  const multiPolyline: [number, number][][] = [
    [
        [49.2856, -123.1115],
        [49.28202, -123.11875],
        [49.2746, -123.1219],  
        [49.2665, -123.1156],
        [49.2628,-123.1145],
        [49.2492, -123.1159],
        [49.2332, -123.1166],
        [49.2263, -123.1161],
        [49.2097, -123.1170],
        [49.1955, -123.1261],
        [49.1840, -123.1364],
        [49.1748, -123.1364],
        [49.1681, -123.1363]
        
    ],
    [
        [49.2856, -123.1115],
        [49.28202, -123.11875],
        [49.2746, -123.1219],
        [49.2665, -123.1156],
        [49.2628,-123.1145],
        [49.2492, -123.1159],
        [49.2332, -123.1166],
        [49.2263, -123.1161],
        [49.2097, -123.1170],
        [49.1955, -123.1261],
        [49.1967, -123.1463],
        [49.1930, -123.1579],
       [ 49.1942, -123.1783]
        
    ]
  ]

  const redOptions = { color: 'red' }
  const orangeOptions = { color: 'orange' }
  const fillBlueOptions = { fillColor: 'blue' }
  const center: [number, number] = [49.25299, -123.00100]

const Map = () => {
return (
<MapContainer
style = {{height: "90vh"}}
center = {[49.2628,-123.1145]} zoom={12} scrollWheelZoom={true}
>
<TileLayer
attribution='&copy; <a href="https://github.com/cartervandekamp/canada-line">By Carter Vandekamp</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[49.2856, -123.1115]} icon={icon}>
<Popup>
    Waterfront Station
</Popup>
</Marker>
<Marker position={[49.28202, -123.11875]} icon={icon}>
<Popup>
    Vancouver City Center
</Popup>
</Marker>
<Marker position={[49.2746, -123.1219]} icon={icon}>
<Popup>
    Yaletown - Roundhouse
</Popup>
</Marker>
<Marker position={[49.2665, -123.1156]} icon={icon}>
<Popup>
    Olympic Village
</Popup>
</Marker>
<Marker position={[49.2628,-123.1145]} icon={icon}>
<Popup>
    Broadway City Hall
</Popup>
</Marker>
<Marker position={[49.2492, -123.1159]} icon={icon}>
<Popup>
    King Edward Station
</Popup>
</Marker>
<Marker position={[49.2332, -123.1166]} icon={icon}>
<Popup>
    Oakridge - 41st Station
</Popup>
</Marker>
<Marker position={[49.2263, -123.1161]} icon={icon}>
<Popup>
    Langara - 49th Station
</Popup>
</Marker>
<Marker position={[49.2097, -123.1170]} icon={icon}>
<Popup>
    Marine Drive
</Popup>
</Marker>
<Marker position={[49.1955, -123.1261]} icon={icon}>
<Popup>
   Bridgeport Station
</Popup>
</Marker>
<Marker position={[49.1840, -123.1364]} icon={icon}>
<Popup>
   Aberdeen Station
</Popup>
</Marker>
<Marker position={[49.1748, -123.1364]} icon={icon}>
<Popup>
   Landsdowne Station
</Popup>
</Marker>
<Marker position={[49.1681, -123.1363]} icon={icon}>
<Popup>
   Richmond - Brighouse
</Popup>
</Marker>
<Marker position={[49.1967, -123.1463]} icon={icon}>
<Popup>
   Templeton Station
</Popup>
</Marker>
<Marker position={[49.1930, -123.1579]} icon={icon}>
<Popup>
 Sea Island Station
</Popup>
</Marker>
<Marker position={[ 49.1942, -123.1783]} icon={icon}>
<Popup>
YVR Airport
</Popup>
</Marker>

<Polyline pathOptions={redOptions} positions={multiPolyline}/>


</MapContainer>
)
}

export default Map;