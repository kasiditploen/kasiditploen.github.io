import Head from 'next/head'
import Navbar from '../components/Navbar'
import CourseTable from '../components/CourseTable'
import { GetStaticProps } from 'next'

const csv = require('neat-csv');
import fs from 'fs';

export default function Home({ courseData }) {
  return (
    <div>
      <Head>
        <title>Computer Science</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar title={'Computer Science'} />

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
              <h2>Courses</h2>
              <p>
                <CourseTable data={courseData} />
              </p>
            </div>
          </article>

        </div>
      </section>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const newsData = await getNewsData()
  // const alumniData = await getAlumniData()
  // const facebookPosts = await getFacebookPosts()
  // console.log(newsData)
  // console.log(alumniData)
  // console.log(facebookPosts)
  const raw = fs.readFileSync('./data/vms-courses.csv', 'utf8');
  const readCSV = async () => {
    const result = await csv(raw, ['code', 'name', 'nameTH', 'category', 'categoryTH', 'type', 'typeTH', 'credits', 'description', 'descriptionTH', 'prerequisite', 'remake', 'remarkTH']);
    console.log('result', result);
    return result
  }

  let courseData = await readCSV()

  return {
    props: {
      courseData
    }
  }
}