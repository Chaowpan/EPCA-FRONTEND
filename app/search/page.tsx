'use client';

import React, { useState } from "react";
import Calendar from "@/components/Calenda";
import Forecast from "@/components/Forecast";
import { LucideSearch } from "lucide-react";

const SearchPage = () => {
  const [selectedDate, setSelectedDate] = useState<string>(""); // เปลี่ยนเป็น string เพื่อพิมพ์เองได้

  const forecastData = [
    { date: "24/11/2025", pm25: 40, pressure: 1012, temperature: 30, humidity: 70 },
    { date: "25/11/2025", pm25: 42, pressure: 1010, temperature: 31, humidity: 65 },
    { date: "26/11/2025", pm25: 38, pressure: 1011, temperature: 29, humidity: 60 },
    { date: "27/11/2025", pm25: 35, pressure: 1013, temperature: 28, humidity: 55 },
    { date: "28/11/2025", pm25: 37, pressure: 1012, temperature: 30, humidity: 58 },
  ];

  // ฟังก์ชันเมื่อกด icon search
  const handleSearch = () => {
    alert(`ค้นหาข้อมูลสำหรับวันที่: ${selectedDate}`);
    // สามารถแทนที่ alert ด้วย logic filter forecast หรือเรียก API ได้
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-sky-700">ค้นหาข้อมูลสภาพอากาศ</h1>

      {/* Calendar + Input side by side */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Calendar */}
        <div className="flex-1">
          <Calendar
            onSelectDate={(date) =>
              setSelectedDate(date.toLocaleDateString())
            }
          />
        </div>

        {/* Input ช่องแสดง/พิมพ์วันเลือก */}
        <div className="flex-1 flex flex-col justify-start">
          <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">วันที่เลือก</label>

          <div className="relative">
            <input
              type="text"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="เลือกวันที่หรือพิมพ์เอง"
              className="w-full p-3 rounded-xl border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 dark:bg-slate-700 dark:border-slate-500 dark:text-white transition pr-12"
            />

            {/* Icon อยู่ภายใน input และสามารถคลิกได้ */}
            <button
              type="button"
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full flex items-center justify-center px-3 bg-sky-700 rounded-r-xl hover:bg-sky-800 transition"
            >
              <LucideSearch size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Forecast 5 วัน */}
      <Forecast data={forecastData} />
    </div>
  );
};

export default SearchPage;
