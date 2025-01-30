import React from 'react';
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import '../styles/global.css'
import { AppProps } from 'next/app';
import { Source_Sans_3 } from 'next/font/google'
import { Petrona } from 'next/font/google'

const sourceSans = Source_Sans_3({ weight: '400', subsets: ['latin'], variable: "--sourcesans" })
const petrona = Petrona({ weight: '400', subsets: ['latin'] })

export default function MyApp({ Component, pageProps } : AppProps) {
  return (
    <div className={sourceSans.variable}>
      <style jsx global>{`
        html, button, input, select, textarea, .pure-g [class *= "pure-u"] {
          font-family: ${petrona.style.fontFamily};
          font-weight: 400;
          font-size: 17px;
          line-height: 1.3;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  )
}