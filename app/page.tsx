"use client";
import dynamic from "next/dynamic";
import StationList from "../components/StationList";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

// โหลด component แผนที่แบบ dynamic
const BangKhenMap = dynamic(() => import("../components/BangKhenMap"), {
  ssr: false,
});

interface Station {
  id: string;
  name: string;
  lat: number;
  lon: number;
  pm25: number;
  updatedAt: string;
}

export default function HomePage() {
  const [stations, setStations] = useState<Station[]>([]);

  // ตัวอย่างข้อมูลสถานี (จะเปลี่ยนเป็น API จริงได้)
  useEffect(() => {
  // จำลองการดึงข้อมูลจาก API
  const fetchData = async () => {
    const data = [
      {
        id: "1",
        name: "สวนกีฬารามอินทรา เขตบางเขน",
        lat: 13.8529,
        lon: 100.5713,
        pm25: 17.1,
        updatedAt: "27 ต.ค. 2568 21:00 น.",
      },
      {
        id: "2",
        name: "วัดพระศรีมหาธาตุฯ",
        lat: 13.8852,
        lon: 100.5914,
        pm25: 28.3,
        updatedAt: "27 ต.ค. 2568 21:00 น.",
      },
    ];

    // หน่วงเวลาให้เหมือนโหลดข้อมูลจริง
    await new Promise((resolve) => setTimeout(resolve, 500));

    setStations(data);
  };

  fetchData();
}, []);


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-amber-950 text-center">
        PM2.5 เขตบางเขน
      </h1>

      <BangKhenMap stations={stations} />
      <StationList stations={stations} />
    </div>
  );
}
