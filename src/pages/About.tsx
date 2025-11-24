import AboutProfileImage from '../components/AboutProfileImage'
import FunFacts from '../components/FunFacts'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function About() {
  return (
    <>
    <AnimateOnScroll>
    <section aria-labelledby="about-section" className="full-bleed-section">
      <div className="about-section">
        <div className="about-section-content">
            <h1>I translate bold strategic goals into shippable,<br/> high-impact products</h1>
          <p>I'm a senior product designer and strategist based in the San Francisco Bay Area, passionate about building trust and creating clarity in complex, high-stakes environments.</p>
          <p>For over 7 years, I've designed and launched digital products for startups and global companies like Google Cloud & HPE, specializing in enterprise and B2B experiences. What draws me to this space, you ask? The problem-solving. I'm insatiably curious and gravitate toward complexity and ambiguity, the kind of challenges that feel like the next frontier of design.</p>
          <p>I believe great design comes from focusing on the margins—going beyond the average user to remove barriers for everyone. As a board member of the <a className="text-link" href="https://gaad.foundation/who-we-are" target="_blank">GAAD Foundation</a>, I work relentlessly to make technology accessible to people of all abilities.</p>
        </div>
        <div className="about-section-image">
          <AboutProfileImage />
        </div>
      </div>
          </section>
          </AnimateOnScroll>
    <AnimateOnScroll>
    <section className="fun-facts-section">
<div className="about-section-fun-facts">
        <h2>Fun facts about me</h2>
        <FunFacts />
      </div>
    </section>
    </AnimateOnScroll>
    </>

  )
}
