import AnimateOnScroll from '../components/AnimateOnScroll';
import ArrowIcon from '../components/ArrowIcon';
export default function Contact() {
  return (
    <section aria-labelledby="contact-section" className="gradient-background">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>
      <div className="contact-section container">
        <AnimateOnScroll>
        <h1>Let's explore your next project!</h1>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <h2><i className="fa-solid fa-envelope"></i> dianelabenz3@gmail.com</h2>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <h2><i className="fa-solid fa-location-dot"></i> Bay Area, CA</h2>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div>
        <a className="button-primary" href="https://www.linkedin.com/in/dianelabenz/">
          LinkedIn
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </a>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
