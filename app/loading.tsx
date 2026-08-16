import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#04070D] text-[#F8FAFC]">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-[#4F8CFF] animate-spin" />
        <div className="absolute w-6 h-6 rounded-full bg-[#4F8CFF]/20 blur-sm" />
      </div>
      <span className="mt-4 text-xs font-mono tracking-widest text-[#64748B] uppercase">
        Initializing System...
      </span>
    </div>
  );
}
