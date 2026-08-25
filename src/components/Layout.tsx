import type { ReactNode } from 'react';
import { ArrowUp, HeartPulse, Mail } from 'lucide-react';
import { Heartbeat } from './Heartbeat';
import { InstagramIcon } from './icons';
import { instagramHandle, nav, site } from '../content/site';
import { href } from '../router';

export function Layout({ path, children }: { path: string; children: ReactNode }) {
  return (
    <div className="page">
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>

      <header className="site-header">
        <a className="brand" href={href('/')}>
          <HeartPulse className="brand-icon" size={22} aria-hidden="true" />
          <span>{site.name}</span>
        </a>

        <nav className="site-nav" aria-label="Sezioni del blog">
          <ul>
            {nav.map((item) => (
              <li key={item.path}>
                <a
                  href={href(item.path)}
                  aria-current={
                    item.path === path || (item.path !== '/' && path.startsWith(`${item.path}/`))
                      ? 'page'
                      : undefined
                  }
                  title={item.label}
                >
                  {item.short}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="contenuto">{children}</main>

      <footer className="site-footer">
        <Heartbeat beats={5} className="footer-ecg" />

        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand brand--footer" href={href('/')}>
              <HeartPulse className="brand-icon" size={24} aria-hidden="true" />
              <span>{site.name}</span>
            </a>
            <p className="footer-tagline">{site.tagline}</p>
            <p className="footer-sign">Spero che questa lettura non ti dispiaccia ❤️</p>
          </div>

          <nav className="footer-col" aria-label="Indice del sito">
            <p className="footer-title">Indice</p>
            <ul className="footer-links">
              {nav.map((item) => (
                <li key={item.path}>
                  <a href={href(item.path)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <p className="footer-title">Seguimi</p>
            <div className="footer-socials">
              {site.instagram ? (
                <a
                  className="social social--instagram"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={19} />
                  <span>
                    Instagram
                    <small>{instagramHandle}</small>
                  </span>
                </a>
              ) : null}
              <a className="social" href={`mailto:${site.email}`}>
                <Mail size={19} aria-hidden="true" />
                <span>
                  Scrivimi
                  <small>{site.email}</small>
                </span>
              </a>
            </div>
            <p className="footer-note">
              Non sono un medico: qui trovi divulgazione, non diagnosi. In caso di emergenza chiama
              il {site.emergencyNumber}.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © {site.copyrightYear} Tutti i diritti riservati · {site.name} ❤️
          </p>
          <button
            className="to-top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={14} aria-hidden="true" /> Torna su
          </button>
        </div>
      </footer>
    </div>
  );
}
