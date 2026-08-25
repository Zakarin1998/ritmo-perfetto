const BEAT_WIDTH = 292;
const BEAT =
  'h80 l14 -10 l14 20 l14 -10 h18 l12 16 l10 -56 l12 78 l10 -38 h20 c14 0 20 -16 34 -16 c14 0 20 16 34 16 h20';

/** Traccia ECG decorativa: una linea di base e un impulso che la percorre. */
export function Heartbeat({ beats = 4, className = '' }: { beats?: number; className?: string }) {
  const path = `M0 70 ${Array.from({ length: beats }, () => BEAT).join(' ')}`;
  const width = BEAT_WIDTH * beats;

  return (
    <svg
      className={`ecg ${className}`}
      viewBox={`0 0 ${width} 140`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="ecg-track" d={path} />
      <path className="ecg-pulse" d={path} pathLength={100} />
    </svg>
  );
}
