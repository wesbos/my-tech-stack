import { useRouter } from 'next/router';
import withLayout from '../components/Layout';

const Page = () => {
  const router = useRouter();
  console.log(router.query)
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default withLayout(Page)