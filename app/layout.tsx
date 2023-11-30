import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Showroom',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className=''>
          <Navbar/>
          <main className='ml-48 bg-gradient-to-b from-slate-100 to-blue-100'>
          <div className="">
              {children}
          </div>
          </main>
        </div>
      </body>
    </html>
    
  )
}
