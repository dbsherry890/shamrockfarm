import { Image } from '@mantine/core';

export function Barn() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '2rem' }}>
      {/* // By default image will have object-fit: cover */}
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/barn/barn-2.png" alt="Lovely barn image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/barn/barn-3.png" alt="Lovely barn image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/barn/barn-4.png" alt="Lovely barn image" />
      </div>
    </div>
  );
}
