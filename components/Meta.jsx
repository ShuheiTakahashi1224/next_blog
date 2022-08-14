import { siteMeta } from 'lib/constans'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import siteImage from 'images/ogp.jpg'

const Meta = ({
  pageTitle,
  pageDesc,
  pageImage,
  pageImageWidth,
  pageImageHeight,
}) => {
  const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
    siteMeta
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const description = pageDesc ?? siteDesc

  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`

  const image = pageImage ?? siteImage.src
  const imageWidth = pageImageWidth ?? siteImage.width
  const imageHeight = pageImageHeight ?? siteImage.height
  const imageUrl = image.startsWith('https') ? image : `${siteUrl}${image}`
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={`${pageTitle} | ${siteTitle}`} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Meta
