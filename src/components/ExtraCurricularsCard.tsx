import FlippableCard from './FlippableCard';

export default function ExtraCurricularsCard() {
  // --- Define Front and Back Content for Card 1 (GAAD) ---
  const gaadFront = (
    <div className="extra-curriculars-card-content">
      <div>
        <img src="src/images/Gaadys.png" alt="GAAD Foundation" />
      </div>
      <h3>GAAD Foundation</h3>
      <div className="tag-primary-container">
        <p className="tag-primary">Board member</p>
        <p className="tag-primary">Accessibility advocate</p>
      </div>
    </div>
  );

  const gaadBack = (
    <div className="card-description-back">
      <h4>About my involvement</h4>
      <p>
        As a board member for the GAAD Foundation, I help steer the mission
        of making digital accessibility a core part of product development.
      </p>
    </div>
  );

  // --- Define Front and Back Content for Card 2 (Wash Day) ---
  const washDayFront = (
    <div className="extra-curriculars-card-content">
      <div>
        <img src="src/images/WashDay.png" alt="Wash Day app" />
      </div>
      <h3>Wash Day App</h3>
      <div className="tag-primary-container">
        <p className="tag-primary">Visual design</p>
        <p className="tag-primary">Side project</p>
      </div>
    </div>
  );

  const washDayBack = (
    <div className="card-description-back">
      <h4>About this project</h4>
      <p>
        A personal side project to explore visual design and branding
        for a mobile app concept.
      </p>
    </div>
  );

  // --- Define Front and Back Content for Card 3 (Patent) ---
  const patentFront = (
    <div className="extra-curriculars-card-content">
      <div>
        <img
          src="src/images/DesignPatent.png"
          alt="United States Patent - Diane Labenz Inventor"
        />
      </div>
      <h3>Design patent holder</h3>
      <div className="tag-primary-container">
        <p className="tag-primary">Design craft</p>
        <p className="tag-primary">Awards & recognitions</p>
      </div>
    </div>
  );

  const patentBack = (
    <div className="card-description-back">
      <h4>About my patent</h4>
      <p>
        Co-inventor on a design patent for a novel user
        interface component.
      </p>
    </div>
  );

  // --- Define Front and Back Content for Card 4 (Inclusive Week) ---
  const inclusiveFront = (
    <div className="extra-curriculars-card-content">
      <div>
        <img
          src="src/images/InclusiveProductWeek.png"
          alt="Inclusive Product Week Homepage"
        />
      </div>
      <h3>Inclusive Product Week conference</h3>
      <div className="tag-primary-container">
        <p className="tag-primary">Conference organizer</p>
        <p className="tag-primary">Conference speaker</p>
      </div>
    </div>
  );

  const inclusiveBack = (
    <div className="card-description-back">
      <h4>About this event</h4>
      <p>
        Co-organizer and speaker for an internal conference promoting
        inclusive design principles.
      </p>
    </div>
  );

  // --- Now, use those variables in your return ---
  return (
    <div className="extra-curriculars-section">
      <div className="extra-curriculars-row">
        {/*
          Replace your old <div className="extra-curriculars-card">
          with the <FlippableCard /> component.
        */}
        <FlippableCard frontContent={gaadFront} backContent={gaadBack} />
        <FlippableCard frontContent={washDayFront} backContent={washDayBack} />
      </div>
      <div className="extra-curriculars-row">
        <FlippableCard frontContent={patentFront} backContent={patentBack} />
        <FlippableCard
          frontContent={inclusiveFront}
          backContent={inclusiveBack}
        />
      </div>
    </div>
  );
}