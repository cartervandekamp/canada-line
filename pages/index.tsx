import dynamic from 'next/dynamic';
import Image from 'next/image';

const DynamicMap = dynamic(
  () => import('../components/Map'),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/translink.png" alt="Translink Logo" width={100} height={50} style={{ marginRight: '10px' }} />
        <h1>Canada Line Map</h1>
      </header>
      <DynamicMap />
    </main>
  );
}
