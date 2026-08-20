import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'M G Muktaderul Kader | Senior Software Development & Database Specialist',
  description: 'Dynamic Software Architect with 13+ years of experience in software development and IT management, specializing in Oracle ERP, Laravel, and Database Design.',
  keywords: ['Software Developer', 'Database Specialist', 'Oracle ERP', 'Laravel', 'Full Stack Developer', 'PL/SQL', 'PHP', 'Oracle Forms'],
  authors: [{ name: 'M G Muktaderul Kader' }],
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
