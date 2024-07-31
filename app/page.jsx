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
      <Title my="lg" align="center">
        Barn
      </Title>
      <Barn />
      <Title my="lg" align="center">
        Koi Pond
      </Title>
      <Koi />
      <Title my="lg" align="center">
        Prairie
      </Title>
      <Prairie />
      <Title my="lg" align="center">
        Savannah
      </Title>
      <Savannah />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
