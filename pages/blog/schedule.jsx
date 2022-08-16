import Contact from 'components/Contact'
import Container from 'components/Container'
import Postbody from 'components/Postbody'
import PostHeader from 'components/PostHeader'
import TwoColumn from 'components/TwoColumn/TwoColumn'
import TwoColumnMain from 'components/TwoColumn/TwoColumnMain'
import TwoColumnSide from 'components/TwoColumn/TwoColumnSide'
import { getPostBySlug } from 'lib/api'
import Image from 'next/image'
import React from 'react'
import parse from 'html-react-parser'
import ConvertBody from 'components/ConvertBody'
import PostCategories from 'components/PostCategories'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
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
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}

export default Schedule
