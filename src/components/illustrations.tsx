import { useId } from 'react';
import type { ReactElement } from 'react';

/**
 * Illustrazioni schematiche disegnate a mano in SVG: niente testo dentro
 * l'immagine (la spiegazione sta nella didascalia), cosi' restano leggibili
 * sia grandi che piccole e seguono i colori del tema.
 */

type Props = { className?: string };

const VIEW_BOX = '0 0 320 160';

/** Sagoma del cuore, riusata sia per la CAD sia per l'infarto. */
const HEART_PATH =
  'M50 92 C20 71, 4 49, 4 33 C4 17, 18 7, 32 7 C42 7, 48 13, 50 19 C52 13, 58 7, 68 7 C82 7, 96 17, 96 33 C96 49, 80 71, 50 92 Z';

const useCleanId = (prefix: string) => `${prefix}-${useId().replace(/:/g, '')}`;

/** Vaso sanguigno visto in sezione, con la placca che lo restringe. */
function Vessel({
  plaque,
  blocked = false,
  className = '',
}: Props & { plaque: number; blocked?: boolean }) {
  const clipId = useCleanId('lumen');
  const bulge = 22 * plaque;

  return (
    <svg className={`ill ${className}`} viewBox={VIEW_BOX} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect x="16" y="54" width="288" height="52" rx="26" />
        </clipPath>
      </defs>

      <rect className="ill-wall" x="8" y="46" width="304" height="68" rx="34" />
      <rect className="ill-blood" x="16" y="54" width="288" height="52" rx="26" />

      <g clipPath={`url(#${clipId})`}>
        <ellipse className="ill-plaque" cx="168" cy="54" rx="76" ry={bulge} />
        <ellipse className="ill-plaque" cx="152" cy="106" rx="64" ry={bulge * 0.85} />
        {blocked ? <ellipse className="ill-clot" cx="160" cy="80" rx="34" ry="17" /> : null}
      </g>

      <g className="ill-flow">
        <circle cx="46" cy="80" r="6" />
        <circle cx="74" cy="68" r="4" />
        <circle cx="74" cy="92" r="4" />
      </g>
      <g className="ill-flow ill-flow--weak">
        <circle cx="252" cy="80" r="5" />
        <circle cx="278" cy="72" r="3" />
      </g>
    </svg>
  );
}

/** Aorta con il rigonfiamento: la linea tratteggiata e' il calibro normale. */
function Aneurysm({ className = '' }: Props) {
  return (
    <svg className={`ill ${className}`} viewBox={VIEW_BOX} aria-hidden="true">
      <g className="ill-wall">
        <rect x="8" y="56" width="304" height="48" rx="24" />
        <ellipse cx="168" cy="76" rx="66" ry="50" />
      </g>
      <g className="ill-blood">
        <rect x="15" y="63" width="290" height="34" rx="17" />
        <ellipse cx="168" cy="76" rx="57" ry="41" />
      </g>
      <path className="ill-dashed" d="M104 63 H232 M104 97 H232" />
      <g className="ill-flow">
        <circle cx="44" cy="80" r="5" />
        <circle cx="70" cy="80" r="4" />
      </g>
    </svg>
  );
}

/** Cervello con l'arteria ostruita: il ramo oltre il coagulo resta senza sangue. */
function Brain({ className = '' }: Props) {
  return (
    <svg className={`ill ${className}`} viewBox={VIEW_BOX} aria-hidden="true">
      <path
        className="ill-organ"
        d="M112 44 C124 20 164 12 190 22 C218 14 248 30 250 56 C268 68 266 98 248 108 C244 128 218 140 194 132 C172 144 136 138 124 118 C102 114 94 82 112 44 Z"
      />
      <g className="ill-gyri">
        <path d="M150 34 C136 48 142 62 156 66 C170 70 168 86 154 92" />
        <path d="M196 28 C186 46 198 58 212 58 C226 58 230 74 216 82" />
        <path d="M160 110 C176 104 186 112 194 122" />
      </g>

      <path className="ill-artery" d="M96 150 C118 132 132 110 148 98" />
      <path className="ill-artery ill-artery--faded" d="M148 98 C166 86 182 84 202 90" />
      <path className="ill-artery ill-artery--faded" d="M148 98 C158 78 174 64 194 58" />
      <circle className="ill-clot ill-clot--ringed" cx="150" cy="96" r="11" />
    </svg>
  );
}

/** Cuore con le coronarie: con le placche (CAD) o con l'arteria chiusa (infarto). */
function Coronary({ blocked = false, className = '' }: Props & { blocked?: boolean }) {
  const clipId = useCleanId('heart');

  return (
    <svg className={`ill ${className}`} viewBox={VIEW_BOX} aria-hidden="true">
      <g transform="translate(90 16) scale(1.34)">
        <defs>
          <clipPath id={clipId}>
            <path d={HEART_PATH} />
          </clipPath>
        </defs>

        <path className="ill-organ" d={HEART_PATH} />

        {blocked ? (
          <g clipPath={`url(#${clipId})`}>
            <ellipse className="ill-infarct" cx="25" cy="60" rx="17" ry="16" />
            <ellipse className="ill-infarct-edge" cx="25" cy="60" rx="17" ry="16" />
          </g>
        ) : null}

        <path className="ill-artery-thin" d="M50 17 C46 29 38 35 30 43 C24 49 21 58 20 68" />
        <path className="ill-artery-thin" d="M48 26 C58 33 66 42 70 55" />

        {blocked ? (
          <>
            <path className="ill-artery-thin ill-artery--faded" d="M30 43 C24 49 21 58 20 68" />
            <circle className="ill-clot ill-clot--ringed" cx="32" cy="41" r="6" />
          </>
        ) : (
          <g className="ill-plaque ill-plaque--dots">
            <circle cx="35" cy="36" r="4.2" />
            <circle cx="23" cy="52" r="3.6" />
            <circle cx="62" cy="45" r="3.6" />
          </g>
        )}
      </g>
    </svg>
  );
}

/** Gamba con l'arteria che si restringe: al piede arriva poco sangue. */
function Leg({ className = '' }: Props) {
  return (
    <svg className={`ill ${className}`} viewBox={VIEW_BOX} aria-hidden="true">
      <g className="ill-limb-outline">
        <path d="M132 30 V78 L166 124" strokeWidth="50" />
        <path d="M166 124 H200" strokeWidth="30" />
      </g>
      <g className="ill-limb">
        <path d="M132 30 V78 L166 124" strokeWidth="44" />
        <path d="M166 124 H200" strokeWidth="24" />
      </g>

      <path className="ill-artery" d="M132 34 V78 L162 118" />
      <path className="ill-artery ill-artery--faded" d="M162 118 H190" />

      <g className="ill-plaque ill-plaque--dots">
        <ellipse cx="132" cy="62" rx="9" ry="6" />
        <ellipse cx="150" cy="104" rx="8" ry="6" />
      </g>
    </svg>
  );
}

/** Le quattro camere e il giro del sangue: blu senza ossigeno, rosso con ossigeno. */
export function HeartChambers({ className = '' }: Props) {
  return (
    <svg className={`ill ${className}`} viewBox="0 0 320 190" aria-hidden="true">
      <rect className="ill-wall" x="34" y="26" width="252" height="130" rx="22" />

      <rect className="ill-blue-soft" x="42" y="34" width="118" height="46" rx="12" />
      <rect className="ill-blue" x="42" y="88" width="118" height="60" rx="12" />
      <rect className="ill-red-soft" x="160" y="34" width="118" height="46" rx="12" />
      <rect className="ill-red" x="160" y="88" width="118" height="60" rx="12" />

      <g className="ill-valve">
        <path d="M70 84 h26 M116 84 h26 M188 84 h26 M234 84 h26" />
      </g>

      {/* I grandi vasi escono dai ventricoli e passano davanti agli atri. */}
      <g className="ill-vessel-halo">
        <path d="M100 120 V16" />
        <path d="M220 120 V16" />
      </g>

      <g className="ill-arrow ill-arrow--blue">
        <path d="M12 46 h30" />
        <path d="M44 46 l-9 -5 v10 Z" />
        <path d="M100 120 V16" />
        <path d="M100 6 l-7 12 h14 Z" />
      </g>
      <g className="ill-arrow ill-arrow--red">
        <path d="M308 46 h-30" />
        <path d="M276 46 l9 -5 v10 Z" />
        <path d="M220 120 V16" />
        <path d="M220 6 l-7 12 h14 Z" />
      </g>
    </svg>
  );
}

const byDisease: Record<string, (props: Props) => ReactElement> = {
  ictus: Brain,
  aterosclerosi: (props) => <Vessel plaque={0.55} {...props} />,
  infarto: (props) => <Coronary blocked {...props} />,
  'aneurisma-aortico': Aneurysm,
  pad: Leg,
  cad: (props) => <Coronary {...props} />,
};

export function DiseaseIllustration({ id, className = '' }: Props & { id: string }) {
  const Drawing = byDisease[id] ?? ((props: Props) => <Vessel plaque={0.6} blocked {...props} />);
  return <Drawing className={className} />;
}
