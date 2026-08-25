import type { Section } from './types';

export type Disease = {
  id: string;
  name: string;
  short: string;
  summary: string;
  /** Didascalia dell'illustrazione in cima alla pagina della malattia. */
  caption: string;
  emergency?: string;
  sections: Section[];
};

export const diseases: Disease[] = [
  {
    id: 'ictus',
    name: 'Ictus',
    short: 'Ictus',
    summary:
      'L’ictus è un’emergenza medica che richiede un trattamento immediato. Se pensi di avere un ictus, o di riconoscerlo in chi ti sta accanto, chiama il 112 o recati al pronto soccorso più vicino.',
    caption:
      'Un coagulo blocca un’arteria del cervello: la zona che sta oltre l’ostruzione resta senza sangue.',
    emergency:
      'Ogni minuto conta: più velocemente arriva il trattamento, maggiori sono le possibilità di un recupero completo.',
    sections: [
      {
        id: 'ictus-cosa-fare',
        title: 'Cosa fare in caso di ictus',
        blocks: [
          {
            kind: 'list',
            items: [
              'Chiamare il 112 o recarsi al pronto soccorso più vicino: più velocemente ricevi un trattamento, maggiori sono le tue possibilità di un recupero completo.',
              'Non guidare da soli: se pensi di avere un ictus, chiedi a qualcuno di accompagnarti in ospedale oppure chiama un taxi o un’ambulanza.',
              'Fornire al medico quante più informazioni possibili: se sei in grado, informa il medico dei tuoi sintomi, di quando sono iniziati e di eventuali condizioni mediche preesistenti o farmaci che stai assumendo.',
              'Segui le istruzioni del medico: il trattamento per l’ictus dipenderà dalla gravità della condizione, ma può includere farmaci per dissolvere i coaguli di sangue, angioplastica o intervento chirurgico a cervello aperto.',
            ],
          },
        ],
      },
      {
        id: 'ictus-rischio',
        title: 'Fattori di rischio per l’ictus',
        blocks: [
          { kind: 'text', value: 'Ci sono una serie di fattori di rischio per l’ictus, tra cui:' },
          {
            kind: 'list',
            items: [
              'Età: il rischio di ictus aumenta con l’età',
              'Sesso: gli uomini hanno più probabilità delle donne di avere un ictus prima dei 65 anni',
              'Storia familiare di ictus',
              'Fumo',
              'Ipertensione',
              'Colesterolo alto',
              'Diabete',
              'Obesità',
              'Mancanza di attività fisica',
              'Stress',
              'Fibrillazione atriale',
              'Apnea notturna',
            ],
          },
        ],
      },
      {
        id: 'ictus-prevenzione',
        title: 'Prevenzione dell’ictus',
        blocks: [
          {
            kind: 'text',
            value: 'Ci sono una serie di cose che puoi fare per ridurre il rischio di ictus, tra cui:',
          },
          {
            kind: 'list',
            items: [
              'Smettere di fumare',
              'Controllare la pressione sanguigna',
              'Mantenere un livello di colesterolo sano',
              'Controllare il diabete',
              'Mantenere un peso sano',
              'Fare esercizio fisico regolarmente',
              'Gestire lo stress',
              'Mangiare una dieta sana',
              'Se hai la fibrillazione atriale, assumere farmaci per ridurre il rischio di coaguli di sangue',
              'Se hai l’apnea notturna, utilizzare un dispositivo di pressione positiva continua delle vie aeree (CPAP)',
            ],
          },
          {
            kind: 'text',
            value: 'Se hai domande sull’ictus o sul tuo rischio di ictus, parla con il tuo medico.',
          },
        ],
      },
    ],
  },
  {
    id: 'aterosclerosi',
    name: 'Aterosclerosi',
    short: 'Aterosclerosi',
    summary:
      'L’aterosclerosi, conosciuta anche come arteriosclerosi, è una malattia cronica e progressiva che colpisce le arterie di medio e grosso calibro, causando un indurimento e una perdita di elasticità delle loro pareti.',
    caption:
      'Le placche si accumulano sulla parete dell’arteria e restringono il passaggio del sangue.',
    sections: [
      {
        id: 'aterosclerosi-cause',
        title: 'Cause e fattori di rischio',
        blocks: [
          {
            kind: 'text',
            value:
              'Le cause dell’aterosclerosi sono complesse e multifattoriali, ma i principali fattori di rischio includono:',
          },
          {
            kind: 'list',
            items: [
              'Colesterolo alto: il colesterolo LDL (colesterolo “cattivo”) può accumularsi nelle arterie formando placche aterosclerotiche.',
              'Ipertensione: la pressione sanguigna alta può danneggiare le pareti arteriose e renderle più suscettibili all’accumulo di placche.',
              'Fumo: il fumo danneggia le pareti arteriose e aumenta il rischio di formazione di placche.',
              'Diabete: il diabete può danneggiare le pareti arteriose e aumentare il rischio di formazione di placche.',
              'Obesità: l’obesità aumenta il rischio di fattori di rischio per l’aterosclerosi come colesterolo alto, ipertensione e diabete.',
              'Mancanza di attività fisica: l’attività fisica regolare aiuta a ridurre il rischio di fattori di rischio per l’aterosclerosi come colesterolo alto, ipertensione e obesità.',
              'Familiarità: avere una storia familiare di aterosclerosi aumenta il rischio di svilupparla.',
              'Età: il rischio di aterosclerosi aumenta con l’età.',
              'Sesso: gli uomini hanno più probabilità delle donne di sviluppare l’aterosclerosi prima dei 55 anni.',
            ],
          },
        ],
      },
      {
        id: 'aterosclerosi-complicazioni',
        title: 'Una malattia silenziosa',
        blocks: [
          {
            kind: 'text',
            value:
              'L’aterosclerosi è una malattia silenziosa che spesso non presenta sintomi nelle sue fasi iniziali. Tuttavia, con il progredire della malattia, le placche aterosclerotiche possono restringere le arterie e ridurre il flusso sanguigno agli organi. Questo può portare a una serie di complicazioni gravi, tra cui:',
          },
          {
            kind: 'list',
            items: [
              'Malattia coronarica: l’aterosclerosi delle arterie coronariche può causare angina pectoris, infarto e morte cardiaca improvvisa.',
              'Ictus: l’aterosclerosi delle arterie carotidi e vertebrali può causare ictus ischemico.',
              'Malattia arteriosa periferica: l’aterosclerosi delle arterie che irrorano le gambe può causare dolore, crampi e claudicazione intermittente.',
              'Aneurisma: l’aterosclerosi può indebolire le pareti arteriose, causando la formazione di un aneurisma, ovvero un rigonfiamento localizzato che può rompersi e causare sanguinamento interno.',
            ],
          },
        ],
      },
      {
        id: 'aterosclerosi-prevenzione',
        title: 'Prevenzione',
        blocks: [
          {
            kind: 'text',
            value:
              'La prevenzione dell’aterosclerosi è fondamentale per ridurre il rischio di queste complicazioni gravi. Le modifiche dello stile di vita, come smettere di fumare, seguire una dieta sana, fare esercizio fisico regolarmente e mantenere un peso corporeo sano, sono fondamentali per la prevenzione dell’aterosclerosi. In alcuni casi, possono essere necessari anche farmaci per controllare il colesterolo, la pressione sanguigna o altri fattori di rischio.',
          },
          {
            kind: 'text',
            value:
              'Se hai domande sull’aterosclerosi o sul tuo rischio di svilupparla, parla con il tuo medico.',
          },
        ],
      },
    ],
  },
  {
    id: 'infarto',
    name: 'Infarto',
    short: 'Infarto',
    summary:
      'L’infarto è un evento acuto causato dall’ostruzione di un’arteria coronarica che riduce il flusso sanguigno e l’ossigeno al muscolo cardiaco. Questo può causare danni o morte al tessuto cardiaco.',
    caption:
      'Una coronaria si chiude e la parte di muscolo cardiaco che riforniva resta senza ossigeno.',
    emergency:
      'Se pensi di avere un infarto, chiama immediatamente il 112 o recati al pronto soccorso più vicino. Non guidare da solo.',
    sections: [
      {
        id: 'infarto-sintomi',
        title: 'Sintomi di un infarto',
        blocks: [
          {
            kind: 'text',
            value:
              'I sintomi di un infarto possono variare da persona a persona, ma alcuni dei più comuni includono:',
          },
          {
            kind: 'list',
            items: [
              'Dolore al petto, che può essere descritto come un dolore pressante, opprimente o bruciante',
              'Dolore o fastidio al braccio sinistro, alla spalla, alla schiena, alla mascella o allo stomaco',
              'Fiato corto',
              'Nausea e vomito',
              'Sudore freddo',
              'Vertigini o stordimento',
              'Debolezza o affaticamento',
            ],
          },
        ],
      },
      {
        id: 'infarto-cosa-fare',
        title: 'Cosa fare se si pensa di avere un infarto',
        blocks: [
          {
            kind: 'text',
            value:
              'Se si pensa di avere un infarto, è importante chiamare immediatamente il 112 o recarsi al pronto soccorso più vicino. Non guidare da soli.',
          },
          {
            kind: 'text',
            value:
              'In ospedale, verrai sottoposto a una serie di esami per determinare se stai avendo un infarto e, in tal caso, per determinarne la gravità. Il trattamento dipenderà dalle tue specifiche condizioni, ma può includere farmaci per dissolvere i coaguli di sangue, angioplastica o intervento chirurgico a cuore aperto.',
          },
          {
            kind: 'text',
            value:
              'Il recupero dopo un infarto richiede tempo e riposo. Dovrai lavorare con il tuo medico per sviluppare un piano di riabilitazione che includa esercizio fisico, dieta e cambiamenti nello stile di vita.',
          },
        ],
      },
      {
        id: 'infarto-rischio',
        title: 'Fattori di rischio per l’infarto',
        blocks: [
          { kind: 'text', value: 'Ci sono una serie di fattori di rischio per l’infarto, tra cui:' },
          {
            kind: 'list',
            items: [
              'Età: il rischio di infarto aumenta con l’età',
              'Sesso: gli uomini hanno più probabilità delle donne di avere un infarto prima dei 65 anni',
              'Storia familiare di infarto',
              'Fumo',
              'Ipertensione',
              'Colesterolo alto',
              'Diabete',
              'Obesità',
              'Mancanza di attività fisica',
              'Stress',
            ],
          },
        ],
      },
      {
        id: 'infarto-prevenzione',
        title: 'Prevenzione dell’infarto',
        blocks: [
          {
            kind: 'text',
            value:
              'Ci sono una serie di cose che puoi fare per ridurre il rischio di infarto, tra cui:',
          },
          {
            kind: 'list',
            items: [
              'Smettere di fumare',
              'Controllare la pressione sanguigna',
              'Mantenere un livello di colesterolo sano',
              'Controllare il diabete',
              'Mantenere un peso sano',
              'Fare esercizio fisico regolarmente',
              'Gestire lo stress',
              'Mangiare una dieta sana',
            ],
          },
          {
            kind: 'text',
            value:
              'Se hai avuto un infarto è importante seguire le istruzioni del tuo medico per il recupero e ridurre il rischio di un altro infarto.',
          },
        ],
      },
    ],
  },
  {
    id: 'aneurisma-aortico',
    name: 'Aneurisma aortico',
    short: 'Aneurisma',
    summary:
      'È un rigonfiamento e un indebolimento della parete dell’aorta. Se si rompe può essere fatale.',
    caption:
      'La parete dell’aorta si indebolisce e si gonfia: il tratteggio segna il calibro normale del vaso.',
    sections: [],
  },
  {
    id: 'pad',
    name: 'PAD (malattia arteriosa periferica)',
    short: 'PAD',
    summary:
      'La PAD è causata da un restringimento delle arterie che portano il sangue alle gambe e ai piedi. Questo può causare dolore, crampi e, in casi gravi, cancrena e amputazione.',
    caption:
      'Nelle arterie delle gambe il restringimento è talmente marcato che ai piedi arriva poco sangue.',
    sections: [],
  },
  {
    id: 'cad',
    name: 'Malattie cardiache coronariche (CAD)',
    short: 'CAD',
    summary:
      'Le malattie coronariche (CAD) sono una condizione che colpisce le arterie coronarie, i vasi sanguigni che forniscono sangue ricco di ossigeno al cuore. Quando la CAD si sviluppa, le arterie coronarie si restringono o si ostruiscono a causa dell’accumulo di placca, una sostanza grassa che contiene colesterolo.',
    caption:
      'Le placche restringono le coronarie, le arterie che portano ossigeno al cuore.',
    sections: [
      {
        id: 'cad-problemi',
        title: 'Che problemi può causare',
        blocks: [
          {
            kind: 'text',
            value:
              'Questo restringimento del flusso sanguigno al cuore può causare una serie di problemi, tra cui:',
          },
          {
            kind: 'list',
            items: [
              'Angina pectoris: dolore o fastidio al petto causato da un flusso sanguigno insufficiente al cuore.',
              'Infarto: si verifica quando il flusso sanguigno a una parte del cuore viene improvvisamente bloccato.',
              'Sindrome coronarica acuta: un termine generale che copre l’angina instabile e l’infarto.',
              'Morte cardiaca improvvisa: si verifica quando il flusso sanguigno al cuore viene improvvisamente interrotto, causando l’arresto del battito cardiaco.',
            ],
          },
        ],
      },
      {
        id: 'cad-rischio',
        title: 'Fattori di rischio per le malattie coronariche',
        blocks: [
          {
            kind: 'text',
            value: 'Diversi fattori possono aumentare il rischio di sviluppare CAD, tra cui:',
          },
          {
            kind: 'list',
            items: [
              'Età: il rischio di CAD aumenta con l’età.',
              'Sesso: gli uomini hanno maggiori probabilità di sviluppare CAD rispetto alle donne, ma le donne hanno maggiori probabilità di sviluppare CAD dopo la menopausa.',
              'Storia familiare: avere familiari con CAD aumenta il rischio di svilupparla.',
              'Fumo: il fumo è un importante fattore di rischio per CAD.',
              'Colesterolo alto: livelli alti di colesterolo LDL (“cattivo”) possono aumentare il rischio di CAD.',
              'Pressione sanguigna alta: la pressione sanguigna alta può danneggiare le arterie coronarie e aumentare il rischio di CAD.',
              'Diabete: il diabete può aumentare il rischio di CAD.',
              'Obesità: l’obesità è un fattore di rischio per CAD.',
              'Stile di vita sedentario: uno stile di vita sedentario può aumentare il rischio di CAD.',
              'Stress: lo stress può aumentare il rischio di CAD.',
            ],
          },
        ],
      },
      {
        id: 'cad-prevenzione',
        title: 'Prevenzione delle malattie coronariche',
        blocks: [
          {
            kind: 'text',
            value:
              'Puoi ridurre il rischio di sviluppare CAD apportando modifiche allo stile di vita, come:',
          },
          {
            kind: 'list',
            items: [
              'Smettere di fumare: smettere di fumare è la cosa più importante che puoi fare per ridurre il rischio di CAD.',
              'Mantenere una dieta sana: una dieta sana che sia ricca di frutta, verdura e cereali integrali e povera di grassi saturi e colesterolo può aiutare a ridurre il rischio di CAD.',
              'Esercitarsi regolarmente: l’esercizio fisico regolare può aiutare a ridurre il rischio di CAD.',
              'Mantenere un peso sano: se sei in sovrappeso o obeso, perdere anche una piccola quantità di peso può aiutare a ridurre il rischio di CAD.',
              'Gestire lo stress: trovare modi sani per gestire lo stress, come esercizio, yoga o meditazione, può essere utile.',
              'Controllare le condizioni di salute croniche: condizioni come diabete e pressione alta possono aumentare il rischio di CAD, è importante tenerle sotto controllo.',
            ],
          },
        ],
      },
      {
        id: 'cad-trattamento',
        title: 'Trattamento delle malattie coronariche',
        blocks: [
          {
            kind: 'text',
            value:
              'Il trattamento per la CAD dipende dalla gravità della condizione. Il trattamento può includere:',
          },
          {
            kind: 'list',
            items: [
              'Farmaci: i farmaci possono essere usati per abbassare la pressione sanguigna, ridurre il colesterolo e prevenire la formazione di coaguli di sangue.',
              'Procedura chirurgica: se i farmaci non sono sufficienti per trattare la CAD, potrebbe essere necessaria un’operazione, come un intervento di bypass coronarico o un’angioplastica.',
              'Cambiamenti nello stile di vita: apportare cambiamenti nello stile di vita, come smettere di fumare, seguire una dieta sana e fare esercizio fisico regolarmente, è una parte importante del trattamento per la CAD.',
            ],
          },
        ],
      },
    ],
  },
];
