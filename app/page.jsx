import { Barn } from '@/components/Barn/Barn';
import { Welcome } from '../components/Welcome/Welcome';
import '@mantine/carousel/styles.css';

// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Hero } from '@/components/Hero/Hero';
import { Koi } from '@/components/Koi/Koi';
import { Prairie } from '@/components/Prairie/Prairie';
import { Savannah } from '@/components/Savannah/Savannah';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Hero />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Barn</h2>
      </div>
      <Barn />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Koi Pond</h2>
      </div>
      <Koi />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Prairie</h2>
      </div>
      <Prairie />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Savannah</h2>
      </div>
      <Savannah />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
