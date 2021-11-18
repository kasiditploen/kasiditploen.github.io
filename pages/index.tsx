// Assume that this FB chat works, since it cannot be rendered on localhost.
// Whitelist the host here:
// https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/


import { Container } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GetStaticProps, GetServerSideProps } from 'next'
import { getAlumniData, getNewsData, getFacebookPosts } from '../lib/posts-scitech'

const Carousel = require('react-responsive-carousel').Carousel;
import 'react-responsive-carousel/lib/styles/carousel.css'

const siteConfig = require('./config')

// import vmsLogo from '../styles/images/vms-logo.png'
// import styles from '../styles/Home.module.css'
// import styles from '../styles/css/main.css'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // transition: 'opacity 1s linear'
  }
};


export default function Home({
  newsData,
  alumniData,
  facebookPosts
}: {
  newsData: {
    id: string
    title: string
    link: string
    featuredImage: Object
  }[],
  alumniData: {
    id: string
    title: string
    link: string
    featuredImage: Object
  }[],
  facebookPosts: {
    id: string
    message: string
    full_picture: string
    permalink_url: string
  }[]
}) {
  const [enableContactForm, setEnableContactForm] = useState(siteConfig.enableContactForm)
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>VMS:</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteConfig.siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta id="og:title" content={siteConfig.siteTitle} />
        <meta id="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar transparent={true} />

      <section id="banner">
        {/* <i className="icon fa-diamond"></i> */}
        <img src="/images/vms-logo-white.png" alt="VMS" width="140" height="140" className="icon" />
        <h2>Vincent Mary School of Science and Technology</h2>
        <p>Build Tech Savvy</p>
        <ul className="actions">
          <li><button onClick={() => setIsOpen(true)} className="button big special">WHY VMS</button></li>
          <li><a href="#news" className="button big alternate">Gamification</a></li>
          <li><a href="#news" className="button big alternate">MarTech</a></li>
        </ul>
      </section>
{/* 
      <Carousel showArrows={true}
      // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
      >
        {facebookPosts?.filter(p => p.message && p.full_picture).map(({ id, message, permalink_url, full_picture }) => (
          <div key={id}>
            <img src={full_picture} alt={message} style={{maxHeight:400, maxWidth:400}}/>
            <p className="legend">{message}</p>
          </div>
        ))}

      </Carousel> */}

      {/* One */}
      <section id="one" className="wrapper style1">
        <div className="inner">
          <article className="feature">
            <div className="content">
              <h2>Gamification</h2>
              <p>
                <h3>Business can be fun</h3>
                Quickly evolved to capture the rapid change of technology. The key principle is the strong foundation. Trained by people in the industry. Graduates are globally competitive and ready to thrive in their chosen career path.
                </p>
              <ul className="actions">
                <li>
                  <a href="/cs" className="button alt">More</a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h2>Martech</h2>
              <p>
                <h3>Marketing Meets Technology</h3>
                Quickly evolved to capture the rapid change of technology. The key principle is the strong foundation. Trained by people in the industry. Graduates are globally competitive and ready to thrive in their chosen career path.
                </p>
              <ul className="actions">
                <li>
                  <a href="/cs" className="button alt">More</a>
                </li>
              </ul>
            </div>
          </article>

          <article className="feature left">
            <span className="image">
              <img src="images/3students-cover.png" alt="CS" /></span>
            <div className="content">
              <h2>Computer Science</h2>
              <p>
                <h3>Gamification</h3>
                Quickly evolved to capture the rapid change of technology. The key principle is the strong foundation. Trained by people in the industry. Graduates are globally competitive and ready to thrive in their chosen career path.
                </p>
              <ul className="actions">
                <li>
                  <a href="/cs" className="button alt">More</a>
                </li>
              </ul>
            </div>
          </article>

          <article className="feature right">
            <span className="image"><img src="images/pic02.jpg" alt="IT" /></span>
            <div className="content">
              <h2>Information Technology</h2>
              <p>
                <h3>Mar Tech</h3>
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

      {/* Highlights */}
      <section id="two" className="wrapper special">
        <a id="news" />
        <div className="inner">
          <header className="major narrow">
            <h2>Highlights</h2>
            <p>--</p>
          </header>
          <div className="image-grid">
            {newsData?.map(({ id, link, title, featuredImage }) => (
              <Link href={link} key={id}>
                {/* <img src={featuredImage.node.sourceUrl} alt={title} className="image" /> */}
                <img src={featuredImage['node']['sourceUrl']} alt={title} className="image" />
              </Link>
            ))}
          </div>


          <ul className="actions">
            <li><a href="/news" className="button big alt">View All</a></li>
          </ul>
        </div>
      </section>

      <section id="socialnews" className="wrapper special">
        <a id="socialnews" />
        <div className="inner">
          <header className="major narrow">
            <h2>Social News</h2>
            <p>Facebook: AUVMS</p>
          </header>
          <div className="image-grid">
            {facebookPosts?.filter(p => p.message && p.full_picture).map(({ id, message, permalink_url, full_picture }) => (
              <Link href={permalink_url} key={id}>
                <img src={full_picture} alt={message} className="image"/>
              </Link>
            ))}
          </div>


          <ul className="actions">
            <li><a href="/news" className="button big alt">View All</a></li>
          </ul>
        </div>
      </section>

      {/* Three */}
      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major narrow	">
            <h2>Alumni</h2>
            <p>Some notable alumni </p>
          </header>
          <div className="image-grid">

            {alumniData?.map(({ id, link, title, featuredImage }) => (
              <Link href={link} key={id}>
                <img src={featuredImage['node']['sourceUrl']} alt={title} className="image" />
              </Link>
            ))}
          </div>

          <ul className="actions">
            <li><a href="#" className="button big alt">View All</a></li>
          </ul>
        </div>
      </section>

      {/* Four : Contact Form */}
      {enableContactForm &&
        <section id="four" className="wrapper style2 special">
          <div className="inner">
            <header className="major narrow">
              <h2>Get in touch</h2>
              {/* <p>---</p> */}
            </header>
            <form action="#" method="POST">
              <div className="container 75%">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input name="name" placeholder="Name" type="text" />
                  </div>
                  <div className="6u$ 12u$(xsmall)">
                    <input name="email" placeholder="Email" type="email" />
                  </div>
                  <div className="12u$">
                    <textarea id="message" placeholder="Message" rows={4}></textarea>
                  </div>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" className="special" value="Submit" /></li>
                <li><input type="reset" className="alt" value="Reset" /></li>
              </ul>
            </form>
          </div>
        </section>
      }


      {/* Load Facebook SDK for JavaScript */}
      {/* Your Chat Plugin code */}
      {/* <div id="fb-root"></div>
      <script src="js/fb.js"></script>
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="98549204694">
      </div> */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Why VMS"
      >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          AT VMS:
        </h2>
        <article className="feature left">
          <span className="image">
            <iframe width="440" height="250"
              src="https://www.youtube.com/embed/37JaC2aGRWA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </span>

          <div className="content">
            <h2>Unlike other science study:</h2>

            <ul>
              <li>Real Reople in Tech Industry</li>
              <li>Active Learning</li>
              <li>Work Ready</li>
              <li>Entrepreneurships</li>
            </ul>



            <ul className="actions">
              <li>
                <a href="more" className="button big special">More</a>
              </li>
            </ul>
          </div>
        </article>

      </Modal>
    </>
  )
}

// export const getServerSideProps: GetStaticProps = async () => {
  export const getServerSideProps: GetServerSideProps = async () => {  
  const newsData = await getNewsData()
  const alumniData = await getAlumniData()
  const facebookPosts = await getFacebookPosts()
  // console.log(newsData)
  // console.log(alumniData)
  console.log(facebookPosts)

  return {
    props: {
      newsData,
      alumniData,
      facebookPosts
    }
  }
}