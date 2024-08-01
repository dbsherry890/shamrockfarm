import Image from 'next/image';

export function Prairie() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '1rem',
        justifyContent: 'space-around',
      }}
    >
      <Image
        src="/images/prairie/prairie-1.png"
        alt="Lovely prairie image"
        width={340}
        height={280}
        priority
      />
      <Image
        src="/images/prairie/prairie-2.png"
        alt="Lovely prairie image"
        width={340}
        height={280}
      />
      <Image
        src="/images/prairie/prairie-3.png"
        alt="Lovely prairie image"
        width={340}
        height={280}
      />
      <Image
        src="/images/prairie/prairie-4.png"
        alt="Lovely prairie image"
        width={340}
        height={280}
      />
      <Image
        src="/images/prairie/prairie-5.png"
        alt="Lovely prairie image"
        width={340}
        height={280}
      />
    </div>
  );
}
