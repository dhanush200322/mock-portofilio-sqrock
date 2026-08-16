'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { contactData } from '@/data/contact';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/lib/useReducedMotion';
import {
  Terminal,
  MapPin,
  Clock,
  Mail,
  Sparkles,
  Send,
} from 'lucide-react';

export function ContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20, mass: 0.2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
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
    <div className="relative w-full max-w-lg mx-auto [perspective:1000px] select-none">
      {/* Background ambient aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#4F8CFF]/20 via-[#9F5CFF]/20 to-[#38BDF8]/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: isReducedMotion ? 0 : rotateX,
          rotateY: isReducedMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-3xl bg-[#080E1A]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#4F8CFF]/40 group flex flex-col justify-between"
      >
        {/* Dynamic cursor light sheen */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35 group-hover:opacity-75 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(circle 320px at ${sheenPos.x}% ${sheenPos.y}%, rgba(79, 140, 255, 0.18), rgba(159, 92, 255, 0.08) 45%, transparent 70%)`,
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0D1627] border border-white/10 flex items-center justify-center text-[#4F8CFF] shadow-xs">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase block">
                  Communication Portal // Verified
                </span>
                <span className="text-xs font-mono font-semibold text-[#F8FAFC]">
                  DIRECT_DISPATCH
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-6">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight flex items-center gap-2">
              <span>{contactData.name}</span>
              <Sparkles className="w-4 h-4 text-[#4F8CFF]" />
            </h4>
            <p className="text-xs sm:text-sm font-medium text-[#4F8CFF] mt-1">
              {contactData.role}
            </p>
          </div>

          {/* Telemetry Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[#0D1627]/80 border border-white/[0.06] flex flex-col">
              <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#38BDF8]" />
                Location
              </span>
              <span className="text-xs font-semibold text-[#F8FAFC]">
                {contactData.location}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#0D1627]/80 border border-white/[0.06] flex flex-col">
              <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-emerald-400" />
                Response Rate
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                {contactData.responseTime}
              </span>
            </div>
          </div>

          {/* Direct Email Action */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href={`mailto:${contactData.email}?subject=Engineering%20Opportunity%20/%20Project%20Inquiry`}
              className="w-full block"
            >
              <Button
                size="md"
                variant="primary"
                className="w-full justify-center shadow-lg shadow-[#4F8CFF]/20"
                rightIcon={<Send className="w-4 h-4" />}
              >
                Send Direct Email
              </Button>
            </a>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] px-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#4F8CFF]" />
                <span>{contactData.email}</span>
              </span>
              <span className="text-emerald-400 font-semibold">100% Encrypted</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
