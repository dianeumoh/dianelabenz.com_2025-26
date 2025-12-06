import React, { useState, useEffect, type ReactNode } from 'react';

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);

  // 1. Check Session Storage on load so they stay logged in during the visit
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('case-study-unlocked');
    if (sessionAuth === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 2. Simple Password Logic (Replace 'design2025' with your password)
    // You can also use an environment variable here: import.meta.env.VITE_PASSWORD
    if (inputVal.toLowerCase() === 'atlas5934') {
      setIsUnlocked(true);
      setError(false);
      sessionStorage.setItem('case-study-unlocked', 'true');
    } else {
      setError(true);
    }
  };

  // 3. If unlocked, show content normally
  if (isUnlocked) {
    return <>{children}</>;
  }

  // 4. If locked, show the "Teaser" view
  return (
    <div className="password-gate-wrapper">
      
      {/* The content is rendered but cut off visually */}
      <div className="password-gate-content-preview">
        {children}
      </div>

      {/* The Gradient Overlay & Form */}
      <div className="password-gate-overlay">
        <div className="password-gate-card">
          <h3>Enter password to continue reading</h3>
          <p>This case study contains sensitive/NDA information.</p>
          <p>Have my resume handy? You can find it there. <br/>Or <a className="text-link" href="mailto:dianelabenz3@gmail.com">contact me</a> directly to request access.</p>
          
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
          </form>
          
          {error && <span className="password-error">Incorrect password</span>}
        </div>
      </div>
    </div>
  );
}