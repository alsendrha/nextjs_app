import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import style from './layout.module.css'

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
        <nav className={style.navbar_style}>
          <Link href={'/'}>
            Home
          </Link>&nbsp;&nbsp;
          <Link href={'/posts'}>
            Post
          </Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
