import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from "react";
import styles from '../styles/Support.module.module.css'

export default function Support() {
    return (
        <div className="container">
          <Head>
            <title>Lotte Calculator</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <main>
            <Header className="header" title="iliasnolsson@icloud.com" />
            <p className="description">
              Feel free to contact me with any feedback or for support
            </p>
          </main>
        </div>
      )
}
