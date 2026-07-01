import { ImageResponse } from 'next/og';

// Generated OG/share image — replaces the missing /logo/og-image.png binary.
// Next serves this at /opengraph-image and wires the meta tags automatically.
// (Default Node runtime — the site deploys to Railway, not an edge platform.)
export const alt = 'Vintify — Vinted Accounting Software & Growth Bot for Resellers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #0a0f1c 0%, #0d1424 55%, #101a30 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Faint grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(96,148,250,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,148,250,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            right: -160,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0) 70%)',
          }}
        />
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: '#f3f5fb' }}>Vintify</div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#f3f5fb', lineHeight: 1.05, letterSpacing: -2 }}>
            The all-in-one platform for
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#6094fa', lineHeight: 1.05, letterSpacing: -2 }}>
            serious Vinted sellers.
          </div>
        </div>

        {/* Footer strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 26, color: '#98a1ba' }}>
          <div style={{ display: 'flex' }}>Profit tracking</div>
          <div style={{ display: 'flex', color: '#3b82f6' }}>·</div>
          <div style={{ display: 'flex' }}>HMRC-ready reports</div>
          <div style={{ display: 'flex', color: '#3b82f6' }}>·</div>
          <div style={{ display: 'flex' }}>Growth bot</div>
          <div style={{ display: 'flex', color: '#3b82f6' }}>·</div>
          <div style={{ display: 'flex' }}>AI listings</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
