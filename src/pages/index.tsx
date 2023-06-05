import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import App from '@/pages/_app.tsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty API Final</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <App />
    </>
  )
}
