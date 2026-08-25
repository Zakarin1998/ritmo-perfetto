import { ArrowRight, Cigarette } from 'lucide-react';
import { Callout } from '../components/Callout';
import { PieChart } from '../components/PieChart';
import { RiskChart } from '../components/RiskChart';
import { smokingClosing, smokingIntro, smokingPoints } from '../content/fumo';
import { href } from '../router';

export function Fumo() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Capitolo 3</p>
        <h1>Il fumo</h1>
        <p className="page-lead">
          Uno dei miei obiettivi è far capire alla gente che rischi ci sono con il fumo.
        </p>
      </header>

      <section className="prose">
        <p className="lede">
          <Cigarette className="lede-icon" size={20} aria-hidden="true" />
          {smokingIntro}
        </p>

        <PieChart />

        <h2>Quanto sale il rischio</h2>
        <RiskChart />

        <div className="card-grid card-grid--links">
          {smokingPoints.map((point) => (
            <article className="card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
              <a className="card-cta" href={href(point.to)}>
                {point.linkLabel} <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <Callout variant="doctor" title="E se volessi smettere?">
          {smokingClosing}
        </Callout>
      </section>
    </>
  );
}
