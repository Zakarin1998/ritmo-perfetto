import { ArrowRight, Camera, HeartHandshake, Mail } from 'lucide-react';
import { Callout } from '../components/Callout';
import { Heartbeat } from '../components/Heartbeat';
import { intro, site } from '../content/site';
import { href } from '../router';

export function Intro() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Blog di cardiologia ❤️</p>
          <h1>{site.name}</h1>
          <p className="hero-tagline">{site.tagline}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={href('/cuore')}>
              Come funziona il cuore <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button" href={href('/malattie')}>
              Le malattie cardiache
            </a>
          </div>
        </div>
        <Heartbeat className="hero-ecg" />
      </section>

      <section className="prose">
        <h2>{intro.greeting}</h2>
        {intro.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Callout variant="doctor" title="Prima di leggere">
          {intro.disclaimer}
        </Callout>
        <p className="aside-note">{intro.typos}</p>
      </section>

      <section className="band">
        <div className="band-inner">
          <h2>Perché questo blog</h2>
          <div className="card-grid">
            {intro.goals.map((goal) => (
              <article className="card" key={goal.title}>
                <HeartHandshake className="card-icon" size={20} aria-hidden="true" />
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prose">
        <h2>Indice</h2>
        <div className="card-grid card-grid--links">
          {intro.cards.map((card) => (
            <a className="card card--link" href={href(card.path)} key={card.path}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="card-cta">
                Leggi <ArrowRight size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="prose">
        <h2>Parliamone</h2>
        <p>{intro.contact}</p>
        <div className="hero-actions">
          <a className="button button--primary" href={`mailto:${site.email}`}>
            <Mail size={16} aria-hidden="true" /> {site.email}
          </a>
          {site.instagram ? (
            <a className="button" href={site.instagram} target="_blank" rel="noreferrer">
              <Camera size={16} aria-hidden="true" /> Seguimi su Instagram
            </a>
          ) : null}
        </div>
      </section>
    </>
  );
}
