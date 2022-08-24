import Container from 'components/Container'
import Postbody from 'components/Postbody'
import PostHeader from 'components/PostHeader'
import TwoColumn from 'components/TwoColumn/TwoColumn'
import TwoColumnMain from 'components/TwoColumn/TwoColumnMain'
import TwoColumnSide from 'components/TwoColumn/TwoColumnSide'
import { getAllSlugs, getPostBySlug } from 'lib/api'
import Image from 'next/image'
import React from 'react'
import ConvertBody from 'components/ConvertBody'
import PostCategories from 'components/PostCategories'
import { extractText } from 'lib/extractText'
import Meta from 'components/Meta'
import { eyecatchLocal } from 'lib/constans'
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/Pagination'

const Post = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImage={eyecatch.url}
        pageImageWidth={eyecatch.width}
        pageImageHeight={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle={'Blog Article'} publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <Postbody>
              <ConvertBody contentHtml={content} />
            </Postbody>
          </TwoColumnMain>
          <TwoColumnSide>
            <PostCategories categories={categories} />
          </TwoColumnSide>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64
  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}

export default Post
