'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalProfile } from '@/data/profile';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { Terminal, MapPin, Cpu, ShieldCheck, Zap, Activity, Code2, Sparkles } from 'lucide-react';

export function IdentityCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  // Framer motion values for 3D physics tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20, mass: 0.2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // If user prefers reduced motion or is using touch, bypass 3D tilt
    if (isReducedMotion || e.pointerType === 'touch' || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    setSheenPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setSheenPos({ x: 50, y: 50 });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto [perspective:1000px]">
      {/* Background ambient aura behind the card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4F8CFF]/20 via-[#9F5CFF]/20 to-[#38BDF8]/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: isReducedMotion ? 0 : rotateX,
          rotateY: isReducedMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-2xl bg-[#080E1A]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden transition-colors hover:border-[#4F8CFF]/40 group select-none"
      >
        {/* Dynamic cursor light sheen */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${sheenPos.x}% ${sheenPos.y}%, rgba(79, 140, 255, 0.18), rgba(159, 92, 255, 0.08) 45%, transparent 70%)`,
          }}
        />

        {/* Subtle high-tech grid texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* 1. Header Bar / System Telemetry Status */}
        <div className="relative z-10 flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0D1627] border border-white/10 flex items-center justify-center text-[#4F8CFF] shadow-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase block">
                Identity Profile // Node 01
              </span>
              <span className="text-xs font-mono font-semibold text-[#F8FAFC]">
                SYS.ARCH: FULL_STACK
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span>ACTIVE</span>
          </div>
        </div>

        {/* 2. Developer Primary Identity */}
        <div className="relative z-10 mb-6">
          <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight flex items-center gap-2">
            <span>{personalProfile.name}</span>
            <Sparkles className="w-4 h-4 text-[#4F8CFF]" />
          </h4>
          <p className="text-xs sm:text-sm font-medium text-[#4F8CFF] mt-1">
            Full Stack Software Developer & AI Systems Engineer
          </p>
        </div>

        {/* 3. Core Identity Specs Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#0D1627]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-[#9F5CFF]" />
              Core Focus
            </span>
            <span className="text-xs font-semibold text-[#F8FAFC] leading-snug">
              AI • Automation • Scalable Systems
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0D1627]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#38BDF8]" />
              Location
            </span>
            <span className="text-xs font-semibold text-[#F8FAFC]">
              {personalProfile.location}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0D1627]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-emerald-400" />
              Availability
            </span>
            <span className="text-xs font-semibold text-emerald-400">
              Open for opportunities
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0D1627]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#4F8CFF]" />
              Experience
            </span>
            <span className="text-xs font-semibold text-[#F8FAFC]">
              4+ Years Production Dev
            </span>
          </div>
        </div>

        {/* 4. Live Systems Telemetry Bar */}
        <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
          <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
            <Code2 className="w-3.5 h-3.5 text-[#4F8CFF]" />
            <span>Next.js • TypeScript • AI/RAG</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <Zap className="w-3 h-3" />
            <span>99+ Vitals</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
