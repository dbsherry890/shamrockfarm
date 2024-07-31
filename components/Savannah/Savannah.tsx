import { Image } from '@mantine/core';

export function Savannah() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '2rem' }}>
      {/* // By default image will have object-fit: cover */}
      <div style={{ width: 340, margin: 'auto', minWidth: 0 }}>
        <Image radius="md" src="/images/savannah/savannah-1.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-2.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-3.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-4.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-5.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-6.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-7.png" alt="Lovely savannah image" />
      </div>
      <div style={{ width: 340, margin: 'auto', height: 280, padding: 1 }}>
        <Image radius="md" src="/images/savannah/savannah-8.png" alt="Lovely savannah image" />
      </div>
    </div>
  );
}
