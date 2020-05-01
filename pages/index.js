import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

import utilStyles from '../styles/utils.module.css';

// add attributes for Link at the <a> tag level

const Index = ({ allPosts }) => {
  const title = 'Welcome! 👋'
  return (
    <Layout home title={title} >
        <h1 className='text-6xl'>Welcome!</h1>
      <section className='flex flex-row-reverse justify-around'>
        <img className='rounded-full w-2/6' src='/images/profile.jpg'/>
        <article className='leading-10 w-4/6 mr-8 text-justify'>
        Info about Me 
        ↪ Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
        </article>
      </section>

      {/* <br/>
      <h3>Blog</h3>
      <ul className={utilStyles.listItem}>
        {allPosts.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            {title} <br/> {date}
          </li>
        ))}
      </ul> */}
    </Layout>
  )
};

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return {
    props: {
      allPosts
    }
  }
}


// Index.getInitialProps = async () =>  {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   console.log(`Show data fetched `, data.map(entry => entry));
//   return {
//     shows: data.map(entry => entry.show)
//   };

        {/* <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a className="example--class">{show.name}</a>
            </Link>
          </li>
        ))}
      </ul> */}
// };

export default Index;


