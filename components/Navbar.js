export default function Navbar({ title = "", transparent }) {
  let className = transparent ? "alt" : "";
  <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
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
          <li><a href="/news">My Bio</a></li>
          <li><a href="/cs">Senior Project I</a></li>
          <li><a href="/it">Senior Project II</a></li>
          <li><a href="/members">Projects</a></li>
          <li><a href="/curriculum">Competition</a></li>
          
        </ul>
      </nav>
    </>
  )
}