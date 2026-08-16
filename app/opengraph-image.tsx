import { ImageResponse } from 'next/og';
import { personalProfile } from '@/data/profile';

export const alt = `${personalProfile.name} | ${personalProfile.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#04070D',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: 'rgba(79, 140, 255, 0.15)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: 'rgba(159, 92, 255, 0.15)',
            filter: 'blur(100px)',
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            borderRadius: '9999px',
            backgroundColor: '#080E1A',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#4F8CFF',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '2px',
          }}
        >
          <span>ENGINEERING PORTFOLIO // 2026</span>
        </div>

        {/* Main Center Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#F8FAFC',
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            {personalProfile.name}
          </div>

          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#4F8CFF',
              letterSpacing: '-0.5px',
            }}
          >
            Full Stack Software Developer & AI Systems Engineer
          </div>

          <div
            style={{
              fontSize: '22px',
              color: '#94A3B8',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            {personalProfile.headline}
          </div>
        </div>

        {/* Bottom Footer Info */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            color: '#64748B',
            fontSize: '18px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Next.js 16</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>AI / RAG</span>
          </div>

          <span style={{ color: '#38BDF8', fontWeight: 600 }}>
            {personalProfile.portfolio}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
