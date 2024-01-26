import React from 'react';
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import '../styles/global.css'
import { AppProps } from 'next/app';
import { Source_Sans_3 } from 'next/font/google'

const sourceSans = Source_Sans_3({ weight: '400', subsets: ['latin'] })

export default function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <style jsx global>{`
        html, button, input, select, textarea, .pure-g [class *= "pure-u"] {
          font-family: ${sourceSans.style.fontFamily}, sans-serif;
          font-weight: 400;
          font-size: 17px;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}