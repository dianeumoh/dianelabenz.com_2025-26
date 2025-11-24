import Marquee from '../components/Marquee'
import Greeting from '../components/Greeting'
import CaseStudyCard from '../components/CaseStudyCard'
import ExtraCurricularsCard from '../components/ExtraCurricularsCard'
import QuoteCarousel from '../components/QuoteCarousel'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-home" className="full-bleed-section">
        <div className="hero-section">
          <div className="hero-section-text">
            {/* Greeting section here */}
            <h1 id="hero-home">
              <span className="hero-title-line-one">
                <Greeting />
                {' '}I’m Diane,
              </span>
              <br />
              a senior product designer at Google
            </h1>
            <p>High-stakes, complex, and highly ambiguous problem spaces are my specialty :)</p>
          </div>
          <div className="profile-photo-wrapper">
            <img className="profile-photo" src="src/images/DianeHero.png" alt="Profile image of Diane Labenz" />
            <div className="profile-badge">
              <img src="src/images/making-things-better.svg" alt="A circular badge that says 'Making things better'" />
            </div>
          </div>
        </div>
      </section>
      {/* Marquee section here */}
      <Marquee />
      <AnimateOnScroll>
      <section aria-labelledby="featured-projects" className="featured-projects-section">
        <CaseStudyCard />
        <div>
          <h4>Looking for more?</h4>
        </div>
        <a className="button-primary" href="/selected-works">
          View selected works
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <section aria-labelledby="high-fives" className="high-fives-section-full-bleed">
        <div className="high-fives-section">
          <div className="high-fives-copy">
            <h2>A few of my high fives</h2>
            <p>A glimpse into what it's like to work with me</p>
          </div>
          <div className="carousel-wrapper">
            <QuoteCarousel />
          </div>
        </div>
      </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <section aria-labelledby="extra-curriculars" className="extra-curriculars-section-full-bleed">
        <div className="extra-curriculars-section-header">
          <h2>Extra curriculars</h2>
        </div>
    <div>
      <ExtraCurricularsCard />
    </div>
      </section>
      </AnimateOnScroll>
    </>
  )
}
