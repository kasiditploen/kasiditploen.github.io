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
import 'animate.css';
//import BootstrapTable from 'react-bootstrap-table-next';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



//const Carousel = require('react-responsive-carousel').Carousel;
//import 'react-responsive-carousel/lib/styles/carousel.css'

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
        {/* <link href="custombox.min.css" rel="stylesheet"/>
      <script src="custombox.min.js"></script>
      <script src="custombox.legacy.min.js"></script> */}

        <title>Home Page: VMS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The new and fresh VMS website from Space-Dust team using Next.js, a JavaScript framework bringing the best performance and security in both world. Next.js is widely used by the biggest and most popular companies all over the world like Netflix, Uber, Starbucks, or Twitch. It’s also considered as one of the fastest-growing React frameworks, perfect to work with static sites – which was the hottest topic in the web development world lately. It doesn’t matter if you are planning to build a huge and demanding app to serve millions of users, nor if you are a growing web shop on Shopify. In both cases, you can use the advantages of modern web technology to make your business more efficient online. Uplift your page speed, SEO, and User Experience, and remember that technologies such as Next.js are making the web a better, cleaner, and more user-centric place. And that will always be favorable, not only by Google but, most importantly, by users."
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
        <div className="inner">
          {/* <i className="icon fa-diamond"></i> */}
          {/*<img src="/images/vms-logo-test.png" alt="VMS" width="140" height="140" className="icon" />*/}
          {/*<h2>Vincent Mary</h2>
        <h2>School of Science and Technology</h2>*/}
          <style jsx>{`
        .inner {
          margin: 50px;
        }
        p {
          color: white;
        }
      `}</style>
          <style jsx global>{`
        p {
          font-size: 30px;
        }
        h1 {
          font-weight: 7000;
        }
      `}</style>
          <h4 className="animate__animated animate__fadeInLeft">We offer a total six study programs </h4>
          <p>
            
          </p>
          <h4 className="animate__animated animate__fadeInLeft">which cover Bachelor, Master , and Doctoral degrees in both</h4>
          <p>
            
          </p>
          <h4 className="animate__animated animate__fadeInLeft">Computer Science and Information Technology.</h4>
          <p>
            
          </p>

          <h5 className="animate__animated animate__fadeInLeft">Join Us</h5>
          <p>
            
          </p>



        </div>


        {/*<h3>The Vincent Mary School of Science and Technology is one of the pioneers to develop information technology.</h3>
        <h3>This tradition helps in creating graduates who are experts in the science and technology field, as well as fluent English speakers.</h3>*/}
        <ul className="actions">
          <p>
            {/*<li><h4><button onClick={() => setIsOpen(true)} className="button big alt">Why VMS?</button></h4></li>*/}
          </p>

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


      <section id="one" className="wrapper style3">

        <div className="inner">

          <div className="content">

            <style jsx>{`
        .inner {
          margin: 50px;
        }
        p {
          color: white;
        }
      `}</style>
            <style jsx global>{`
        p {
          font-size: 30px;
        }
      `}</style>
          </div>
          <div className="content">
            <style jsx>{`
        .content {
          margin: 50px;
        }
        p {
          color: white;
        }
      `}</style>
            <style jsx global>{`
        p {
          font-size: 30px;
        }
      `}</style>

<p>
{/*<h1><button onClick={() => setIsOpen(true)} className="button big special">Why VMS?</button></h1>*/}
</p>        
          </div>



          <article className="feature right">


            <style jsx>{`
        .inner {
          margin: 50px;
        }
        p {
          color: white;
        }
      `}</style>
            <style jsx global>{`
        p {
          font-size: 20px;
        }
        
      `}</style>
            <span className="image">
              <img src="images/3students-cover.png" alt="CS" /></span>
            <div className="content">

              <h2><a href="/cs">Computer Science</a></h2>

                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                This program focuses on computer system concerned with information representation, storage and data processing. Our curriculum, courses and facilities are designed to foster creativity and innovativeness as students gain the core knowledge in theories and practices.
              <p>
                ...
              </p>
              <ul className="actions">
              </ul>
            </div>
          </article>

          <article className="feature right">
            <span className="image"><img src="images/pic02.jpg" alt="IT" /></span>
            <div className="content">
              <h2><a href="/it">Information Technology</a></h2>
              <p>
                <style jsx>{`
        .inner {
          margin: 50px;
        }
        p {
          color: white;
        }
      `}</style>
                <style jsx global>{`
        p {
          font-size: 20px;
        }
      `}</style>
                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                Encompasses all forms of technology used to create, store, exchange, and use information in its various forms (business data, voice, conversations, still images, motion pictures, multimedia presentations and other forms including those not yet conceived of). It emphasizes applying technology in analysis, design, development, operation, linkage, control and management of information systems.
              </p>
              <ul className="actions">

              </ul>
            </div>
          </article>
        </div>
      </section>



      {/* Highlights */}
      <section id="two" className="wrapper style3">
        <a id="news" />
        <div className="inner">
          <header className="major narrow">
            <h2>Highlights</h2>
            <p></p>
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
                <img src={full_picture} alt={message} className="image" />
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
          WHY VMS IS THE BEST OPTION?:
        </h2>
        <article className="feature right">
          <span className="image">
            <iframe width="550" height="350"
              src="https://www.youtube.com/embed/37JaC2aGRWA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </span>

          <div className="content">
            <h2>Advantages OF VMS:</h2>

            <ul>
              <li>Meet With Most Influential People In Tech Industry</li>
              <li>Active Learning</li>
              <li>Best IT Learning System in Thailand</li>
              <li>Entrepreneurships</li>
            </ul>



            <ul className="actions">
              <li>
                <a href="more" className="button alt">More</a>
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