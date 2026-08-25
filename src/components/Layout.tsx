import type { ReactNode } from 'react';
import { Camera, HeartPulse, Mail } from 'lucide-react';
import { nav, site } from '../content/site';
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
                  aria-current={item.path === path ? 'page' : undefined}
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
        <div className="footer-grid">
          <div>
            <p className="footer-title">Indice</p>
            <ul className="footer-links">
              {nav.map((item) => (
                <li key={item.path}>
                  <a href={href(item.path)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-title">Scrivimi</p>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail size={15} aria-hidden="true" /> {site.email}
                </a>
              </li>
              {site.instagram ? (
                <li>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    <Camera size={15} aria-hidden="true" /> Seguimi su Instagram
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <p className="footer-title">Un promemoria</p>
            <p className="footer-note">
              Non sono un medico: qui trovi divulgazione, non diagnosi. In caso di emergenza chiama
              il {site.emergencyNumber}.
            </p>
          </div>
        </div>

        <p className="footer-bottom">
          Copyright © {site.copyrightYear} Tutti i diritti riservati · {site.name} ❤️
        </p>
      </footer>
    </div>
  );
}
