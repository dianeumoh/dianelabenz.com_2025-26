export default function FunFacts() {
    return (
        <>
            <div className="fun-facts-grid">
                <div className="fun-fact-card">
                    <div className="fun-fact-card-image">
                        <img src="src/images/Diane_tennis.jpg" alt="Tennis" />
                    </div>
                    <p>I'm an avid tennis player with dreams to one day make it to the US Open ;)</p>
                </div>
                <div className="fun-fact-card">
                    <div className="fun-fact-card-image">
                        <img src="src/images/diane_enfj.png" alt="Myers-Briggs ENFJ personality type visualization" /> 
                    </div>
                    <p>I'm a Myers-Briggs <a className="text-link" href="https://www.16personalities.com/enfjs-at-work" target="_blank">ENFJ</a></p>
                </div>
                <div className="fun-fact-card">
                    <div className="fun-fact-card-image">
                        <video 
                            src="src/images/Atlas_beach.mp4" 
                            controls
                            loop
                            muted
                            autoPlay
                            playsInline
                            preload="metadata"
                            aria-label="Atlas the husky at the beach"
                        />
                    </div>
                    <p>I have a rescue husky named Atlas who's my trusty companion on various adventures around the Bay Area</p>
                </div>
                <div className="fun-fact-card">
                    <div className="fun-fact-card-image">
                        <img src="src/images/dreamer.jpg" alt="Silohette of palm trees against a cotton candy sunset" />
                    </div>
                    <p>I'm a dreamer. I approach my work and life asking, "What does an ideal world look like?" I often reach for what could be, not just what is.</p>
                </div>
            </div>

        </>
    )
}