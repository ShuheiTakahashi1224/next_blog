import Container from 'components/Container'
import Meta from 'components/Meta'
import PostHeader from 'components/PostHeader'
import Posts from 'components/Posts'
import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import { eyecatchLocal } from 'lib/constans'
import { getPlaiceholder } from 'plaiceholder'

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug
  const allCat = await getAllCategories()
  const category = allCat.find(({ slug }) => slug === catSlug)
  const posts = await getAllPostsByCategory(category.id)
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      name: category.name,
      posts: posts,
    },
  }
}
