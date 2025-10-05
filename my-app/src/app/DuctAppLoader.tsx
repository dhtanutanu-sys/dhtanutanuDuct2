'use client';

import dynamic from 'next/dynamic';

const DuctApp = dynamic(() => import('./DuctApp'), { ssr: false });

export default function DuctAppLoader() {
  return <DuctApp />;
}
