'use client';

import BangKhenMap from '../components/BangKhenMap';
import WeatherBox from '../components/WeatherBox';
import Forecast from '../components/Forecast';
import { useState } from 'react';

const HomePage = () => {
  const [weatherData] = useState({
    pm25: 40,
    pressure: 1012,
    temperature: 30,
    humidity: 70,
  });

  const [forecastData] = useState([
    { date: 'วันพรุ่งนี้', pm25: 40, pressure: 1012, temperature: 30, humidity: 70 },
    { date: 'วันถัดไป', pm25: 42, pressure: 1010, temperature: 31, humidity: 65 },
    { date: 'วันถัดถัดไป', pm25: 38, pressure: 1011, temperature: 29, humidity: 60 },
    { date: 'วันถัดไปอีก', pm25: 35, pressure: 1013, temperature: 28, humidity: 55 },
    { date: 'วันถัดถัดไปอีก', pm25: 37, pressure: 1012, temperature: 30, humidity: 58 },
  ]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* แผนที่ */}
      <BangKhenMap />

      {/* Grid WeatherBox */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <WeatherBox title="PM2.5" value={weatherData.pm25} unit="µg/m³" />
        <WeatherBox title="ความกดอากาศ" value={weatherData.pressure} unit="hPa" />
        <WeatherBox title="ความดัน" value={weatherData.temperature} unit="°C" />
        <WeatherBox title="ความชื้น" value={weatherData.humidity} unit="%" />
      </div>


      {/* Forecast 5 วัน */}
      <Forecast data={forecastData} />
    </div>
  );
};

export default HomePage;
