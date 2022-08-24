import React from 'react'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'
import { getAllPosts } from 'lib/api'
import Posts from 'components/Posts'
import { eyecatchLocal } from 'lib/constans'
import { getPlaiceholder } from 'plaiceholder'

const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="Recent Posts" />
      <Hero title="Blog" subTitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}

export default Blog
