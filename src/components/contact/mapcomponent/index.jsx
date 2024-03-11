"use client"
import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// function MapComponent() {
//   useEffect(() => {
//     const map = L.map('map-container',{ zoomControl: false,scrollWheelZoom: false }).setView([36.7783, -119.4179],10);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     }).addTo(map);
//         // Disable map dragging
//         map.dragging.disable();

//         // Disable touch zoom
//         map.touchZoom.disable();
    
    
//       L.control.zoom({ position: 'bottomright' }).addTo(map);
//     const customIcon = L.icon({
//         iconUrl: '/images/contact/location pin.png', 
//         iconSize: [32, 32], 
//         iconAnchor: [16, 32], 
//       });
//       L.marker([36.7783, -119.4179], { icon: customIcon }).addTo(map)
//         .bindPopup('California, USA');
  
//         L.marker([17.441738, 78.361590], { icon: customIcon }).addTo(map)
//         .bindPopup('Hyderabad, India');
  
//         L.marker([1.3521,103.8198], { icon: customIcon }).addTo(map)
//         .bindPopup('Singapore');
  
//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div id="map-container" style={{ width: '100%', height: '100%',zIndex:1 }}></div>;
// }
let Map2 = () => <h1>map</h1>
export default Map2;
