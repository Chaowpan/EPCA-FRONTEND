"use client";

interface Station {
  id: string;
  name: string;
  pm25: number;
  updatedAt: string;
}

interface Props {
  stations: Station[];
}

export default function StationList({ stations }: Props) {
  const getColor = (pm: number) => {
    if (pm <= 25) return "text-green-500";
    if (pm <= 37) return "text-yellow-500";
    if (pm <= 50) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="mt-4 space-y-2">
      {stations.map((s) => (
        <div
          key={s.id}
          className="p-4 border rounded-xl flex justify-between items-center bg-white shadow"
        >
          <div>
            <p className="font-semibold text-amber-950">{s.name}</p>
            <p className="text-gray-500 text-sm">{s.updatedAt}</p>
          </div>
          <div className={`font-bold text-xl ${getColor(s.pm25)}`}>
            {s.pm25} µg/m³
          </div>
        </div>
      ))}
    </div>
  );
}
