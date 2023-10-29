import '././styles/globals.css'
import { Inter } from 'next/font/google'
import {UserProvider} from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Auto Deals',
  description: 'Used Cars for Sale in the USA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </UserProvider>
  )
}
