import React from 'react'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Postbody from 'components/Postbody'
import Contact from 'components/Contact'
import TwoColumn from 'components/TwoColumn/TwoColumn'
import TwoColumnMain from 'components/TwoColumn/TwoColumnMain'
import TwoColumnSide from 'components/TwoColumn/TwoColumnSide'
import Image from 'next/image'
import eyeCatch from 'images/about.jpg'
import Meta from 'components/Meta'

const About = () => {
  return (
    <Container>
      <Meta
        pageTitle="about"
        pageDesc="About development activities"
        pageImage={eyeCatch.src}
        pageImageWidth={eyeCatch.width}
        pageImageHeight={eyeCatch.height}
      />
      <Hero title="About" subTitle="About development activities" />
      <figure>
        <Image
          src={eyeCatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <Postbody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h2>新しいことへのチャレンジ</h2>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </Postbody>
        </TwoColumnMain>
        <TwoColumnSide>
          <Contact />
        </TwoColumnSide>
      </TwoColumn>
    </Container>
  )
}

export default About
