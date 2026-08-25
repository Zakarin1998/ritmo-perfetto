export type RiskRow = {
  label: string;
  /** Quante volte aumenta il rischio rispetto a chi non fuma (valore minimo). */
  min: number;
  /** Quante volte aumenta il rischio rispetto a chi non fuma (valore massimo). */
  max: number;
  note: string;
};

// TODO: qui ci sono i due dati che si possono citare con una fonte pubblica.
// Se hai il grafico originale del blog, sostituisci questi numeri con i tuoi
// (e aggiorna anche `riskSource` qui sotto).
export const riskRows: RiskRow[] = [
  {
    label: 'Malattia coronarica',
    min: 2,
    max: 4,
    note: 'Chi fuma ha da 2 a 4 volte la probabilità di sviluppare una malattia coronarica rispetto a chi non fuma.',
  },
  {
    label: 'Ictus',
    min: 2,
    max: 4,
    note: 'Chi fuma ha da 2 a 4 volte la probabilità di avere un ictus rispetto a chi non fuma.',
  },
];

export const riskScaleMax = 5;

export const riskSource =
  'Dati: CDC (Centers for Disease Control and Prevention), “Health Effects of Cigarette Smoking”.';

export const smokingIntro =
  'Questo grafico dimostra di quanto si alza la probabilità di sviluppare queste malattie cardiache se si fuma!';

export type PieSlice = { label: string; value: number };

// I numeri del grafico a torta del blog. Dallo screenshot si legge solo
// "Coronariche: 60": gli altri tre sono ricavati dall'ampiezza degli spicchi.
// TODO: sostituisci i tre valori stimati con quelli esatti.
export const pieSlices: PieSlice[] = [
  { label: 'Coronariche', value: 60 },
  { label: 'Aneurisma aortico', value: 45 },
  { label: 'Ictus', value: 25 },
  { label: 'PAD (malattia arteriosa periferica)', value: 50 },
];

export const pieTitle = 'Le malattie del cuore legate al fumo';

export const pieSub =
  'Il peso di ciascuna malattia nel grafico del blog. Passa il dito o il mouse su uno spicchio per vedere il valore.';

export const smokingPoints = [
  {
    title: 'Il fumo rovina le arterie',
    text: 'Il fumo danneggia le pareti arteriose e aumenta il rischio di formazione di placche: è così che comincia l’aterosclerosi.',
    to: '/malattie/aterosclerosi',
    linkLabel: 'Vai all’aterosclerosi',
  },
  {
    title: 'Compare in ogni elenco di rischio',
    text: 'Ictus, infarto, malattia coronarica: in tutte queste pagine il fumo è tra i fattori di rischio, insieme a ipertensione, colesterolo alto e diabete.',
    to: '/malattie',
    linkLabel: 'Vai alle malattie cardiache',
  },
  {
    title: 'Smettere è la cosa più importante',
    text: 'Smettere di fumare è la cosa più importante che puoi fare per ridurre il rischio di malattia coronarica. È il primo punto di ogni elenco di prevenzione di questo blog.',
    to: '/malattie/cad',
    linkLabel: 'Vai alla prevenzione della CAD',
  },
];

export const smokingClosing =
  'Se hai domande sul fumo o sul tuo rischio cardiovascolare, parla con il tuo medico: qui trovi informazioni per capire, non una diagnosi.';
