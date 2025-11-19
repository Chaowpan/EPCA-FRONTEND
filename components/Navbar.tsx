'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative h-24 overflow-visible shadow-md">

      {/* Background gradient ซ้าย → ขวา */}
      <div className="absolute inset-0 bg-linear-to-r from-sky-100 to-sky-500 z-0"></div>

      {/* ☁️ ก้อนเมฆ (7 ก้อน ลอยไม่พร้อมกัน, ขนาด/ตำแหน่งต่างกันหมด) */}
      <div className="absolute -top-2.5 left-[-600px] ...">
        <Image src="/img/cloud.png" alt="cloud" width={150} height={70} />
      </div>

      <div className="absolute top-5 left-[-420px] animate-cloud2 z-20">
        <Image src="/img/cloud.png" alt="cloud" width={110} height={60} />
      </div>

      <div className="absolute top-9 left-[-510px] animate-cloud3 z-20">
        <Image src="/img/cloud.png" alt="cloud" width={130} height={65} />
      </div>

      <div className="absolute -top-2.5 left-[-600px] animate-cloud4 z-30">
        <Image src="/img/cloud.png" alt="cloud" width={180} height={90} />
      </div>

      <div className="absolute top-3 left-[-360px] animate-cloud5 z-30">
        <Image src="/img/cloud.png" alt="cloud" width={140} height={75} />
      </div>

      <div className="absolute top-10 left-[-460px] animate-cloud6 z-20">
        <Image src="/img/cloud.png" alt="cloud" width={100} height={55} />
      </div>

      <div className="absolute top-7 left-[-530px] animate-cloud7 z-20">
        <Image src="/img/cloud.png" alt="cloud" width={160} height={80} />
      </div>



      {/* เส้นสายลม */}
      <div className="absolute top-12 left-[-400px] animate-wind z-25">
        <div className="w-32 h-0.5 bg-white/60 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-6 left-[-500px] animate-wind-slow z-25">
        <div className="w-24 h-0.375 bg-white/40 rounded-full blur-sm"></div>
      </div>

      {/* เนื้อหา Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24 relative z-30">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/img/Gemini_Generated_Image_l1pc1al1pc1al1pc-removebg-preview.png"
              alt="EPCA Air Thai Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-40 text-lg font-semibold tracking-wide">
          {[
            { name: 'หน้าหลัก', href: '/' },
            { name: 'รายการ', href: '/list' },
            { name: 'ข้อมูลย้อนหลัง', href: '/historical_data' },
            { name: 'โปรไฟล์', href: '/profile' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative
                text-white/90
                drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]
                transition-all
                duration-300
                ease-in-out
                hover:text-blue-700
                hover:scale-110
                hover:-translate-y-1
                hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.6)]
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none p-2 rounded hover:bg-blue-700 transition">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes cloudMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(130vw); }
        }

        /* ความเร็ว + delay ไม่เท่ากัน */
        .animate-cloud1 { animation: cloudMove 120s linear infinite; animation-delay: 0s; }
        .animate-cloud2 { animation: cloudMove 120s linear infinite; animation-delay: 10s; }
        .animate-cloud3 { animation: cloudMove 120s linear infinite; animation-delay: 20s; }
        .animate-cloud4 { animation: cloudMove 120s linear infinite; animation-delay: 30s; }
        .animate-cloud5 { animation: cloudMove 120s linear infinite; animation-delay: 40s; }
        .animate-cloud6 { animation: cloudMove 120s linear infinite; animation-delay: 50s; }
        .animate-cloud7 { animation: cloudMove 120s linear infinite; animation-delay: 60s; }

        @keyframes windMove {
          0% { transform: translateX(0); opacity: 0.2; }
          50% { opacity: 0.6; }
          100% { transform: translateX(130vw); opacity: 0.2; }
        }
        .animate-wind { animation: windMove 60s linear infinite; }
        .animate-wind-slow { animation: windMove 90s linear infinite; }
      `}</style>

    </nav>
  );
};

export default Navbar;
