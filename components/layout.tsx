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
        <nav className={`${styles["header-nav"]}`}>
          <h1><Link className={`${styles["header-menu-item"]}`} href="/">KWBlog</Link></h1>
          <ol className={`${styles["header-nav-list"]}`}>
            <li>
              <Link className={`${styles["header-menu-item"]}`} href="/about">About Me</Link>
            </li>
            <li>
              <Link className={`${styles["header-menu-item"]}`} 
                style={{display: "flex"}}
                href="/feed.rss" 
                title="RSS Feed" 
                prefetch={false}
                target='_new'
              >
                <FaRss aria-label='RSS' />
              </Link>
            </li>
          </ol>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
