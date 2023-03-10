import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/ui/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}){
    return(
        <>
      <Head>
        <title>Lemon</title>
        <meta name="description" content="Your ultimate gym companion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
      </body>
    </>
    )
}