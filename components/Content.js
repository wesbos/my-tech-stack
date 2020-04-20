import Link from 'next/link';


const Content = props => {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  )
}

export default Content;