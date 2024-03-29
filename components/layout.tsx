import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { FaRss } from "react-icons/fa";

export interface Props {
  pageTitle?: string
}
export default function Layout(props: React.PropsWithChildren<Props>) {
  const { pageTitle, children } = props;
  return (
    <>
      <Head>
        <title>{`KWBlog${pageTitle ? `: ${pageTitle}` : ""}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kevin Berridge's blog" />
        <link type="application/rss+xml" rel="alternate" title="KWBlog (rss)" href="/feed.rss" />
        <link type="application/atom+xml" rel="alternate" title="KWBlog (atom)" href="/atom.xml" />
      </Head>
      <header className={styles.header}>
        <div className="pure-menu pure-menu-horizontal">
          <h1><Link className={`${styles["header-menu-item"]} pure-menu-heading`} href="/">KWBlog</Link></h1>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link className={`${styles["header-menu-item"]} pure-menu-link`} href="/about">About Me</Link>
            </li>
            <li className='pure-menu-item'>
              <Link className={`${styles["header-menu-item"]} pure-menu-link`} 
                href="/feed.rss" 
                title="RSS Feed" 
                prefetch={false}
                target='_new'
              >
                <FaRss />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
