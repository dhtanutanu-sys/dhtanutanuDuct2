'use client';

import React from 'react';

const Page = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/duct-app-body.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Ductwork Takeoff Tool"
      />
    </div>
  );
};

export default Page;
