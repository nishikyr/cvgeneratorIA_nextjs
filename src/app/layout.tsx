import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV Generator',
  description: 'Crea tu CV profesional paso a paso con ayuda de IA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
