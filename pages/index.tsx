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
      
<link rel="alternate preload canonical" hrefLang="en" href="https://kasiditploenportfolio.vercel.app" />
        <title>KP: Portfolio</title>
        <link rel="icon preload" href="/favicon.ico" />
        <meta
          name="description"
          content="This page represents a portfolio of Kasidit Ploenthamakhun, a bachelor degree of Science and Technology in Assumption University."
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

      <section id="banner" style={{marginTop: -50}}>
      <div>
        <h1 style={{textAlign: "center"}} className="">My Portfolio</h1>
        

        </div>
        <div className="inner">
          {/* <i className="icon fa-diamond"></i> */}
          {/*<img src="/images/vms-logo-test.png" alt="VMS" width="140" height="140" className="icon" />*/}
          <h5  style={{textAlign: "center"}}><a href="https://github.com/kasiditploen"><button  className="button smallx border special " >DOWNLOAD RESUME</button></a></h5>
          
          
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


      <section id="one" className="wrapper style3 ">
      

      
        
      
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
          
          <h2 className="text-lg" style={{textAlign: "center"}}>Senior Projects</h2>
          <article className="feature left boxred">



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
            <Image src={'/images/website.jpg'} alt='Home Page' width={700} height={400}  />
              
              </span>
            <div className="content">

              <h4><a href="/cs">Senior Project I</a></h4>
              <h5><a href="/cs">VMS Website 2022</a></h5>
                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                A traditional VMS website used to be bulky, slow, and hard to maintain. My team and I were assigned to create a new VMS website for 2022 by using Next.js and deploy it on Vercel.
              <p>
                ...
              </p>
              <ul className="actions">
              
          
          <li><h5 style={{textAlign: "center"}}><button onClick={() => setIsOpen(true)} className="button" >More Info.</button></h5></li>
          <li><h5 style={{textAlign: "center"}}><a href="https://vmsnextjs-github-io.vercel.app/"><button  className="button" >WEBSITE</button></a></h5></li>
          
        

      </ul>
              
            </div>
            
          </article>
          
          
          <article className="feature right boxpurple">


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
            <Image src={'/images/sii.jpg'} alt='Home Page' width={700} height={400}  />
              
              </span>
            <div className="content">

              <h4><a href="/cs">Senior Project II</a></h4>
              <h5><a href="/cs">Fitness Management System</a></h5>


                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                My final project in my bachelor degree is making a management system for fitness firms. I was assigned to research on the real fitness firms and evaulate
                the data attributes and system to implement in my proposed system.
              <p>
                ...
              </p>
              <ul className="actions">
              
          
            
              <li><h5 style={{textAlign: "center"}}><button onClick={() => setIsOpen(true)} className="button" >Go</button></h5></li>
          
        

      </ul>
              
            </div>
            
          </article>
          
          
              
          <h2 className="text-lg" style={{textAlign: "center"}}>Skills</h2>
          
          <section id="two" className="wrapperx style1 boxwhite ">
          <div className="row ">
          <span className="image " >
          <Image src={'/images/javascript.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">Javascript</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions ">







</ul>

</div>
</span>        
<span className="image" >
<Image src={'/images/htmlx.webp'} alt='Home Page' width={200} height={200}  />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">HTML</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       

<span className="image" >
<Image src={'/images/css.webp'} alt='Home Page' width={200} height={200}  />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">CSS</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>  

<span className="image" >
          <Image src={'/images/boot.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">Bootstrap</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span> 


<span className="image" >
<Image src={'/images/React.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">React</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       

<span className="image" >
<Image src={'/images/nextjsx.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">NextJS</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>  
<span className="image" >
<Image src={'/images/phpx.webp'} alt='Home Page' width={200} height={200} />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">PHP</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       
<span className="image" >
<Image src={'/images/mysql.webp'} alt='Home Page' width={200} height={200}  />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">MySQL</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       

<span className="image" >
<Image src={'/images/seo.webp'} alt='Home Page' width={200} height={200}  />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">SEO</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Advanced</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>  

<span className="image" >
<Image src={'/images/englishx.webp'} alt='Home Page' width={200} height={200}  />
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">English</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Advanced</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span> 

<span className="image" >
          <Image src={'/images/unity.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">Unity</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Advanced</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>        

<span className="image" >
          <Image src={'/images/csharp.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">C#</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span> 

<span className="image" >
          <Image src={'/images/Git.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">GIT</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>  

<span className="image" >
          <Image src={'/images/ps.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">Photoshop</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">intermediate</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       

<span className="image" >
          <Image src={'/images/xd.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">Adobe XD</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Beginner</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span>       

<span className="image" >
          <Image src={'/images/su.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">SketchUp</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Beginner</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span> 

<span className="image" >
          <Image src={'/images/arduino.webp'} alt='Home Page' width={200} height={200}  />
              
              <div className="content">
<h5 style={{textAlign: "center"}}><a href="/cs">Arduino</a></h5>
<h6 style={{textAlign: "center"}}><a href="/cs">Beginner</a></h6>



  {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
  
<ul className="actions">







</ul>

</div>
</span> 


              
              
              
              </div>
              </section>
              <br></br>
              <br></br>
              <br></br>

              <h2 style={{textAlign: "left"}}>Created By:</h2>
          <article className="feature right boxorange">


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
            <Image src={'/images/kasidit_ploen.webp'} alt='Home Page' width={600} height={600} /></span>
            <div className="content ">

              <h4><a href="/cs">Kasidit Ploenthamakhun</a></h4>

                {/*<h3>Join us in Suvarnabhumi Campus</h3>*/}
                Hi everyone, my name is Kasidit Ploenthamakhun. I'm interested in web development, therefore, I seek opportunity to create different websites to show my potential.
              <p>
                ...
              </p>
              <ul className="actions">
              
          
            
          <li><h5 style={{textAlign: "center"}}><a href="https://github.com/kasiditploen"><button className="button small" >GITHUB</button></a></h5></li>
          
        

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

        <h4 ref={_subtitle => (subtitle = _subtitle)}>
          Background:
        </h4>
        <article className="feature right">
          <span className="image">
            <iframe width="650" height="350"
              src="https://www.youtube.com/embed/37JaC2aGRWA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </span>

          <div className="content">
            <h5>Advantages OF VMS:</h5>

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


