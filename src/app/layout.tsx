// Imports
import type { Metadata } from 'next'

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
        <body >{children}</body>
      </AppContextComponent>
    </html>
  )
}
