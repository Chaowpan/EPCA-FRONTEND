"use client";
import { MapContainer, TileLayer, CircleMarker, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface Station {
  id: string;
  name: string;
  lat: number;
  lon: number;
  pm25: number;
}

interface Props {
  stations: Station[];
}

// 🔵 สร้างไอคอนสำหรับตำแหน่งของฉัน
const myLocationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // ไอคอนหมุดสีน้ำเงิน
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

export default function BangKhenMap({ stations }: Props) {
  return (
    <MapContainer
      center={[13.8855, 100.5849]} // จุดกลางบางเขน
      zoom={14}
      style={{ width: "100%", height: "400px", borderRadius: "8px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* วนลูปแสดงจุดสถานี */}
      {stations.map((s) => (
        <CircleMarker
          key={s.id}
          center={[s.lat, s.lon]}
          radius={12}
          fillOpacity={0.8}
          color={
            s.pm25 <= 25
              ? "green"
              : s.pm25 <= 37
              ? "yellow"
              : s.pm25 <= 50
              ? "orange"
              : "red"
          }
        >
          <Popup>
            <b>{s.name}</b>
            <br />
            PM2.5: {s.pm25} µg/m³
          </Popup>
        </CircleMarker>
      ))}

      {/* 🔵 จุดตำแหน่งของฉัน: มหาวิทยาลัยศรีปทุม */}
      <Marker
        position={[13.8806, 100.5847]} // พิกัด มหาวิทยาลัยศรีปทุม
        icon={myLocationIcon}
      >
        <Popup>
          📍 <b>ตำแหน่งของฉัน</b>
          <br />
          มหาวิทยาลัยศรีปทุม (SPU)
        </Popup>
      </Marker>
    </MapContainer>
  );
}
