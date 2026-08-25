import type { Section } from './types';

export const heartIntro =
  'Il cuore è un organo muscolare cavo, situato nel centro del torace, che funge da pompa per il sangue. La sua funzione principale è quella di trasportare il sangue ricco di ossigeno a tutto il corpo e di raccogliere il sangue povero di ossigeno per inviarlo ai polmoni per essere ossigenato.';

export const heartSections: Section[] = [
  {
    id: 'camere',
    title: 'Le quattro camere',
    blocks: [
      { kind: 'text', value: 'Il cuore è diviso in quattro camere: due atri e due ventricoli.' },
      {
        kind: 'cards',
        items: [
          {
            title: 'Atri',
            text: 'Sono le camere superiori del cuore. L’atrio destro riceve il sangue povero di ossigeno proveniente da tutto il corpo, mentre l’atrio sinistro riceve il sangue ricco di ossigeno proveniente dai polmoni.',
          },
          {
            title: 'Ventricoli',
            text: 'Sono le camere inferiori del cuore. Il ventricolo destro pompa il sangue povero di ossigeno ai polmoni, mentre il ventricolo sinistro pompa il sangue ricco di ossigeno a tutto il corpo.',
          },
        ],
      },
    ],
  },
  {
    id: 'valvole',
    title: 'Le valvole cardiache',
    blocks: [
      {
        kind: 'text',
        value:
          'Le valvole cardiache sono strutture che impediscono al sangue di refluire nelle camere cardiache già attraversate. Ci sono quattro valvole cardiache:',
      },
      {
        kind: 'list',
        items: [
          'Valvola tricuspide: si trova tra l’atrio destro e il ventricolo destro.',
          'Valvola polmonare: si trova tra il ventricolo destro e l’arteria polmonare.',
          'Valvola mitrale: si trova tra l’atrio sinistro e il ventricolo sinistro.',
          'Valvola aortica: si trova tra il ventricolo sinistro e l’aorta.',
        ],
      },
    ],
  },
  {
    id: 'ciclo',
    title: 'Il ciclo cardiaco',
    blocks: [
      {
        kind: 'text',
        value:
          'Il ciclo cardiaco è la sequenza di eventi che si verifica quando il cuore batte. Si compone di due fasi:',
      },
      {
        kind: 'cards',
        items: [
          {
            title: 'Diastole',
            text: 'È la fase di rilassamento del cuore. Durante la diastole, gli atri si riempiono di sangue.',
          },
          {
            title: 'Sistole',
            text: 'È la fase di contrazione del cuore. Durante la sistole, i ventricoli pompano il sangue nelle arterie.',
          },
        ],
      },
    ],
  },
  {
    id: 'ritmo',
    title: 'Il ritmo cardiaco',
    blocks: [
      {
        kind: 'text',
        value:
          'Il ritmo cardiaco è il numero di battiti del cuore al minuto. Un ritmo cardiaco normale per un adulto a riposo è compreso tra 60 e 100 battiti al minuto.',
      },
    ],
  },
  {
    id: 'fattori',
    title: 'Fattori che influenzano il ritmo cardiaco',
    blocks: [
      { kind: 'text', value: 'Il ritmo cardiaco può essere influenzato da diversi fattori, tra cui:' },
      {
        kind: 'list',
        items: [
          'Età: il ritmo cardiaco tende a diminuire con l’età.',
          'Esercizio fisico: l’esercizio fisico può aumentare il ritmo cardiaco.',
          'Stress: lo stress può aumentare il ritmo cardiaco.',
          'Farmaci: alcuni farmaci possono influenzare il ritmo cardiaco.',
          'Condizioni mediche: alcune condizioni mediche, come le malattie cardiache, possono influenzare il ritmo cardiaco.',
        ],
      },
      {
        kind: 'text',
        value:
          'È importante mantenere un ritmo cardiaco sano. Un ritmo cardiaco troppo alto o troppo basso può essere un segno di un problema di salute. Se sei preoccupato per il tuo ritmo cardiaco, dovresti consultare il tuo medico.',
      },
    ],
  },
];
