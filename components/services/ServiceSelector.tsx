'use client';

import React from 'react';
import { Service } from '@/types';
import { Layers, Server, Bot, Workflow, Cpu } from 'lucide-react';

interface ServiceSelectorProps {
  services: Service[];
  activeServiceId: string;
  onSelectService: (service: Service) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  '01': <Layers className="w-4 h-4" />,
  '02': <Server className="w-4 h-4" />,
  '03': <Bot className="w-4 h-4" />,
  '04': <Workflow className="w-4 h-4" />,
  '05': <Cpu className="w-4 h-4" />,
};

export function ServiceSelector({
  services,
  activeServiceId,
  onSelectService,
}: ServiceSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label="Engineering Service Domains"
      className="flex md:flex-col gap-2 p-1.5 rounded-2xl bg-[#080E1A]/90 border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-none select-none max-w-full"
    >
      {services.map((serv) => {
        const isActive = serv.id === activeServiceId;
        const icon = serviceIcons[serv.number] || <Layers className="w-4 h-4" />;

        return (
          <button
            key={serv.id}
            id={`tab-${serv.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`panel-${serv.id}`}
            onClick={() => onSelectService(serv)}
            className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 cursor-pointer shrink-0 text-left focus-visible:outline-2 focus-visible:outline-blue-500 relative overflow-hidden group ${
              isActive
                ? 'bg-[#121E36] border-2 scale-[1.01] shadow-xl'
                : 'bg-[#04070D]/60 border border-white/[0.04] hover:border-white/15 hover:bg-[#080E1A]'
            }`}
            style={{
              borderColor: isActive ? serv.accent : undefined,
              boxShadow: isActive ? `0 0 20px ${serv.accent}20` : undefined,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="shrink-0 p-2 rounded-lg bg-[#080E1A] border border-white/10 transition-colors"
                style={{ color: serv.accent }}
              >
                {icon}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: serv.accent }}
                  >
                    PHASE {serv.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase">
                    {serv.category}
                  </span>
                </div>
                <h3
                  className={`text-xs sm:text-sm font-bold tracking-tight transition-colors truncate max-w-[190px] sm:max-w-none ${
                    isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'
                  }`}
                >
                  {serv.shortTitle}
                </h3>
              </div>
            </div>

            {/* Active Indicator Dot */}
            <div
              className={`w-2 h-2 rounded-full transition-opacity shrink-0 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundColor: serv.accent }}
            />
          </button>
        );
      })}
    </div>
  );
}
