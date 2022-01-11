import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Support() {
    return (
        <div className="container">
        
          <Head>
            <title>Lotte Calculator</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <main>
            <Header title="iliasnolsson@icloud.com" />
            <p className="description">
              Feel free to contact me with any feedback or if you need support
            </p>
          </main>
    
        </div>
      )
}
