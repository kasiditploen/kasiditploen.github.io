var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});



// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'posts')

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...(matterResult.data as { date: string; title: string })
//     }
//   })
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory)
//   return fileNames.map(fileName => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, '')
//       }
//     }
//   })
// }

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...(matterResult.data as { date: string; title: string })
//   }
// }


// export async function fetchAPI(query, { variables  } = {}) {
export async function fetchAPI(query, variables = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };
  console.log("process.env.WP_API_URL", process.env.WP_API_URL)
  const API_URL = process.env.WP_API_URL

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

export async function getNewsData() {

  const data = await fetchAPI(`
    {
      categories(where: {name: "News"}) {
        nodes {
          posts {
            nodes {
              id
              link
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }            
            }
          }
        }
      }
    }
    `)

  let selectedData = data.categories.nodes[0].posts.nodes
  // console.log('data', selectedData)
  return selectedData
}
export async function getFacebookPosts() {
  // https://developers.facebook.com/docs/graph-api/reference/page/
  // https://developers.facebook.com/tools/explorer/2114990868632429/?method=GET&path=98549204694%3Ffields%3Dposts.limit(10)%7Bmessage%2Cfull_picture%7D&version=v10.0
  /*
  If Facebook Access Token is expired,
  go here, generate a new one, and save to .env
  https://developers.facebook.com/tools/explorer/
  */
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
  const data = await fetch(`https://graph.facebook.com/v10.0/98549204694?fields=posts.limit(10)%7Bmessage%2Cfull_picture%2Cpermalink_url%7D&access_token=${accessToken}`)
    .then(res => res.json())
  console.log('getFacebookPosts', data)
  if (data.error) {
    console.error('getFacebookPosts error', data)
    /*
    // NOT A GOOD IDEA, to send email to the responsible person on every page request.
    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'info@scitech.au.edu, mchayapol@gmail.com',
      subject: 'VMS-WEB: incident',
      text: data.error.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    */

    return []
  }
  return data?.posts?.data
}

export async function getAlumniData() {
  const data = await fetchAPI(`
    {
      categories(where: {name: "Alumni"}) {
        nodes {
          posts {
            nodes {
              id
              link
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }            
            }
          }
        }
      }
    }
    `)

  let selectedData = data.categories.nodes[0].posts.nodes
  // console.log('data', selectedData)
  return selectedData
}