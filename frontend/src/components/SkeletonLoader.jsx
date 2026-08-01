import React from 'react';

export default function SkeletonLoader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1rem', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div className="skeleton" style={{ width: 36, height: 36, borderRadius: 10 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="skeleton" style={{ width: '40%', height: 16 }} />
          <div className="skeleton" style={{ width: '90%', height: 14 }} />
          <div className="skeleton" style={{ width: '75%', height: 14 }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div className="skeleton" style={{ width: 36, height: 36, borderRadius: 10 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="skeleton" style={{ width: '30%', height: 16 }} />
          <div className="skeleton" style={{ width: '85%', height: 14 }} />
        </div>
      </div>
    </div>
  );
}
