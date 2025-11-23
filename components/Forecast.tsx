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
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">วัน</th>
            <th className="px-4 py-2 border">PM2.5</th>
            <th className="px-4 py-2 border">ความกดอากาศ</th>
            <th className="px-4 py-2 border">ความดัน</th>
            <th className="px-4 py-2 border">ความชื้น</th>
          </tr>
        </thead>
        <tbody>
          {data.map((day, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{day.date}</td>
              <td className="px-4 py-2 border">{day.pm25}</td>
              <td className="px-4 py-2 border">{day.pressure}</td>
              <td className="px-4 py-2 border">{day.temperature}</td>
              <td className="px-4 py-2 border">{day.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
