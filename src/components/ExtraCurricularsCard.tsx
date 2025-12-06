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
      <p>Check out the <a href="https://gaad.foundation/" className="text-link">GAAD Foundation</a> website for more information.</p>
    </div>
  );

  // --- Define Front and Back Content for Card 2 (Wash Day) ---
  const washDayFront = (
    <div className="extra-curriculars-card-content">
      <div>
        <img src="src/images/WashDay.png" alt="Wash Day app" />
      </div>
      <h3>Wash Day app</h3>
      <div className="tag-primary-container">
        <p className="tag-primary">Visual design</p>
        <p className="tag-primary">Side project</p>
      </div>
    </div>
  );

  const washDayBack = (
    <div className="card-description-back">
      <h4>About Wash Day</h4>
      <p>
       Wash Day is a mobile app (and personal side project) that fosters knowledge about natural hair care by generating personalized hair care routines based on the user's hair type and goals.
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
        I am a co-inventor on a design patent for a novel user
        interface component that allows users to easily navigate role-based access permissions.
      </p>
      <p>Check out the <a href="https://patents.google.com/patent/USD977511S1" className="text-link">patent</a> for more information.</p>
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
        In May of 2021, As the Director of Design at Code for San Jose,I organized an 2-day long online international conference on inclusive product development.</p>
        <p>Catch the conference replay at <a href="https://www.youtube.com/channel/UCnZvPzUb3i686FTku5xkaFw" className="text-link">Inclusive Product Week's YouTube channel</a></p>
      
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