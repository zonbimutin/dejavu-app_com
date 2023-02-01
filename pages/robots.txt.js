export default () => {
  return <div>Hello world</div>
}

const crawlableRobotsTxt = `User-agent: *\nAllow: /`

const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  // Return a non-crawlable robots.txt in non-production environments
  res.write(
    process.env.VERCEL_ENV === 'production'
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt
  )
  res.end()

  return {
    props: {},
  }
}
