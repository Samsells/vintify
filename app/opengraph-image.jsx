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
          background: 'linear-gradient(135deg, #f9f9ff 0%, #eff6ff 55%, #dbe8fe 100%)',
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
              'linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
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
          <div style={{ fontSize: 40, fontWeight: 800, color: '#191b23' }}>Vintify</div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#191b23', lineHeight: 1.05, letterSpacing: -2 }}>
            The all-in-one platform for
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#2563eb', lineHeight: 1.05, letterSpacing: -2 }}>
            serious Vinted sellers.
          </div>
        </div>

        {/* Footer strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 26, color: '#424754' }}>
          <div style={{ display: 'flex' }}>Profit tracking</div>
          <div style={{ display: 'flex', color: '#93bbfd' }}>·</div>
          <div style={{ display: 'flex' }}>HMRC-ready reports</div>
          <div style={{ display: 'flex', color: '#93bbfd' }}>·</div>
          <div style={{ display: 'flex' }}>Growth bot</div>
          <div style={{ display: 'flex', color: '#93bbfd' }}>·</div>
          <div style={{ display: 'flex' }}>AI listings</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
