import { useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';
import AnimateOnScroll from './AnimateOnScroll'

export default function CaseStudyCard() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, to: string) => {
        // Don't navigate if clicking the same route
        if (location.pathname === to) {
            e.preventDefault();
            return;
        }

        // Check if View Transitions API is supported
        if (document.startViewTransition) {
            e.preventDefault();
            // Start the View Transition for smooth animation
            document.startViewTransition(() => {
                navigate(to);
            });
        }
        // If not supported, let Link handle navigation normally
    };
    return (
        <>
        <AnimateOnScroll>
            <div className="case-study-card">
                <div className="case-study-card-content">
                    <div className="case-study-card-logo">
                        <img src="src/images/Google_Cloud_logo.png" alt="Google Cloud Logo" />
                    </div>
                    <h3>
                        From zero-to-MVP: Unifying the compliance experience on Google Cloud
                    </h3>
                    <div className="tag-primary-container">
                        <p className="tag-primary">0 → 1</p>
                        <p className="tag-primary">End-to-end design</p>
                        <p className="tag-primary">Product strategy</p>
                    </div>
                    <a 
                        className="button-primary" 
                        href="/compliance-manager"
                        onClick={(e) => handleNavClick(e as MouseEvent<HTMLAnchorElement>, '/compliance-manager')}
                    >
                        Dive right in
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </a>
                </div>
                <div>
                    <img
                        className="case-study-card-image"
                        src="src/images/ComplianceManager_home.png"
                        alt="Compliance Manager Homepage" />
                </div>
            </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
            <div className="case-study-card">
                <div className="case-study-card-content">
                    <div className="case-study-card-logo">
                        <img src="src/images/Google_Cloud_logo.png" alt="Google Cloud Logo" />
                    </div>
                    <h3>
                        Transforming the data security experience from data-dump to actionable insights
                    </h3>
                    <div className="tag-primary-container">
                        <p className="tag-primary">MVP</p>
                        <p className="tag-primary">End-to-end design</p>
                        <p className="tag-primary">Product leadership & strategy</p>
                    </div>
                    <a className="button-primary" href="/selected-works">
                     See the solution
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </a>
                </div>
                <div>
                    <img
                        className="case-study-card-image"
                        src="src/images/DSPM_TTV_home.png"
                        alt="Data Security Posture Management Dashboard" />
                </div>
            </div>
            </AnimateOnScroll>
        </>
    );
}