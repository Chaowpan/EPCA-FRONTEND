"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
      <span className="text-gray-600">กำลังโหลดแผนที่...</span>
    </div>
  ),
});

export default function BangKhenMap() {
  return (
    <div className="mt-4">
      <LeafletMap />
    </div>
  );
}
