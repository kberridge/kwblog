import Layout from '../components/layout';
import { getAllPageIds, getPageData } from '../lib/pages';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getStaticProps({ params }) {
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

export default function Page({ postData }) {
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