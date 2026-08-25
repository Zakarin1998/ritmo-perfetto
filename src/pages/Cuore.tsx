import { Blocks } from '../components/Blocks';
import { Callout } from '../components/Callout';
import { Heartbeat } from '../components/Heartbeat';
import { HeartChambers } from '../components/illustrations';
import { heartIntro, heartSections } from '../content/cuore';
import { site } from '../content/site';

export function Cuore() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Capitolo 1</p>
        <h1>Come funziona il cuore</h1>
        <p className="page-lead">Il cuore: un motore instancabile.</p>
        <Heartbeat beats={3} className="page-ecg" />
      </header>

      <section className="prose">
        <p className="lede">{heartIntro}</p>

        <figure className="illustration">
          <HeartChambers />
          <figcaption>
            Le quattro camere e il giro del sangue: in blu quello povero di ossigeno che arriva dal
            corpo e va ai polmoni, in rosso quello ricco di ossigeno che torna dai polmoni e riparte
            verso il corpo.
          </figcaption>
        </figure>

        <div className="stat-tile">
          <p className="stat-label">Battiti al minuto di un adulto a riposo</p>
          <p className="stat-value">60–100</p>
          <p className="stat-note">Sotto o sopra questa fascia, meglio parlarne con il medico.</p>
        </div>

        {heartSections.map((section) => (
          <section className="anchor-section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            <Blocks blocks={section.blocks} />
          </section>
        ))}

        <Callout variant="doctor" title="Hai trovato un errore?">
          Se hai trovato qualcosa di sbagliato puoi scrivermelo nei messaggi di Instagram o via mail:{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </Callout>
      </section>
    </>
  );
}
