import type { Metadata } from 'next'
import { AOSInit } from './components/Aos'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Faq from './components/Faq'

export const metadata: Metadata = {
  title: 'ITAJA',
  description: 'Technology made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <Header></Header>
        {children}
        {/* <Faq></Faq> */}
        <Footer></Footer>
      </body>
    </html>
  )
}
