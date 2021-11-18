export default function Navbar({ title = "", transparent }) {
  let className = transparent ? "alt" : "";
  return (
    <>
      <header id="header" className={className}>
        <h1><a href="/">VMS:{title}</a></h1>
        <a href="#nav">Menu</a>
      </header>
      <nav id="nav">
        <ul className="links">
          <li><a href="/">VMS:</a></li>
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