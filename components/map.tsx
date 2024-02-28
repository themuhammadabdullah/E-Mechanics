// // pages/map.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// function Map() {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     if (!map) return;

//     // Focus the map on Rawalpindi
//     map.flyTo([33.600556, 73.067919], 12); // Explicitly pass zoom level
//   }, [map]);

//   return (
//     <MapContainer
//       whenCreated={(mapInstance) => setMap(mapInstance)}
//       center={[33.600556, 73.067919]}
//       zoom={12}
//       style={{ width: "30vw", height: "20vh" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={[33.600556, 73.067919]}>
//         <Popup>Rawalpindi</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default Map;
