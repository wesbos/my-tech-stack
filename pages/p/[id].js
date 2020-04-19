import { useRouter } from 'next/router';
import withLayout from '../../components/Layout';


const Content = props => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post Content</p>
    </>
    );
}

export default withLayout(Content);