import { useEffect } from 'react';
import type { ComponentType } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Layout } from './components/Layout';
import { Cuore } from './pages/Cuore';
import { Fumo } from './pages/Fumo';
import { Intro } from './pages/Intro';
import { Malattie } from './pages/Malattie';
import { href, useRoute } from './router';

const pages: Record<string, ComponentType> = {
  '/': Intro,
  '/cuore': Cuore,
  '/malattie': Malattie,
  '/fumo': Fumo,
};

function NotFound() {
  return (
    <section className="prose">
      <h1>Questa pagina non c’è</h1>
      <p>Forse il link è vecchio: torna all’inizio e riprova.</p>
      <p>
        <a className="button button--primary" href={href('/')}>
          Torna alla home
        </a>
      </p>
    </section>
  );
}

export default function App() {
  const route = useRoute();
  const reduceMotion = useReducedMotion();
  const Page = pages[route.path] ?? NotFound;

  useEffect(() => {
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';
    // Il salto avviene dopo il render della nuova pagina, cosi' l'ancora esiste gia'.
    const timer = window.setTimeout(() => {
      const target = route.anchor ? document.getElementById(route.anchor) : null;
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
    }, 60);

    return () => window.clearTimeout(timer);
  }, [route.path, route.anchor, reduceMotion]);

  return (
    <Layout path={route.path}>
      <AnimatePresence mode="wait">
        <motion.div
          key={route.path}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Page />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
