import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import utilStyles from '../styles/utils.module.css';

// add attributes for Link at the <a> tag level

const Index = props => {
  return (
    <Layout home>
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
      <div className={utilStyles.typewriter}>
        <h2>Welcome Friends!</h2>
      </div>
      {/* <div>
        <Link href="posts/first-post">
          <a>First Post</a>
        </Link>
      </div> */}
    </Layout>
  )
};

Index.getInitialProps = async () =>  {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(`Show data fetched `, data.map(entry => entry));
  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;