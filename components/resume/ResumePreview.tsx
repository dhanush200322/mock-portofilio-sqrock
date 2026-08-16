'use client';

import React from 'react';
import { personalProfile } from '@/data/profile';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { MapPin, Mail } from 'lucide-react';

export function ResumePreview() {
  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between text-left select-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10">
        {/* Document Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] tracking-tight">
              {personalProfile.name}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-[#4F8CFF] mt-0.5">
              Full Stack Software Developer & AI Systems Engineer
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B] mt-2 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#38BDF8]" />
                {personalProfile.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#4F8CFF]" />
                {personalProfile.email}
              </span>
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-lg bg-[#0D1627] border border-white/10 text-[10px] font-mono text-emerald-400">
            VERIFIED RESUME
          </div>
        </div>

        {/* 1. Core Competency Summary */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block mb-2 font-semibold">
            01 // Engineering Summary
          </span>
          <p className="text-xs text-[#CBD5E1] leading-relaxed">
            {personalProfile.shortBio}
          </p>
        </div>

        {/* 2. Key Production Experience Highlights */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F8CFF] block mb-3 font-semibold">
            02 // Production Experience Highlights
          </span>
          <div className="space-y-3">
            {experienceData.slice(0, 2).map((exp) => (
              <div
                key={exp.id}
                className="p-3.5 rounded-xl bg-[#080E1A]/80 border border-white/[0.04]"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[#F8FAFC]">{exp.role}</span>
                  <span className="text-[10px] font-mono text-[#64748B]">{exp.duration}</span>
                </div>
                <span className="text-[11px] text-[#4F8CFF] font-mono block mb-2">
                  {exp.company}
                </span>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed line-clamp-2">
                  {exp.achievements[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Academic Foundations */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#9F5CFF] block mb-2.5 font-semibold">
            03 // Academic Foundations
          </span>
          <div className="p-3.5 rounded-xl bg-[#080E1A]/80 border border-white/[0.04] flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-[#F8FAFC] block">
                {educationData[0].degree}
              </span>
              <span className="text-[11px] text-[#94A3B8]">
                {educationData[0].field} • {educationData[0].institution}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 shrink-0">
              Distinction
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
