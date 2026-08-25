export const site = {
  name: 'Ritmo perfetto',
  tagline: 'Cuore, prevenzione e primo soccorso, spiegati semplice',
  email: 'futuracardiologainsta@gmail.com',
  // TODO: inserisci qui l'indirizzo del profilo Instagram (es. https://www.instagram.com/nomeprofilo).
  // Finche' resta vuoto il pulsante "Seguimi su Instagram" non viene mostrato.
  instagram: '',
  emergencyNumber: '112',
  copyrightYear: 2026,
};

export type NavItem = { path: string; label: string; short: string };

export const nav: NavItem[] = [
  { path: '/', label: 'Intro', short: 'Intro' },
  { path: '/cuore', label: 'Come funziona il cuore', short: 'Il cuore' },
  { path: '/malattie', label: 'Le malattie cardiache', short: 'Malattie' },
  { path: '/fumo', label: 'Il fumo', short: 'Fumo' },
];

export const intro = {
  greeting: 'Ciao!',
  body: [
    'Sono un’aspirante cardiochirurga, amo parlare di cardiologia, di malattie cardiache e di stili di vita sani. Il mio obiettivo principale è far imparare a tutti le manovre di primo soccorso come la RCP. Un altro mio obiettivo è far capire alla gente che rischi ci sono con il fumo!',
    'Spero che questa lettura non ti dispiaccia ❤️',
  ],
  disclaimer:
    'Ricorda però: non sono un medico. Se ti servono consigli più specifici consulta un esperto.',
  typos:
    'Se riscontri qualche errore di battitura è normale, non significa che non sono andata a scuola!',
  goals: [
    {
      title: 'Primo soccorso per tutti',
      text: 'Far imparare a chiunque le manovre di primo soccorso, a partire dalla RCP (rianimazione cardiopolmonare).',
    },
    {
      title: 'Dire la verità sul fumo',
      text: 'Far capire quali rischi concreti corre il cuore di chi fuma, numeri alla mano.',
    },
    {
      title: 'Cardiologia senza paroloni',
      text: 'Raccontare come lavora il cuore e cosa succede quando si ammala, con parole di tutti i giorni.',
    },
  ],
  cards: [
    {
      path: '/cuore',
      title: 'Come funziona il cuore',
      text: 'Camere, valvole, ciclo cardiaco e ritmo: il motore instancabile che hai nel petto.',
    },
    {
      path: '/malattie',
      title: 'Le malattie cardiache',
      text: 'Ictus, aterosclerosi, infarto, aneurisma aortico, PAD e malattia coronarica.',
    },
    {
      path: '/fumo',
      title: 'Il fumo',
      text: 'Di quanto sale la probabilità di ammalarsi di cuore se si fuma.',
    },
  ],
  contact:
    'Se hai trovato qualcosa di sbagliato puoi scrivermelo nei messaggi di Instagram o via mail!',
};
