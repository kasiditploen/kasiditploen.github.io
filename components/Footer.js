export default function Footer() {
  return (
    <>
      <footer id="footer" >
        <div className="inner">
          <ul className="icons">
            {/*<li><a href="https://www.facebook.com/auvms" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a></li>*/}
            <li><a href="https://www.youtube.com/channel/UC2A3IcCrZwFHwi2L3wxDCfg" aria-label="Youtube" className="icon fa-youtube">
              <span className="label">Youtube</span>
            </a></li>

            <li><a href="https://github.com/kasiditploen" aria-label="Github" className="icon fa-github">
              <span className="label">Youtube</span>
            </a></li>

            <li><a href="https://www.linkedin.com/in/kasidit-ploenthamakhun-2a699b254" aria-label="LinkedIn" className="icon fa-linkedin">
              <span className="label">Youtube</span>
            </a></li>

            <li><a href="https://medium.com/@kasiditploen" aria-label="Medium" className="icon fa-medium">
              <span className="label">Youtube</span>
            </a></li>

            {/* <li><a href="#" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a></li> */}
            {/* <li><a href="#" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a></li> */}
            {/* <li><a href="#" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a></li> */}
          </ul>
          <ul className="copyright">
            <li>&copy; Kasidit Ploenthamakhun</li>
            {/* <li>Images: <a href="http://unsplash.com">Unsplash</a>.</li>
            <li>Design: <a href="http://templated.co">TEMPLATED</a>.</li> */}
          </ul>
        </div>
      </footer >
      <script src="/js/jquery.min.js"></script>
      <script src="js/skel.min.js"></script>
      <script src="js/util.js"></script>
      <script src="js/main.js"></script>

    </>
  )
}