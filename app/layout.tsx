import './global.css'
import Header from './components/layout/header'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Zaky Yusuf Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
