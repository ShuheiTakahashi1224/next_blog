import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from 'styles/Posts.module.scss'

const Posts = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => {
        console.log(eyecatch.url)
        return (
          <article className={styles.post} key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>
                <figure>
                  <Image
                    src={eyecatch.url}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    width={eyecatch.width}
                    height={eyecatch.height}
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}
                    sizes="(min-width: 1152px) 576px, 50vw"
                  />
                </figure>
                <h2>{title}</h2>
              </a>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default Posts
