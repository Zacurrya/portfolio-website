import './global.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Header from './components/layout/header'
import WaveGate from './components/layout/wave-gate'

export const metadata: Metadata = {
  title: 'Zaky Yusuf Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WaveGate>
          <Header />
          {children}
        </WaveGate>
      </body>
    </html>
  )
}
