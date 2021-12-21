import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Head from 'next/head'


const members = require('./members.json')
export default function News({ API_URL }) {

  return (
    <>
      <Head>
        <title>VMS Members</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is the member page of VMS Website."></meta>
      </Head>
      <Navbar title={'Members'} transparent={true} />

      <section id="main" className="wrapper style2">
        <header className="major special">
          <h2>Faculty Members</h2>
        </header>



        <div className="card-container">
          {members.map((v, i) => {
            return (
              <div key={i} 
              className="card" 
              style={{ backgroundImage: `url("${v.photoUrl}")` }} >
                <div className="card-content">
                  <div className="card-title">{v.name}</div>
                  <p className="copy">{v.blurp}</p>
                  <a href={v.portalUrl}><button className="card-btn">View Portal</button></a>
                  
                  <div className="button-wrap"><button data-dialog="somedialog" class="trigger">Detail</button></div>
                  <div id="somedialog" class="dialog">
					<div class="dialog__overlay"></div>
					<div class="dialog__content">
						<h2><strong>Howdy</strong>, I'm a dialog box</h2><div><button class="action" data-dialog-close="">Close</button></div>
					</div>
				</div>
                </div>
              </div>
              
            )
          })}

        </div>
      </section>

    </>
  )
}



export async function getStaticProps() {
  console.log("process.env.WP_API_URL", process.env.WP_API_URL)
  return {
    props: {
      API_URL: process.env.WP_API_URL
    }
  }
}

<div id="example-table"></div>

