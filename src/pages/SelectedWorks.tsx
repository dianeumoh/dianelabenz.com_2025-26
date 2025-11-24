
export default function SelectedWorks() {
  return (
    <section aria-labelledby="selected-works" className="full-bleed-section">
      <div className="selected-works-section">
        <div className="selected-works-section-header">
        <h1>Selected works</h1>
        <p>A glimpse into some of the impactful projects I've shipped - transforming complexity into user wins and measurable success.</p>
        </div>
        <h2 className="selected-works-section-subtitle">2024 - 2025</h2>
        <div className="selected-works-grid">
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/selectedworks_compliance.png" alt="Project 1" />
            <div className="selected-works-card-content">
              <h3>From zero-to-MVP: unifying the compliance experience on Google Cloud</h3>
              <p>I led the end-to-end design of a new compliance experience that</p>
              <p className="text-link">Learn more</p>
            </div>
          </div>
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/selectedworks_dspm.png" alt="Project 1" />
            <div className="selected-works-card-content">
              <h3>Transforming the data security experience from data-dump to actionable insights</h3>
              <p>Description of project 1</p>
              <p className="text-link">Learn more</p>
            </div>
          </div>
        </div>
        <h2 className="selected-works-section-subtitle">2022 - 2023</h2>
        <div className="selected-works-grid">
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/selectedworks_iam.png" alt="Project 1" />
            <div className="selected-works-card-content">
              <h3>Helping system administrators secure the castle </h3>
              <p>Designing HPE Greenlake Cloud's end-to-end role-based access (RBAC) experience.</p>
              <p className="text-link">Learn more</p>
            </div>
          </div>
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/selectedworks_wellness.png" alt="Project 1" />
            <div className="selected-works-card-content">
              <h3>Giving IT administrators peace of mind with predictive insights</h3>
              <p>Designing HPE Greenlake Cloud's end-to-end role-based access (RBAC) experience.</p>
              <p className="text-link">Learn more</p>
            </div>
          </div>
        </div>
        <div className="selected-works-grid">
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/selectedworks_opendisclosure.png" alt="Project 1" />
            <div className="selected-works-card-content">
              <h3>Making local election spending accessible to everyone </h3>
              <p>Designing HPE Greenlake Cloud's end-to-end role-based access (RBAC) experience.</p>
              <p className="text-link">Learn more</p>
            </div>
          </div>
          <div className="selected-works-card">
            <img className="selected-works-card-image" src="src/images/selectedworks_wellness.png" alt="Project 1" />
            <div className="selected-works-card-content">
              <h3>Building a personalized hair care platform from the ground up</h3>
              <p>Designing HPE Greenlake Cloud's end-to-end role-based access (RBAC) experience.</p>
              <p className="text-link">Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
