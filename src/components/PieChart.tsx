import { useState } from 'react';
import { pieSlices, pieSub, pieTitle } from '../content/fumo';

const SIZE = 260;
const CENTER = SIZE / 2;
const RADIUS = 118;
/** Spazio (in gradi) lasciato fra uno spicchio e l'altro. */
const GAP = 1.1;
/** Sotto questa ampiezza la percentuale non ci sta dentro lo spicchio. */
const MIN_SWEEP_FOR_LABEL = 26;

const total = pieSlices.reduce((sum, slice) => sum + slice.value, 0);

const point = (radius: number, degrees: number) => {
  const radians = ((degrees - 90) * Math.PI) / 180;
  return [CENTER + radius * Math.cos(radians), CENTER + radius * Math.sin(radians)];
};

const arcs = pieSlices.map((slice, index) => {
  const start = pieSlices.slice(0, index).reduce((sum, item) => sum + item.value, 0);
  const from = (start / total) * 360;
  const sweep = (slice.value / total) * 360;
  const inset = sweep > GAP * 4 ? GAP : 0;
  const [x0, y0] = point(RADIUS, from + inset);
  const [x1, y1] = point(RADIUS, from + sweep - inset);
  const [labelX, labelY] = point(RADIUS * 0.63, from + sweep / 2);
  const largeArc = sweep > 180 ? 1 : 0;

  return {
    ...slice,
    share: Math.round((slice.value / total) * 100),
    sweep,
    labelX,
    labelY,
    path: `M ${CENTER} ${CENTER} L ${x0} ${y0} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${x1} ${y1} Z`,
  };
});

export function PieChart() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <figure className="chart pie">
      <figcaption className="chart-head">
        <h3>{pieTitle}</h3>
        <p className="chart-sub">{pieSub}</p>
      </figcaption>

      <ul className="pie-legend">
        {arcs.map((arc, index) => (
          <li key={arc.label}>
            <span className={`pie-key slice-${index + 1}`} aria-hidden="true" />
            {arc.label}
          </li>
        ))}
      </ul>

      <div className="pie-plot">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={pieTitle}>
          <g className={active === null ? '' : 'has-active'}>
            {arcs.map((arc, index) => (
              <path
                key={arc.label}
                className={`pie-slice slice-${index + 1} ${active === index ? 'is-active' : ''}`}
                d={arc.path}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                tabIndex={0}
              >
                <title>{`${arc.label}: ${arc.value}`}</title>
              </path>
            ))}
            {arcs.map((arc, index) =>
              arc.sweep >= MIN_SWEEP_FOR_LABEL ? (
                <text
                  key={arc.label}
                  className={`pie-share slice-ink-${index + 1}`}
                  x={arc.labelX}
                  y={arc.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {arc.share}%
                </text>
              ) : null,
            )}
          </g>
        </svg>

        <p className={`pie-readout ${active === null ? 'is-idle' : ''}`} aria-live="polite">
          {active === null ? (
            'Scegli uno spicchio'
          ) : (
            <>
              <span className={`pie-key slice-${active + 1}`} aria-hidden="true" />
              {arcs[active].label}: <strong>{arcs[active].value}</strong>
            </>
          )}
        </p>
      </div>

      <details className="chart-table">
        <summary>Vedi i dati in tabella</summary>
        <table>
          <thead>
            <tr>
              <th scope="col">Malattia</th>
              <th scope="col">Valore</th>
              <th scope="col">Quota</th>
            </tr>
          </thead>
          <tbody>
            {arcs.map((arc) => (
              <tr key={arc.label}>
                <th scope="row">{arc.label}</th>
                <td>{arc.value}</td>
                <td>{arc.share}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
