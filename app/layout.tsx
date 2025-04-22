import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raving Residents',
  description: 'Making fans out of you!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
