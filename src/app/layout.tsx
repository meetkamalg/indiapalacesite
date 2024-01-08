import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'India Palace Restaurant and Sweets',
  description: 'Indian Cusine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <footer/>
      </body>
    </html>
  )
}
