import React from 'react'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Meta from 'components/Meta'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="Recent Posts" />
      <Hero title="Blog" subTitle="Recent Posts" />
    </Container>
  )
}

export default Blog
