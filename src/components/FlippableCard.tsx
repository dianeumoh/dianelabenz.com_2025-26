import { type ReactNode, useState } from 'react'; // 1. Import useState

export type FlippableCardProps = {
  frontContent: ReactNode;
  backContent: ReactNode;
};

export default function FlippableCard({ frontContent, backContent }: FlippableCardProps) {
  // 2. Add a state variable to track the flip
  const [isFlipped, setIsFlipped] = useState(false);

  // 3. Create a function to toggle the state
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // 4. Add the onClick handler to the container
    <div className="flippable-card-container" onClick={handleClick}>
      
      {/* 5. Conditionally add an 'is-flipped' class */}
      <div className={`flippable-card ${isFlipped ? 'is-flipped' : ''}`}>
        
        <div className="flippable-card-front">
          {frontContent}
        </div>
        
        <div className="flippable-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}