import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import 'normalize.css'
import './globals.scss'

const nunito = Nunito({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'TestTask',
  description: 'TestTask',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
