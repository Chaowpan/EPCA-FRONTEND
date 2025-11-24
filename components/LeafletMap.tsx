"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const stationIcon = new L.Icon({
  iconUrl: '/favicon.ico',
  iconSize: [25, 25],
});

interface Station {
  id: string;
  name: string;
  lat: number;
  lon: number;
  pm25: number;
}

const stations: Station[] = [];

export default function LeafletMap() {
  return (
    <MapContainer
      center={[13.8563, 100.5843]}
      zoom={13}
      style={{
        height: '300px',
        width: '100%',
        borderRadius: '1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.lat, station.lon]}
          icon={stationIcon}
        >
          <Popup>
            {station.name} <br /> PM2.5: {station.pm25}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
