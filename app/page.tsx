import { Barn } from '@/components/Barn/Barn';
import { Welcome } from '../components/Welcome/Welcome';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';

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
      Barn
      <Barn />
      Koi Pond area
      <Koi />
      Prairie
      <Prairie />
      Savannah
      <Savannah />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
