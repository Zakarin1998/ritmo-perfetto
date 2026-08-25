import type { ReactNode } from 'react';
import { AlertTriangle, Info, Stethoscope } from 'lucide-react';

type Variant = 'emergency' | 'info' | 'doctor';

const icons = {
  emergency: AlertTriangle,
  info: Info,
  doctor: Stethoscope,
};

export function Callout({
  variant = 'info',
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const Icon = icons[variant];

  return (
    <aside className={`callout callout--${variant}`}>
      <Icon className="callout-icon" size={20} aria-hidden="true" />
      <div>
        {title ? <p className="callout-title">{title}</p> : null}
        <p className="callout-body">{children}</p>
      </div>
    </aside>
  );
}
