import type { Block } from '../content/types';

/**
 * Nel testo del blog molte voci di elenco sono scritte come "Fumo: il fumo
 * danneggia...". Qui la parte prima dei due punti diventa il titolino della voce.
 */
function ListItem({ text }: { text: string }) {
  const separator = text.indexOf(': ');
  if (separator > 0 && separator <= 42) {
    return (
      <li>
        <strong>{text.slice(0, separator)}</strong>
        {text.slice(separator + 1)}
      </li>
    );
  }
  return <li>{text}</li>;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.kind === 'text') {
          return <p key={index}>{block.value}</p>;
        }

        if (block.kind === 'list') {
          return (
            <ul className="bullets" key={index}>
              {block.items.map((item) => (
                <ListItem key={item} text={item} />
              ))}
            </ul>
          );
        }

        return (
          <div className="card-grid" key={index}>
            {block.items.map((item) => (
              <article className="card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        );
      })}
    </>
  );
}
