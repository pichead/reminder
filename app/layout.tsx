import 'bootstrap/dist/css/bootstrap.css'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from '@/context/AuthContext'
import ProtectedAuth from '@/context/ProtectAuth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}