import type { Metadata } from 'next'
import { Whisper } from 'next/font/google'
import './globals.css'

const whisper = Whisper({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'To-do-List',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${whisper.className}`}>{children}</body>
    </html>
  )
}
