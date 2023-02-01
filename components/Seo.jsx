import Head from 'next/head'

export default ({ seo, type, currentUrl }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {seo?.metaTitle && (
        <>
          <title>{seo.metaTitle}</title>
          <meta property="og:title" content={seo.metaTitle} />
        </>
      )}

      {seo?.metaDescription && (
        <>
          <meta name="description" content={seo.metaDescription} />
          <meta property="og:description" content={seo.metaDescription} />
        </>
      )}

      {seo?.metaImage && (
        <>
          <meta
            property="og:image"
            content={seo.metaImage.data.attributes.url}
          />
          <meta
            name="twitter:image"
            content={seo.metaImage.data.attributes.url}
          />
          <meta name="image" content={seo.metaImage.data.attributes.url} />
        </>
      )}

      {seo?.metaRobots && <meta name="robots" content={seo.metaRobots} />}
      {type === 'article' && <meta property="og:type" content="article" />}
      <meta
        property="og:url"
        content={currentUrl ? currentUrl : 'https://dejavu-app.com'}
      />
      <meta property="og:site_name" content="Dejavu App" />

      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="canonical"
        href={seo.canonicalURL ? seo.canonicalURL : 'https://dejavu-app.com'}
      />
    </Head>
  )
}
