import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  //Return an array of all possible values for id
  const paths = getAllPostIds();
  console.log('...........In getStaticPaths.................', paths);
  return {
    paths,
    fallback: false
  };
}

//Reurn the data based on id, get params as it is a static route
export async function getStaticProps({ params }) {
  console.log('..........In getStaticProps.............', params);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
