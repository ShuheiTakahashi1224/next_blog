import Container from 'components/Container'
import Postbody from 'components/Postbody'
import PostHeader from 'components/PostHeader'
import TwoColumn from 'components/TwoColumn/TwoColumn'
import TwoColumnMain from 'components/TwoColumn/TwoColumnMain'
import TwoColumnSide from 'components/TwoColumn/TwoColumnSide'
import { getPostBySlug } from 'lib/api'
import Image from 'next/image'
import React from 'react'
import ConvertBody from 'components/ConvertBody'
import PostCategories from 'components/PostCategories'
import { extractText } from 'lib/extractText'
import Meta from 'components/Meta'

const Schedule = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
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
      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = 'schedule'
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description: description,
    },
  }
}

export default Schedule
