import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import {CSImageGroup, CSSection } from '../components/CaseStudyBlocks';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function ComplianceManager() {
  const meta: CaseStudyMeta = {
    title: "From zero-to-MVP: unifying the compliance experience on Google Cloud",
    subtitle: "Designing a unified platform for Google Cloud security.", // Fallback for SEO
    heroImage: "/src/images/compliancemanager_hero.png", // Update with your real image path
    // We are NOT passing role/team/tags here because we will render them manually below
    role: "",
    team: [],
    timeline: "",
    tags: []
  };

  return (
    <CaseStudyLayout meta={meta}>

      {/* --- 1. HERO SECTION (With Glow) --- */}
      <div className="cs-hero-glow-wrapper">
        <AnimateOnScroll>
          <div className="container">
            <img
              src={meta.heroImage}
              alt="Google Cloud Compliance Interface"
              className="cs-hero-img"
            />
          </div>
        </AnimateOnScroll>
      </div>

      <div className="container">

        {/* --- 2. HEADER BLOCK --- */}
        <AnimateOnScroll>
          <div className="cs-header-block">
            <h1 className="cs-title">
              From zero-to-MVP: unifying the <br />
              compliance experience on Google Cloud
            </h1>

            {/* Tags */}
            <div className="cs-tags-wrapper">
              <span className="tag-primary">0 → 1</span>
              <span className="tag-primary">End-to-end design</span>
              <span className="tag-primary">Product strategy</span>
            </div>

            {/* Date */}
            <span className="cs-date">March 2024 - January 2025</span>

            {/* Intro Paragraph */}
            <p className="cs-intro-text">
            Unblocking $275M in enterprise pipeline by unifying Google Cloud's fragmented compliance experience
            </p>
          </div>
        </AnimateOnScroll>
        {/* --- 3. SPLIT SECTION (Impact vs Meta) --- */}
        <div className="cs-intro-split">

          {/* LEFT: Impact Card */}
          <div className="impact-card">
            <h3>Impact</h3>
            <p>
              As a lead designer for Compliance Manager, I owned the end-to-end
              user experience from initial strategy and vision to the final MVP.
            </p>
            <ul>
              <li><strong>$275M</strong> in enterprise pipeline unblocked</li>
              <li><strong>100+</strong> customers onboarded pre-GA launch (exceeded targets)</li>
              <li><strong>60+</strong> stakeholders aligned around unified vision</li>
            </ul>
          </div>

          {/* RIGHT: Metadata Stack */}
          <aside className="meta-stack">

            <div className="meta-block">
              <h4>Role</h4>
              <p>Product designer (product vision, prototyping, product strategy, conceptual design, research, end-to-end design)</p>
            </div>

            <div className="meta-block">
              <h4>Team</h4>
              <p>60+ cross-functional partners (design, engineering, product) across 2 service teams</p>
            </div>

            <div className="meta-block">
              <h4>Links & press</h4>
              <div className="meta-links">
                <a href="#" className="text-link">Product website</a>
                <a href="#" className="text-link">TechCrunch</a>
                <a href="#" className="text-link">Google Cloud Next</a>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <AnimateOnScroll>
        <CSSection>
          <h3>The problem</h3>
          <h2>A fragmented compliance experience left customers disoriented</h2>
          <p>Organizations using Google Cloud must meet complex compliance requirements (CIS, HIPAA, GDPR) to prevent data breaches. But the compliance experience was fragmented across two separate products, <a href="https://cloud.google.com/assured-workloads" target="_blank" className="text-link">Assured Workloads</a> and <a href="https://cloud.google.com/security-command-center" target="_blank" className="text-link">Security Command Center</a> (SCC), making it nearly impossible for DevOps and GRC teams to get a unified view of their compliance status.</p>
          <p>Customers couldn't easily monitor their compliance posture, identify and remediate issues, or prepare for audits.</p>
        </CSSection>
      </AnimateOnScroll>

<AnimateOnScroll>
      <CSImageGroup
  images={[
    { 
      src: "src/images/AssuredWorkloads.png", 
      alt: "Assured Workloads",
      caption: "Old: Assured Workloads Compliance Dashboard" // <--- Specific caption
    },
    { 
      src: "src/images/SecurityCommandCenter.png", 
      alt: "Security Command Center",
      caption: "Old:Security Command Center Compliance Dashboard" // <--- Specific caption
    }
  ]}
  // You can still use this for a general label, or leave it empty
  caption=""
/>
</AnimateOnScroll>

      <AnimateOnScroll>
        <CSSection>
          <h3>The challenge</h3>
          <h2>Choosing the path of most resistance</h2>
          <p>Senior leadership planned to solve the fragmentation by mandating the integration of <a href="https://cloud.google.com/assured-workloads" target="_blank" className="text-link">Assured Workloads</a> into <a href="https://cloud.google.com/security-command-center" target="_blank" className="text-link">Security Command Center’s</a> (SCC) existing suite of security and threat detection services, leaving the implementation details to the two teams.</p>
          <p>The team’s default path was a “lift-and-shift” approach that would move their existing experience into SCC, minimizing disruption to their existing roadmap.</p>
        </CSSection>
        <CSImageGroup
          images={[
            { 
              src: "src/images/placeholder.png", 
              alt: "Assured Workloads",
              caption: "Placeholder image - add learnings from UXR here" // <--- Specific caption
            }
          ]}
        />
      </AnimateOnScroll>
    </CaseStudyLayout>
  );
}