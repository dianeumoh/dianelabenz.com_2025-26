import AnimateOnScroll from '../components/AnimateOnScroll';
export default function Contact() {
  return (
    <section aria-labelledby="contact-section" className="gradient-background">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>
      {/* 2. The Content Grid */}
      <div className="container contact-grid">
        <AnimateOnScroll>
        {/* LEFT COLUMN: Your Text */}
        <div className="contact-text-content">
          <AnimateOnScroll>
          <h1>Let's explore your next project!</h1>
          </AnimateOnScroll>
          <div className="contact-links">
            <a href="mailto:..." className="contact-item">
            <i className="fa-solid fa-envelope"></i> dianelabenz3@gmail.com
            </a>
            <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i> San Francisco Bay Area, CA
            </div>
            <AnimateOnScroll>
            <div className="contact-button">
              <a href="https://www.linkedin.com/in/dianelabenz/" className="button-primary">
                Connect on LinkedIn &rarr;
              </a>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
        </AnimateOnScroll>

        {/* RIGHT COLUMN: The "Visual Anchor" Image */}
        <div className="contact-visual">
          {/* Replace this src with a transparent PNG.
             Ideas: A 3D glass shape, a flower (like the example), 
             or a cutout of you looking at the text.
          */}
          <img 
            src="/src/images/purple_blob.png" 
            alt="Purple glass shape" 
            className="floating-image" 
          />
        </div>

      </div>
    </section>
  );
}
