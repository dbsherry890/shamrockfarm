import { Barn } from '@/components/Barn/Barn';
import { Welcome } from '../components/Welcome/Welcome';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { Title, Text } from '@mantine/core';

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
      <div style={{ width: '80%' }}>
        <h2 style={{ margin: 'auto' }}>Barn</h2>
      </div>
      <Barn />
      <div>
        <h2 style={{ width: '50%', margin: 'auto', borderStyle: 'solid' }}>Koi Pond</h2>
      </div>
      <Koi />
      <div>
        <h2 style={{ width: 50, margin: 'auto' }}>Prairie</h2>
      </div>
      <Prairie />
      <div>
        <h2 style={{ width: 50, margin: 'auto' }}>Savannah</h2>
      </div>
      <Savannah />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
