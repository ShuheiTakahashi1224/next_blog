import Container from 'components/Container'
import PostHeader from 'components/PostHeader'
import { getPostBySlug } from 'lib/api'
import React from 'react'

const Schedule = ({ title, publish, content, eyecatch, categories }) => {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle={'Blog Article'} publish={publish} />
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
