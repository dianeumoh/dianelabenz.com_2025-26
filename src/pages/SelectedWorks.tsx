import AnimateOnScroll from '../components/AnimateOnScroll';
export default function SelectedWorks() {
  return (
    <section aria-labelledby="selected-works" className="selected-works-section-full-bleed">
      <div className="selected-works-section">
        <AnimateOnScroll>
        <div className="selected-works-section-header">
        <h1>Selected works</h1>
        <p>A glimpse into a few of the impactful projects I've shipped - transforming complexity into user wins and measurable success.</p>
        </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <h2 className="selected-works-section-subtitle">2024 - 2025</h2>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <div className="selected-works-grid">
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/compliance_selectedworks.png" alt="Compliance Manager Monitoring Dashboard" />
            <div className="selected-works-card-content">
              <p>Google Cloud</p>
              <h3>From zero-to-MVP: unifying the compliance experience on Google Cloud</h3>
              <div className="tag-primary-container">
                <span className="tag-primary">0 → 1</span>
                <span className="tag-primary">End-to-end design</span>
                <span className="tag-primary">Product strategy</span>
              </div>
              <a href="/compliance-manager" className="text-link">Dive right in</a>
            </div>
          </div>
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/dspm_selectedworks.png" alt="Data Security Posture Management Dashboard" />
            <div className="selected-works-card-content">
              <p>Google Cloud</p>
              <h3>Transforming the data security experience from data-dump to actionable insights</h3>
              <div className="tag-primary-container">
                <span className="tag-primary">MVP</span>
                <span className="tag-primary">End-to-end design</span>
                <span className="tag-primary">Product leadership & strategy</span>
              </div>
              <a href="/data-security" target="_blank" className="text-link">See the solution</a>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
        <h2 className="selected-works-section-subtitle">2021 - 2023</h2>
        <AnimateOnScroll>
        <div className="selected-works-grid">
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/hpeiam_selectedworks.png" alt="Hewlett Packard Enterprise Greenlake Cloud IAM Experience" />
            <div className="selected-works-card-content">
              <p>Hewlett Packard Enterprise // Greenlake Cloud</p>
              <h3>Helping system administrators secure the castle </h3>
              <div className="tag-primary-container">
                <span className="tag-primary">Product strategy</span>
                <span className="tag-primary">User research</span>
                <span className="tag-primary">End-to-end design</span>
              </div>
              <a href="/authz" className="text-link">Get the scoop</a>
            </div>
          </div>
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/hpewellness_selectedworks.png" alt="Hewlett Packard Enterprise Greenlake Cloud Wellness Experience" />
            <div className="selected-works-card-content">
              <p>Hewlett Packard Enterprise // Greenlake Cloud</p>
              <h3>Giving IT administrators peace of mind with predictive insights</h3>
              <div className="tag-primary-container">
                <span className="tag-primary">Product strategy</span>
                <span className="tag-primary">Design</span>
                <span className="tag-primary">Workshop facilitation</span>
              </div>
              <a href="/wellness-dashboard" className="text-link">Dive into the details</a>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <div className="selected-works-grid">
        <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/washday_selectedworks.png" alt="Wash Day App" />
            <div className="selected-works-card-content">
              <p>Wash Day</p>
              <h3>Building a personalized hair care platform from the ground up</h3>
              <div className="tag-primary-container">
                <span className="tag-primary">Visual design</span>
                <span className="tag-primary">End-to-end design</span>
                <span className="tag-primary">Side project</span>
              </div>
              <a href="/wash-day" className="text-link">See the app</a>
            </div>
          </div>
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/opensanjose_selectedworks.png" alt="Open Disclosure San Jose Homepage" />
            <div className="selected-works-card-content">
              <p>Open Disclosure San Jose</p>
              <h3>Making local election spending data accessible to everyone </h3>
              <div className="tag-primary-container">
                <span className="tag-primary">Visual design</span>
                <span className="tag-primary">End-to-end design</span>
                <span className="tag-primary">Branding</span>
              </div>
              <p className="text-link">Coming soon!</p>
            </div>
          </div>
          
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
