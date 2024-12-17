import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NavbarUI from '@/components/NavbarUI'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vivanimal',
  description: 'Associação de Defesa dos Direitos dos Animais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarUI />{children}</body>
    </html>
  )
}
