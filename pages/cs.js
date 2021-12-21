import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Curriculum() {
  return (
    <div>
      <Head>
        <title>Computer Science</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is the Computer Science page of VMS Website. The new and fresh VMS website from Space-Dust team using Nextjs, a JavaScript framework bringing the best performance and security in both world. Next.js is widely used by the biggest and most popular companies all over the world like Netflix, Uber, Starbucks, or Twitch. It’s also considered as one of the fastest-growing React frameworks, perfect to work with static sites – which was the hottest topic in the web development world lately. It doesn’t matter if you are planning to build a huge and demanding app to serve millions of users, nor if you are a growing web shop on Shopify. In both cases, you can use the advantages of modern web technology to make your business more efficient online."></meta>
      </Head>

      <Navbar title={'Computer Science'}/>
      <section id="main" className="wrapper">
        <div className="container">

          <header className="major special">
            <h2>VMS:Computer Science</h2>
            <p>Bachelor in Computer Science</p>
          </header>

          <a href="#" className="image fit"><img src="/news/sample/pic11.jpg" alt="" /></a>
          <p>
            At the Department of Computer Science, Vincent Mary School of Science and Technology, we believe in the science that creates positive impacts to the world. We believe in nourishing creative minds while ensuring the solid foundation of the knowledge is never compromised. We believe in the Computer Science that maintains its core values as it modernizes itself through time. Our study programs are designed based on such beliefs. With qualified experts in the field, both academic and industrial, our curriculum, courses and facilities are designed to foster creativity and innovativeness as students gain the core knowledge in theories and practices. And all these within a truly international environment. So if you are one of those who genuinely believe in building your expertise into something that matters, learn more about our community and how we can drive towards it together.
          </p>
        </div>
      </section>

      <section id="concentration" className="wrapper style1">
        <header className="major special">
          <h2>Specialized Tracks</h2>
          <p>
            Software Engineering | Informatics and Data Science
            | Network Technology and Infrastructure
            | Enterprise Systems

            </p>
        </header>

        <div className="inner">
          <article className="feature left">
            <span className="image">
              <img src="images/3students-cover.png" alt="CS" /></span>
            <div className="content">
              <h2>SOFTWARE ENGINEERING</h2>
              <p>
                A track for software engineers, from software developers to software process management, whose aim is to develop the skills to further their career path in the software development industry. Candidates following this track focus on every aspects of software engineering, including software process and management, software development, and application platforms and architectures.
                </p>
            </div>
          </article>

          <article className="feature right">
            <span className="image"><img src="images/pic02.jpg" alt="IT" /></span>
            <div className="content">
              <h2>Information Technology</h2>
              <p>
                Walk hand-in-hand with businesses. Blended the core technology with real-world experience. Graduates are key to the success Digital Transformation.
              </p>
              <ul className="actions">
                <li>
                  <a href="it" className="button alt">More</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}