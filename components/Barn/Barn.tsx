import Image from 'next/image';

export function Barn() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '1rem',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ padding: 2 }}>
        <Image
          src="/images/barn/barn-2.png"
          alt="Lovely barn image"
          width={340}
          height={280}
          priority
        />
      </div>
      <Image
        src="/images/barn/barn-3.png"
        alt="Lovely barn image"
        width={340}
        height={280}
        priority
      />
      <Image
        src="/images/barn/barn-4.png"
        alt="Lovely barn image"
        width={340}
        height={280}
        priority
      />
    </div>
  );
}
