import withLayout from '../components/Layout';
import Content from '../components/Content';


const Blog = () => {
  
  // eventually make an api call with these ids
  const listOfBlogs = [
    'hello-next', 'chrome-tricks', 'css-bugs', 'deploying-with-digital-ocean'
  ].map(blogId => <Content id={blogId} key={blogId} />)

  return (
    <span>
      <h1>My Blog</h1>
      <ul>
        {listOfBlogs}
      </ul>
    </span>

  )
} 

export default withLayout(Blog);