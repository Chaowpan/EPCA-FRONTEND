'use client';

import React, { useState } from 'react';
import BangKhenMap from '../components/BangKhenMap';
import WeatherBox from '../components/WeatherBox';
import Forecast from '../components/Forecast';
import Calendar from '../components/Calenda';
import { LucideSearch, Calendar as CalendarIcon } from 'lucide-react';

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
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* แผนที่ */}
      <BangKhenMap />

      {/* Grid WeatherBox */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <WeatherBox title="PM2.5" value={weatherData.pm25} unit="µg/m³" />
        <WeatherBox title="ความกดอากาศ" value={weatherData.pressure} unit="hPa" />
        <WeatherBox title="อุณหภูมิ" value={weatherData.temperature} unit="°C" />
        <WeatherBox title="ความชื้น" value={weatherData.humidity} unit="%" />
      </div>

      {/* Forecast ด้านบน */}
      <div className="mt-6 w-full max-w-7xl mx-auto">
        <Forecast data={forecastData} />
      </div>

      {/* Input + Calendar เล็ก */}
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
            className="w-full p-3 rounded-xl border border-sky-300 focus:border-sky-500 focus:ring focus:ring-sky-200 dark:bg-slate-700 dark:border-slate-500 dark:text-white transition pr-12"
          />
          {/* ปุ่ม Calendar เล็ก */}
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="absolute right-10 top-0 h-full flex items-center justify-center px-3 bg-sky-700 rounded-r-xl hover:bg-sky-800 transition"
          >
            <CalendarIcon size={18} className="text-white" />
          </button>
          {/* Icon Search */}
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-0 top-0 h-full flex items-center justify-center px-3 bg-sky-700 rounded-r-xl hover:bg-sky-800 transition"
          >
            <LucideSearch size={18} className="text-white" />
          </button>
        </div>

        {/* ปฏิทินขยาย */}
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

      {/* Forecast หลัง Search */}
      {showForecastFromSearch && (
        <div className="mt-6 w-full max-w-7xl mx-auto">
          <Forecast data={forecastData} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
