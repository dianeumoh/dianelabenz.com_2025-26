import ArrowIcon from './ArrowIcon';
export default function Footer() {
  const year = new Date().getFullYear()


  return (
    <footer className="full-bleed-section-gradient">
      <div className="footer-container">
      <div>
        <h4>Thanks for scrolling!</h4>
        <p>Before you go, say <a className="text-link" href="/contact">hello</a> :)</p>
      </div>
      <div className="footer-links-section">
        <div>
          <h5>Explore the site</h5>
          <p><a className="text-link" href="/">Home</a></p>
          <p><a className="text-link" href="/selected-works">Selected works</a></p>
          <p><a className="text-link" href="/about">About</a></p>
          <p><a className="text-link" href="/contact">Contact</a></p>
        </div>
        <div>
          <h5>Get in touch</h5>
          <p><a className="footer-external-link" href="mailto:hello@dianelabenz.com">Email<ArrowIcon /></a></p>
          <p><a className="footer-external-link" href="https://www.linkedin.com/in/dianelabenz/">LinkedIn<ArrowIcon /></a></p>
          <p><a className="footer-external-link" href="/assets/images/DianeLabenz_Resume_25.pdf">Resume<ArrowIcon /></a></p>
        </div>
      </div>
      </div>

      <div className="footer-copyright-section"> 
        <div className="divider"></div>
        <p className="footer-copyright">© {year} Designed and coded with ❤️ by Diane Labenz</p>
      </div>
      
    </footer>
  )
}
