import { ArrowRight } from 'lucide-react';
import { Callout } from '../components/Callout';
import { DiseaseIllustration } from '../components/illustrations';
import { diseases } from '../content/malattie';
import { site } from '../content/site';
import { href } from '../router';

export function Malattie() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Capitolo 2</p>
        <h1>Le malattie cardiache</h1>
        <p className="page-lead">
          Sei condizioni che colpiscono il cuore e le arterie. Ognuna ha la sua pagina: come si
          riconosce, cosa la causa e come si previene.
        </p>
      </header>

      <section className="prose">
        <Callout
          variant="emergency"
          title={`In caso di emergenza chiama il ${site.emergencyNumber}`}
        >
          Ictus e infarto sono emergenze mediche: non aspettare che i sintomi passino e non metterti
          alla guida da solo.
        </Callout>
      </section>

      <section className="index-grid">
        {diseases.map((disease) => (
          <a className="index-card" href={href(`/malattie/${disease.id}`)} key={disease.id}>
            <div className="index-thumb">
              <DiseaseIllustration id={disease.id} />
            </div>
            <div className="index-body">
              <h2>{disease.name}</h2>
              <p>{disease.summary}</p>
              <span className="card-cta">
                Leggi <ArrowRight size={15} aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
