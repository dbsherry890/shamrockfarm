import Image from 'next/image';

export function Savannah() {
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
        src="/images/savannah/savannah-2.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
      <Image
        src="/images/savannah/savannah-3.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
      <Image
        src="/images/savannah/savannah-4.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
      <Image
        src="/images/savannah/savannah-5.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
      <Image
        src="/images/savannah/savannah-6.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
      <Image
        src="/images/savannah/savannah-7.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
      <Image
        src="/images/savannah/savannah-8.png"
        alt="Lovely savannah image"
        width={340}
        height={280}
      />
    </div>
  );
}
