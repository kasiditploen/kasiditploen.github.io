
export default function CourseTable({ data }) {
  data.forEach(v => {
    // v.courseCode = v['courseCode']
    // console.log('v.courseCode',v.courseCode)
    console.log('v.courseCode',v[0])
  })

  const courseList = data.filter(v => v.category.toUpperCase().startsWith('MAJOR'))
    .map((v, i) => {
      console.log(v.code,v.name)
      return <li>
        <b>{v.code} {v.name}</b>
        <p>{v.description}</p>
      </li>
    })

  return (
    <>
      <ul>
        {courseList}
      </ul>
    </>
  )
}

