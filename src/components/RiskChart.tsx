import { riskRows, riskScaleMax, riskSource } from '../content/fumo';

const ticks = Array.from({ length: riskScaleMax }, (_, index) => index + 1);

/** Posizione orizzontale in %, su una scala che parte da 1x (chi non fuma). */
const pct = (value: number) => ((value - 1) / (riskScaleMax - 1)) * 100;

export function RiskChart() {
  return (
    <figure className="chart">
      <figcaption className="chart-head">
        <h3>Quante volte aumenta il rischio in chi fuma</h3>
        <p className="chart-sub">
          Rispetto a chi non fuma, che vale 1×. La parte piena è il valore minimo, la parte più
          chiara arriva al massimo.
        </p>
      </figcaption>

      <div className="chart-plot">
        {riskRows.map((row) => (
          <div className="chart-row" key={row.label}>
            <p className="chart-label">{row.label}</p>
            <div className="chart-track">
              {ticks.map((tick) => (
                <span className="chart-grid" key={tick} style={{ left: `${pct(tick)}%` }} />
              ))}
              <span
                className="chart-bar chart-bar--min"
                style={{ width: `${pct(row.min)}%` }}
                title={row.note}
              />
              <span
                className="chart-bar chart-bar--range"
                style={{
                  left: `calc(${pct(row.min)}% + 2px)`,
                  width: `calc(${pct(row.max) - pct(row.min)}% - 2px)`,
                }}
                title={row.note}
              />
              <span className="chart-value" style={{ left: `${pct(row.max)}%` }}>
                {row.min}–{row.max}×
              </span>
            </div>
          </div>
        ))}

        <div className="chart-axis" aria-hidden="true">
          {ticks.map((tick) => (
            <span key={tick} style={{ left: `${pct(tick)}%` }}>
              {tick}×
            </span>
          ))}
        </div>
      </div>

      <details className="chart-table">
        <summary>Vedi i dati in tabella</summary>
        <table>
          <thead>
            <tr>
              <th scope="col">Malattia</th>
              <th scope="col">Rischio rispetto a chi non fuma</th>
            </tr>
          </thead>
          <tbody>
            {riskRows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>
                  da {row.min}× a {row.max}×
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>

      <p className="chart-source">{riskSource}</p>
    </figure>
  );
}
