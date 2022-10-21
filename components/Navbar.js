export default function Navbar({ title = "", transparent }) {
  let className = transparent ? "alt" : "";
  const logoStyle = {
    verticalAlign: 'middle',
		width: '56px'
  }
  return (
    <>
      <header id="header" className={className}>
        {/*<h1><a href="/"><img src="/images/vms-logo-white.png" alt="VMS" className="icon" style={logoStyle}/>Kasidit P.{title}</a></h1>*/}
        <h1 style={{textAlign: "left"}}><a>Kasidit{title}</a></h1>
        <a href="#nav"></a>
        {/* <p><h6><a href="/">Vincent Mary School Of Science And Technology</a></h6></p> */}
      </header>
      
      <nav id="nav">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/cs">Computer Science</a></li>
          <li><a href="/it">Information Technology</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/members">Members</a></li>
          <li><a href="/curriculum">Curriculum</a></li>
          <li><a href="/news">Programs</a></li>
          <li><a href="/news">Project</a></li>
          <li><a href="/news">Laboratories</a></li>
          <li><a href="/news">About us</a></li>
        </ul>
      </nav>
    </>
  )
}