export type Block =
  | { kind: 'text'; value: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'cards'; items: { title: string; text: string }[] };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};
