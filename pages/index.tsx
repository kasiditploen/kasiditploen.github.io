// Assume that this FB chat works, since it cannot be rendered on localhost.
// Whitelist the host here:
// https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/



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
    subtitle.style.color = '#000';
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

        <title>Home Page: Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="jrtfjrt6ujt6rjytu6tyuty6uty6ujtyikjyuikyugiokytg7kfgytoklfykfty"
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
          <h2>Welcome to My Portfolio</h2>
        <h2>"School of Science and Technology."</h2>
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
          {/*<h5 style={{textAlign: "center"}}>My Portfolio </h5>*/}
          <p>
            
            
          </p>

          



        </div>


        {/*<h3>The Vincent Mary School of Science and Technology is one of the pioneers to develop information technology.</h3>
        <h3>This tradition helps in creating graduates who are experts in the science and technology field, as well as fluent English speakers.</h3>*/}
        
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
          <h5 className="text-lg" style={{textAlign: "left"}}>Senior Projects</h5>
          <article className="feature left">


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
            <Image src={'/images/website.jpg'} alt='Home Page' width={700} height={400} />
              
              </span>
            <div className="content">

              <h2><a href="/cs">Senior Project I</a></h2>
              <h1><a href="/cs">VMS Website 2022</a></h1>
                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                Hi everyone, my name is Kasidit Ploenthamakhun. I'm interested in web development, therefore, I seek opportunity to create different websites to show my potential.
              <p>
                ...
              </p>
              <ul className="actions">
              
          
            
          <li><a href="#"><h2 style={{textAlign: "center"}}><button onClick={() => setIsOpen(true)} className="button  small" >Go</button></h2></a></li>
          
        

      </ul>
              
            </div>
            
          </article>
          
          
          <article className="feature left">


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
            <Image src={'/images/sii.jpg'} alt='Home Page' width={700} height={400} />
              
              </span>
            <div className="content">

              <h2><a href="/cs">Senior Project II</a></h2>
              <h1><a href="/cs">Fitness Management System</a></h1>


                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                My final project in my bachelor degree is the management system for fitness firms. I was assigned to research on the real fitness firms and evaulate
                the data attributes and system to implement in my proposed system.
              <p>
                ...
              </p>
              <ul className="actions">
              
          
            
          <li><h2 style={{textAlign: "center"}}><button onClick={() => setIsOpen(true)} className="button  small" >Go</button></h2></li>
          
        

      </ul>
              
            </div>
            
          </article>
          
          
              
          <h5><a href="/cs">Skills</a></h5>
          <div className="row">
          <span className="image" >
          <Image src={'/images/robot1.webp'} alt='Home Page' width={200} height={200} />
              
              <div className="content">
<h2 style={{textAlign: "center"}}><a href="/cs">Javascript</a></h2>
<h1 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h1>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>        
<span className="image" >
<Image src={'/images/robot1.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h2 style={{textAlign: "center"}}><a href="/cs">HTML/CSS</a></h2>
<h1 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h1>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       
<span className="image" >
<Image src={'/images/robot1.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h2 style={{textAlign: "center"}}><a href="/cs">React/Next.js</a></h2>
<h1 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h1>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       
<span className="image" >
<Image src={'/images/robot1.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h2 style={{textAlign: "center"}}><a href="/cs">PHP</a></h2>
<h1 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h1>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       
<span className="image" >
<Image src={'/images/robot1.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h2 style={{textAlign: "center"}}><a href="/cs">MySQL</a></h2>
<h1 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h1>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       
              
              
              
              </div>
              <br></br>
              <br></br>

              <h5><a href="/cs">Bio</a></h5>
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
            <Image src={'/images/kasidit_ploen.jpg'} alt='Home Page' width={600} height={600} /></span>
            <div className="content">

              <h2><a href="/cs">Kasidit Ploenthamakhun</a></h2>

                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                Hi everyone, my name is Kasidit Ploenthamakhun. I'm interested in web development, therefore, I seek opportunity to create different websites to show my potential.
              <p>
                ...
              </p>
              <ul className="actions">
              
          
            
          <li><h2 style={{textAlign: "center"}}><button onClick={() => setIsOpen(true)} className="button  small" >Bio</button></h2></li>
          
        

      </ul>
              
            </div>
          </article>

         

          
        </div>
      </section>



      
      


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
        contentLabel="Bio"
      >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          Background:
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