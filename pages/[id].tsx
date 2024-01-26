import React from 'react';
import Layout from '../components/layout';
import { getAllPageIds, getPageData } from '../lib/pages';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { PostDataWithContent } from '../lib/posts';

export async function getStaticProps({ params } : any) {
  const pageData = await getPageData(params.id);
  return {
    props: {
      postData: pageData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPageIds();
  return {
    paths,
    fallback: false,
  };
}

export interface Props {
  postData: PostDataWithContent
}

export default function Page(props: Props) {
  const { postData } = props;
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className={styles.post}>
        <div className={styles["post-header"]}>
          <h1>{postData.title}</h1>
        </div>
        <div className={styles["post-body"]} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}