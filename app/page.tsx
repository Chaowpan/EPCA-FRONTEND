'use client';

import React, { useState } from 'react';
import BangKhenMap from '../components/BangKhenMap';
import WeatherBox from '../components/WeatherBox';
import Forecast from '../components/Forecast';
import Calendar from '../components/Calenda';
import { LucideSearch, Calendar as CalendarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [weatherData] = useState({
    pm25: 40,
    pressure: 1012,
    temperature: 30,
    humidity: 70,
  });

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showForecastFromSearch, setShowForecastFromSearch] = useState(false);

  const forecastData = [
    { date: '24/11/2025', pm25: 40, pressure: 1012, temperature: 30, humidity: 70 },
    { date: '25/11/2025', pm25: 42, pressure: 1010, temperature: 31, humidity: 65 },
    { date: '26/11/2025', pm25: 38, pressure: 1011, temperature: 29, humidity: 60 },
    { date: '27/11/2025', pm25: 35, pressure: 1013, temperature: 28, humidity: 55 },
    { date: '28/11/2025', pm25: 37, pressure: 1012, temperature: 30, humidity: 58 },
  ];

  // ฟังก์ชันเมื่อกด icon search
  const handleSearch = () => {
    if (!selectedDate) return alert('กรุณาเลือกหรือพิมพ์วันที่ก่อน');
    setShowForecastFromSearch(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10">

      {/* 🌤 HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <h1 className="text-4xl font-bold text-sky-700 drop-shadow-sm">
          ระบบพยากรณ์ค่า PM2.5 เขตบางเขน
        </h1>
        <p className="text-gray-600 text-lg">
          ตรวจสอบคุณภาพอากาศ — พยากรณ์ค่าฝุ่นล่วงหน้า 5 วัน พร้อมข้อมูลสภาพอากาศแบบเรียลไทม์
        </p>
      </motion.div>

      {/* 🗺 แผนที่ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <BangKhenMap />
      </motion.div>

      {/* 📦 WeatherBox */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <WeatherBox title="PM2.5" value={weatherData.pm25} unit="µg/m³" />
        <WeatherBox title="ความกดอากาศ" value={weatherData.pressure} unit="hPa" />
        <WeatherBox title="อุณหภูมิ" value={weatherData.temperature} unit="°C" />
        <WeatherBox title="ความชื้น" value={weatherData.humidity} unit="%" />
      </div>

      {/* 🔮 Forecast ด้านบน */}
      <div className="mt-6 w-full max-w-7xl mx-auto">
        <Forecast data={forecastData} />
      </div>

      {/* 🔍 Input + Calendar เล็ก */}
      <div className="mt-6 w-full max-w-md">
        <label className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
          วันที่เลือก
        </label>
        <div className="relative">
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            placeholder="เลือกวันที่หรือพิมพ์เอง"
            className="w-full p-3 rounded-xl border border-sky-300 focus:border-sky-500 pr-12 dark:bg-slate-700"
          />

          {/* ปุ่ม Calendar เล็ก */}
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="absolute right-10 top-0 h-full flex items-center justify-center px-3 bg-sky-700 rounded-r-xl hover:bg-sky-800"
          >
            <CalendarIcon size={18} className="text-white" />
          </button>

          {/* Icon Search */}
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-0 top-0 h-full flex items-center justify-center px-3 bg-green-600 rounded-r-xl hover:bg-green-700"
          >
            <LucideSearch size={18} className="text-white" />
          </button>
        </div>

        {/* ปฏิทิน */}
        {showCalendar && (
          <div className="mt-2">
            <Calendar
              onSelectDate={(date) => {
                setSelectedDate(date.toLocaleDateString());
                setShowCalendar(false);
              }}
            />
          </div>
        )}
      </div>

      {/* ✨ Forecast หลัง Search + Animation */}
      <AnimatePresence>
        {showForecastFromSearch && (
          <motion.div
            key="forecastSearch"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mt-6 w-full max-w-7xl mx-auto"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              📅 ผลการพยากรณ์สำหรับวันที่: <span className="text-sky-700">{selectedDate}</span>
            </h2>
            <Forecast data={forecastData} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default HomePage;
