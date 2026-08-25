import { useEffect, useState } from 'react';

export type Route = {
  /** Percorso della pagina, es. "/malattie". */
  path: string;
  /** Eventuale ancora interna alla pagina, es. "ictus". */
  anchor: string | null;
};

/** "#/malattie#ictus" -> { path: "/malattie", anchor: "ictus" } */
function readRoute(): Route {
  const [rawPath = '', rawAnchor] = window.location.hash.slice(1).split('#');
  return {
    path: rawPath.startsWith('/') ? rawPath : '/',
    anchor: rawAnchor ? rawAnchor : null,
  };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

/** Trasforma un percorso interno ("/cuore", "/malattie#ictus") in un href. */
export const href = (to: string) => `#${to}`;
