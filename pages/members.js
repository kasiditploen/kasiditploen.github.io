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