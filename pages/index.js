import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import React, {useEffect, useState} from "react";


export default function Home() {

  return (
    <div>
      <Head>
        <meta charSet='utf-8'/>
        <meta name='robots' content='index, follow'></meta>
        <meta name='description' content='projeto'></meta>
        <meta name='author' content='@And'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Promofarma</title>

      </Head>
      <Menu/>
      <script src="mobile-navbar.js"></script>
      <script src="button.js"></script>
    </div>
  )
}
