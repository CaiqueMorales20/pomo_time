// Imports
import type { Metadata } from 'next'

// Fonts
import { Kumbh_Sans } from 'next/font/google'
const kumbh_sans = Kumbh_Sans({ subsets: ['latin'] })

// Style
import './globals.css'
import AppContextComponent from './context'

// Seo
export const metadata: Metadata = {
  title: 'Pomo Time',
  description: 'Pomodoro application to improve productive',
}

// Root
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppContextComponent>
        <body className={kumbh_sans.className}>{children}</body>
      </AppContextComponent>
    </html>
  )
}
