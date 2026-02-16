import type { Metadata } from 'next'
import { Familjen_Grotesk } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'

const familjen = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-familjen',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Botol | The Ultimate Companion for Hydration',
  description: 'We belive in the power of hydration',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${familjen.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
