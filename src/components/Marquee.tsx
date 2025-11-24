// This 'export default' is the magic line.
// It makes the 'Marquee' function available to other files.
export default function Marquee() {
  
 // Define the repeating content
 const content = (
  <>
    <li>Featured Projects ✦</li>
    <li>Featured Projects ✦</li>
    <li>Featured Projects ✦</li>
    <li>Featured Projects ✦</li>
    <li>Featured Projects ✦</li>
    <li>Featured Projects ✦</li>
    {/* Add more <li>s until it's wider than the widest screen */}
  </>
);

return (
  <section className="marquee-container">
    {/*
      This is the "double content" trick.
      We render two identical <ul>s side-by-side.
    */}
    <div className="marquee-track">
      <ul className="marquee-content">{content}</ul>
      <ul className="marquee-content" aria-hidden="true">{content}</ul>
    </div>
  </section>
);
}