import './globals.css'
import { Inconsolata, Montserrat, PT_Serif, Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-montserrat',
})

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
})


export const metadata = {
  title: 'devChallenges - My team Page',
  description: 'Create my team page following the design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${ptSerif.variable} font-sans text-black`}>{children}</body>
    </html>
  )
}
