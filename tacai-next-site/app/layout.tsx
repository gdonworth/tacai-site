export const metadata = {
  title: 'TACAI — Browse Smarter. Protect Your Privacy.',
  description: 'TACAI instantly reveals hidden policy risks so you're always in control.',
  icons: { icon: '/favicon.ico' }
};

import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
