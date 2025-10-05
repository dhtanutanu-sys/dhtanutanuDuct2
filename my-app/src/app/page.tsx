import dynamic from 'next/dynamic';

const DuctApp = dynamic(() => import('./DuctApp'), { ssr: false });

export default function Page() {
  return <DuctApp />;
}
