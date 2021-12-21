import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Head from 'next/head'
import { getAlumniData, getNewsData } from '../lib/posts-scitech'

export default function News({ API_URL }) {
  const [posts, setPosts] = useState([])

  // useEffect(async () => {
  //   console.log('API_URL', API_URL)

  //   const data = await fetchAPI(`
  //   {
  //     categories(where: {name: "News"}) {
  //       nodes {
  //         posts {
  //           nodes {
  //             id
  //             link
  //             title
  //             featuredImage {
  //               node {
  //                 sourceUrl
  //               }
  //             }            
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `)



  //   console.log('data', data)
  //   setPosts(data.categories.nodes[0].posts.nodes)
  // }, [])

  async function fetchAPI(query, { variables } = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = { 'Content-Type': 'application/json' };

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables })
    });

    // error handling work
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      console.log('error details', query, variables);
      throw new Error('Failed to fetch API');
    }
    return json.data;
  }

  return (
    <>
      <Head>
        <title>VMS:News</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is the News section of VMS Website. The new and fresh VMS website from Space-Dust team using Nextjs, a JavaScript framework bringing the best performance and security in both world. Next.js is widely used by the biggest and most popular companies all over the world like Netflix, Uber, Starbucks, or Twitch."></meta>
      </Head>

      <Navbar title={'News'} transparent={true} />

      {posts?.map((v, i) => {
        return (
          <section key={i} className="wrapper style2">
            <header className="major special">
              <h2>News</h2>
            </header>

            <div className="inner">
              <article className="feature left">
                <span className="image">
                  <img src={v.featuredImage.node.sourceUrl} alt="" height="200px" />
                </span>
                <div className="content">
                  <p>
                    <a href={v.link}>
                    {v.title}
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </section>
        )
      }
      )}

    </>
  )
}

export async function getStaticProps() {
  const newsData = await getNewsData()
  const alumniData = await getAlumniData()
  // console.log(newsData)
  // console.log(alumniData)
  return {
    props: {
      newsData,
      alumniData
    }
  }
}