import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
    
      <Head>
        <title>Lotte Calculator</title>
        <link rel="icon" href="/LotteIco.ico" />
      </Head>
    
      <main>
        <Header title="Lotte Calculator \n Privacy Policy" />
        <p className="description" style="text-align:center;">
          We do not store any of your data. Lotte Calculator and all of our other apps do not collect or store any of your data.
        </p>
      </main>

    </div>
  )
}
