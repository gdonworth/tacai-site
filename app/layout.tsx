import type { Metadata } from 'next';
import '../styles/globals.css';  // <-- fixed path
import React from 'react';

export const metadata: Metadata = {
  title: 'TACAI — Browse Smarter. Protect Your Privacy.',
  description: "TACAI instantly reveals hidden policy risks so you're always in control.",
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
