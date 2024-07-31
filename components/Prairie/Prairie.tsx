import { Image } from '@mantine/core';

export function Prairie() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: 2 }}>
      {/* // By default image will have object-fit: cover */}
      <div style={{ width: 340, margin: 'auto', padding: 1 }}>
        <Image radius="md" src="/images/prairie/prairie-1.png" alt="Lovely prairie image" />
      </div>
      <div style={{ width: 340, margin: 'auto', padding: 1 }}>
        <Image radius="md" src="/images/prairie/prairie-2.png" alt="Lovely prairie image" />
      </div>
      <div style={{ width: 340, margin: 'auto', padding: 1 }}>
        <Image radius="md" src="/images/prairie/prairie-3.png" alt="Lovely prairie image" />
      </div>
      <div style={{ width: 340, margin: 'auto', padding: 1 }}>
        <Image radius="md" src="/images/prairie/prairie-4.png" alt="Lovely prairie image" />
      </div>
      <div style={{ width: 340, margin: 'auto', padding: 1 }}>
        <Image radius="md" src="/images/prairie/prairie-5.png" alt="Lovely prairie image" />
      </div>
    </div>
  );
}
