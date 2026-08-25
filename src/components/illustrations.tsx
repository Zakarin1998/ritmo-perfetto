import { useId } from 'react';
import type { ReactElement } from 'react';

/**
 * Illustrazioni schematiche disegnate a mano in SVG: niente testo dentro
 * l'immagine (la spiegazione sta nella didascalia), cosi' restano leggibili
 * sia grandi che piccole e seguono i colori del tema.
 */

type Props = { className?: string };

const VIEW_BOX = '0 0 320 160';

/** Vaso sanguigno visto in sezione, con la placca che lo restringe. */
function Vessel({ plaque, blocked = false, className = '' }: Props & { plaque: number; blocked?: boolean }) {
  const clipId = `lumen-${useId().replace(/:/g, '')}`;
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

      <path className="ill-artery" d="M96 150 C118 132 132 110 150 96" />
      <path className="ill-artery" d="M150 96 C168 84 182 82 200 88" />
      <path className="ill-artery ill-artery--faded" d="M150 96 C160 76 176 62 196 56" />
      <circle className="ill-clot" cx="152" cy="94" r="11" />
    </svg>
  );
}

/** Cuore con le coronarie: con le placche (CAD) o con l'arteria chiusa (infarto). */
function Coronary({ blocked = false, className = '' }: Props & { blocked?: boolean }) {
  return (
    <svg className={`ill ${className}`} viewBox={VIEW_BOX} aria-hidden="true">
      <g transform="translate(88 18) scale(1.32)">
        <path
          className="ill-organ"
          d="M50 92 C20 71, 4 49, 4 33 C4 17, 18 7, 32 7 C42 7, 48 13, 50 19 C52 13, 58 7, 68 7 C82 7, 96 17, 96 33 C96 49, 80 71, 50 92 Z"
        />
        {blocked ? (
          <path className="ill-infarct" d="M24 44 C36 40, 44 50, 42 64 C40 76, 28 78, 20 68 C14 60, 16 48, 24 44 Z" />
        ) : null}
        <path className="ill-artery-thin" d="M50 14 C44 26, 36 34, 28 40 C22 45, 19 54, 18 64" />
        <path className="ill-artery-thin" d="M46 28 C56 36, 64 44, 68 56" />
        {blocked ? (
          <>
            <path className="ill-artery-thin ill-artery--faded" d="M28 40 C22 45, 19 54, 18 64" />
            <circle className="ill-clot" cx="31" cy="38" r="6" />
          </>
        ) : (
          <g className="ill-plaque">
            <circle cx="35" cy="35" r="4" />
            <circle cx="24" cy="50" r="3.4" />
            <circle cx="60" cy="44" r="3.4" />
          </g>
        )}
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
        <path d="M74 84 h24 M124 84 h24 M192 84 h24 M242 84 h24" />
      </g>

      <g className="ill-arrow ill-arrow--blue">
        <path d="M14 44 h34" />
        <path d="M48 44 l-9 -5 v10 Z" />
        <path d="M100 26 v-16" />
        <path d="M100 10 l-5 9 h10 Z" />
      </g>
      <g className="ill-arrow ill-arrow--red">
        <path d="M306 44 h-34" />
        <path d="M272 44 l9 -5 v10 Z" />
        <path d="M220 26 v-16" />
        <path d="M220 10 l-5 9 h10 Z" />
      </g>
    </svg>
  );
}

const byDisease: Record<string, (props: Props) => ReactElement> = {
  ictus: Brain,
  aterosclerosi: (props) => <Vessel plaque={0.55} {...props} />,
  infarto: (props) => <Coronary blocked {...props} />,
  'aneurisma-aortico': Aneurysm,
  pad: (props) => <Vessel plaque={0.85} {...props} />,
  cad: (props) => <Coronary {...props} />,
};

export function DiseaseIllustration({ id, className = '' }: Props & { id: string }) {
  const Drawing = byDisease[id] ?? ((props: Props) => <Vessel plaque={0.6} blocked {...props} />);
  return <Drawing className={className} />;
}
