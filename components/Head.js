import { default as NextHead } from 'next/head';

const Head = props => {
  return (
    <NextHead>
      <title>{props.titleTag}</title>
      <link rel='icon' type='image/x-icon' href='images/favicons/favicon.ico'/>
      <link rel='stylesheet' type='type/css'href='/static/nprogress.css'/>
      <meta name='description' content='Tech Stack by Jacob Andrew Smith'/>
      <meta property="og:image" /* content image goes here*/ />
      {/* <meta name="og:title" content={siteTitle} /> */}
      <meta name='twitter:card' content='summary_large_image' />
    </NextHead>
  )
}

export default Head