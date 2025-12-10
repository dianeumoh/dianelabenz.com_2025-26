import React, { useState, useEffect, type ReactNode } from 'react';
import { CSAudioButton } from '../components/CaseStudyBlocks'; // Adjust path if needed

// 1. Update the props type definition
type PasswordGateProps = {
  children: ReactNode;
  audioUrl?: string; // Make it optional (?) in case some projects don't have audio
};

export default function PasswordGate({ children, audioUrl }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('case-study-unlocked');
    if (sessionAuth === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.toLowerCase() === 'atlas') {
      setIsUnlocked(true);
      setError(false);
      sessionStorage.setItem('case-study-unlocked', 'true');
    } else {
      setError(true);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate-wrapper">
      
      <div className="password-gate-content-preview">
        {children}
      </div>

      <div className="password-gate-overlay">
        <div className="password-gate-card">
          <h3>Enter password to continue reading</h3>
          <p>
            Have my resume handy? You can find it there.
            Or <a className="text-link" href="mailto:dianelabenz3@gmail.com">contact me</a> directly to request access.
          </p>
          
          <form onSubmit={handleSubmit} className="password-form">
            <input 
              type="password" 
              placeholder="Enter password"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className={`password-input ${error ? 'input-error' : ''}`}
            />
            <button type="submit" className="button-primary">
              Unlock
            </button>
            
            {error && <span className="password-error">Incorrect password</span>}
            
            {/* 2. Conditionally render the audio section ONLY if a URL is provided */}
            {audioUrl && (
              <>
                <p><span className="separator">or</span></p>
                <div className="audio-button-center">
                  <CSAudioButton
                    audioUrl={audioUrl} // <--- Pass the dynamic prop here
                    text="Listen to this case study"
                  />
                </div>
              </>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
}