import { useRouter } from 'next/router';
import Layout from '../../components/Layout';


const Content = props => {
  const router = useRouter();
  console.log(props)
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post Content</p>
    </Layout>
    );
}

// Content.getInitialProps = async (props) => {
//   console.log(props)
//   const res = await fetch(`https://api.tvmaze.com/search/shows/${props.query.id}`);
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);
//   console.log(`Show data fetched `, {data});

//   return data
// }

export default Content;