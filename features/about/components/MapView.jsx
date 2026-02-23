// components/MapView.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { Icon } from 'leaflet'; // Import Icon class

// Create a custom marker icon (optional, but fixes default marker icon issue)
const customIcon = new Icon({
  iconUrl: "https://unpkg.com",
  shadowUrl: "https://unpkg.com",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapView = ({ position, zoom, popupText }) => {
  return (
    <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; [OpenStreetMap](https://www.openstreetmap.org) contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          {popupText}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;

