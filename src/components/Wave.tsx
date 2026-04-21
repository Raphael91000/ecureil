interface WaveProps {
  from: 'dark' | 'light';
  flip?: boolean;
}

const colors = {
  dark: '#051f20',
  light: '#9eb69b',
};

export default function Wave({ from, flip = false }: WaveProps) {
  const to: 'dark' | 'light' = from === 'dark' ? 'light' : 'dark';
  return (
    <div style={{ backgroundColor: colors[from], lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: 80,
          transform: flip ? 'scaleX(-1)' : undefined,
        }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={colors[to]}
        />
      </svg>
    </div>
  );
}
