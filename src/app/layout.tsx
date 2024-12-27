import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maanvik Softech | Innovative Software Solutions for Business Growth',
  description: 'Maanvik Softech specializes in creating cutting-edge software solutions that combine creativity and technology to drive business innovation. Our software is designed to solve problems, optimize processes, and support business growth.',
  keywords: 'Maanvik Softech, software solutions, innovative software, business software, technology solutions, custom software, digital transformation, business growth, software development, problem-solving software, smart software, enterprise solutions, software for businesses, creative software solutions'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>{children}</body>
    </html>
  )
}
