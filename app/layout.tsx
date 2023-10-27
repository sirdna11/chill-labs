import { NavBar, Footer } from '@/app/components'
import './globals.css'
import type { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'Grocery Store',
  description: 'Discover the best products in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
