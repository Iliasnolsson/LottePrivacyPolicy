import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container"
      padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 10px;>
    
      <Head>
        <title>Lotte Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <Header title="Lotte Calculator Privacy Policy" />
        <p className="description">
          We do not store any of your data. Lotte Calculator and all of our other apps do not collect or store any of your data.
        </p>
      </main>

    </div>
  )
}
