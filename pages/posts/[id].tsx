import Layout from '../../components/layout';
import { getAllPostIds, getPostData, PostDataWithContent } from '../../lib/posts';
import styles from '../../styles/Home.module.css';

export async function getStaticProps({ params } : any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

interface Props {
  postData: PostDataWithContent
}

export default function Post(props: Props) {
  const {postData} = props;

  return (
    <Layout pageTitle={postData.title}>
      <div className={styles.post}>
        <div className={styles["post-header"]}>
          <h1>{postData.title}</h1>
          <div className={styles["post-published"]}>Published {postData.published}</div>
        </div>
        <div className={styles["post-body"]} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}