import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { Blocks } from '../components/Blocks';
import { Callout } from '../components/Callout';
import { DiseaseIllustration } from '../components/illustrations';
import { diseases } from '../content/malattie';
import { href } from '../router';

export function Malattia({ id }: { id: string }) {
  const index = diseases.findIndex((item) => item.id === id);
  const disease = diseases[index];
  const previous = index > 0 ? diseases[index - 1] : null;
  const next = index < diseases.length - 1 ? diseases[index + 1] : null;

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          <a className="breadcrumb" href={href('/malattie')}>
            <ArrowLeft size={13} aria-hidden="true" /> Malattie cardiache
          </a>
        </p>
        <h1>{disease.name}</h1>
        <p className="page-lead">{disease.summary}</p>
      </header>

      <section className="prose">
        <figure className="illustration">
          <DiseaseIllustration id={disease.id} />
          <figcaption>{disease.caption}</figcaption>
        </figure>

        {disease.emergency ? (
          <p className="emergency-strip">
            <Phone size={16} aria-hidden="true" />
            {disease.emergency}
          </p>
        ) : null}

        {disease.sections.map((section) => (
          <section className="anchor-section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            <Blocks blocks={section.blocks} />
          </section>
        ))}

        {disease.sections.length === 0 ? (
          <Callout variant="info" title="Da dove arriva">
            È una delle complicazioni dell’aterosclerosi: le pareti delle arterie si indeboliscono o
            si restringono.{' '}
            <a href={href('/malattie/aterosclerosi')}>Leggi la pagina sull’aterosclerosi</a>.
          </Callout>
        ) : null}

        <nav className="pager" aria-label="Altre malattie">
          {previous ? (
            <a className="pager-link" href={href(`/malattie/${previous.id}`)}>
              <span className="pager-dir">
                <ArrowLeft size={13} aria-hidden="true" /> Precedente
              </span>
              <span className="pager-name">{previous.name}</span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a className="pager-link pager-link--next" href={href(`/malattie/${next.id}`)}>
              <span className="pager-dir">
                Successiva <ArrowRight size={13} aria-hidden="true" />
              </span>
              <span className="pager-name">{next.name}</span>
            </a>
          ) : (
            <span />
          )}
        </nav>
      </section>
    </>
  );
}
