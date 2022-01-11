import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">

      <main>
        <Header title="Lotte Calculator Privacy Policy" />
        <p className="description">
          We do not store any of your data. Lotte Calculator and all of our other apps do not collect or store any of your data. </code>
        </p>
      </main>

    </div>
  )
}
