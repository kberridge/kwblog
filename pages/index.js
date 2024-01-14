import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Layout from '../components/layout';
import generateRssFeed from '../lib/generateRSSFeed';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  await generateRssFeed(allPostsData);
  return {
    props: {
      allPostsData,
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={`${styles["post-list"]} pure-g`}>
        {allPostsData.map(({ id, published, title, excerpt }, i) => (
          <div className="pure-u-1 pure-u-md-1-2" key={i}>
            <div className={styles.post}>
              <div className={styles["post-header"]}>
                <h1><Link href={`/posts/${id}`}>{title}</Link></h1>
                <div className={styles["post-published"]}>{published}</div>
              </div>
              <div className={styles["post-excerpt"]}>
                <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                <Link className={styles["post-excerpt-ellipsis"]} href={`/posts/${id}`}>...</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}