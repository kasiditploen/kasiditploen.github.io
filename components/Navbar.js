export default function Navbar({ title = "", transparent }) {
  let className = transparent ? "alt" : "";
  return (
    <>
      <header id="header" className={className}>
        <h1><a href="/"><img src="/images/vms-logo-test.png" alt="VMS" width="30" height="30" className="icon" />VMS{title}</a></h1>
        <a href="#nav"></a>
        <p><h6><a href="/">Vincent Mary School Of Science And Technology{title}</a></h6></p>
      </header>
      
      <nav id="nav">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/cs">Computer Science</a></li>
          <li><a href="/it">Information Technology</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/members">Members</a></li>
          <li><a href="/curriculum">Curriculum</a></li>
        </ul>
      </nav>
    </>
  )
}