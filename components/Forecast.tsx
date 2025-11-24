interface ForecastDay {
  date: string;
  pm25: number;
  pressure: number;
  temperature: number;
  humidity: number;
}

interface ForecastProps {
  data: ForecastDay[];
}

const Forecast = ({ data }: ForecastProps) => {
  return (
    <div className="mt-6 space-y-4">
      {data.map((day, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition-shadow"
        >
          {/* วัน */}
          <div className="text-lg font-semibold text-blue-800 mb-2 sm:mb-0 sm:w-1/5">
            {day.date}
          </div>

          {/* PM2.5 */}
          <div className="sm:w-1/5 text-center">
            <div className="text-sm text-gray-500">PM2.5</div>
            <div className="text-xl font-bold text-red-600">{day.pm25} µg/m³</div>
          </div>

          {/* ความกดอากาศ */}
          <div className="sm:w-1/5 text-center">
            <div className="text-sm text-gray-500">ความกดอากาศ</div>
            <div className="text-xl font-bold text-blue-500">{day.pressure} hPa</div>
          </div>

          {/* อุณหภูมิ */}
          <div className="sm:w-1/5 text-center">
            <div className="text-sm text-gray-500">อุณหภูมิ</div>
            <div className="text-xl font-bold text-orange-500">{day.temperature} °C</div>
          </div>

          {/* ความชื้น */}
          <div className="sm:w-1/5 text-center">
            <div className="text-sm text-gray-500">ความชื้น</div>
            <div className="text-xl font-bold text-teal-500">{day.humidity} %</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
