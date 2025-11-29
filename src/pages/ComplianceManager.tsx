import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import {CSImageGroup, CSGrid,CSCard, CSSection, CSBlockquote } from '../components/CaseStudyBlocks';
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
                <a href="https://cloud.google.com/blog/products/identity-security/streamline-auditing-compliance-manager-is-now-in-preview" className="text-link">Product website</a>
                <a href="https://www.crn.com/news/security/2025/5-big-google-cloud-security-announcements-at-next-2025" className="text-link">CRN Magazine</a>
                <a href="https://youtu.be/r4nol-bJsxw" className="text-link">Google Cloud Next</a>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <AnimateOnScroll>
        <CSSection>
          <h3>Background</h3>
          <h2>I was tasked to lead a compliance integration effort in the absence of PRDs</h2>
          <p>Organizations using Google Cloud must meet complex compliance requirements (CIS, HIPAA, GDPR) to prevent data breaches. But the compliance experience was fragmented across two separate products, <a href="https://cloud.google.com/assured-workloads" target="_blank" className="text-link">Assured Workloads</a> and <a href="https://cloud.google.com/security-command-center" target="_blank" className="text-link">Security Command Center</a> (SCC), making it nearly impossible for DevOps and GRC teams to get a unified view of their compliance status.</p>
          <p>Customers couldn't easily monitor their compliance posture, identify and remediate issues, or prepare for audits. Leadership planned to solve the fragmentation by mandating the integration of Assured Workloads into Security Command Center.</p>
          <p><strong> As the UX lead for the Assured Workloads team, I was tasked with co-leading the integration efforts in the absence of PRDs.</strong></p>
        </CSSection>
      </AnimateOnScroll>

<AnimateOnScroll>
      <CSImageGroup
  images={[
    { 
      src: "src/images/AssuredWorkloads.png", 
      alt: "Assured Workloads",
      caption: "Assured Workloads Compliance Dashboard"
    },
    { 
      src: "src/images/SecurityCommandCenter.png", 
      alt: "Security Command Center",
      caption: "Security Command Center Compliance Dashboard" 
    }
  ]}
  caption="The old fragmented compliance experience"
  backgroundColor="var(--color-gradient-tertiary)"
/>
</AnimateOnScroll>

      <AnimateOnScroll>
        <CSSection>
          <h3>The challenge</h3>
          <h2>My research showed that customers found it "too hard to be compliant on Google Cloud"</h2>
          <p>Months before the mandate to integrate Assured Workloads into Security Command Center, I intiated and led a study investigating why Assured Workloads adoption was stalling. Even customers with <i>free</i> access weren't using it.</p>
          <p><strong>I uncovered:</strong></p>
        </CSSection>
      </AnimateOnScroll>
      
        <CSGrid>
    <CSCard 
      variant="standard"
      icon="⬛" // Or <img src="..." />
      title="Monitoring was a 'black-box'"
      description="GRC teams needed to prove compliance daily to auditors. They needed to see their status, identify gaps, and get actionable next steps. Our tool only showed violations after they occurred."
    />
    <CSCard 
      variant="standard"
      icon="😵‍💫"
      title="Too hard to know how to be compliant"
      description="
Customers couldn't map compliance requirements (controls) to the Google Cloud policies needed to achieve them. Without this visibility, they couldn't trust the system or take action confidently."
    />
  </CSGrid>
 
  <AnimateOnScroll>
    <CSSection>
      <h3>Vision prototype</h3>
      <h2>I used data to shift our strategy from "move it" to a truly unified experience</h2>
      <p>To minimize disruption to their existing roadmap, the team's default approach was a "lift-and-shift" that would move the existing Assured Workloads experience into SCC with minimal changes.</p>
      <p>Based on the research, I knew this wouldn't work. Simply moving the experience wouldn't solve the core problems customers were facing. I partnered with the SCC UX lead to create a vision prototype that demonstrated a phased path to real integration.</p>
      <p>We designed around three principles from my research:</p>
      <ol>
        <li>1. A unified way to apply frameworks</li>
        <li>2. A single monitoring view</li>
        <li>3. A consistent experience to view and triage compliance findings</li>
      </ol>
    </CSSection>
    <CSImageGroup
          images={[
        
            { 
              src: "src/images/cm_visionslide_2.png", 
              alt: "North star concept of unified dashboard",
              caption: "Unified dashoard with standardized metrics" // <--- Specific caption
            },
            { 
              src: "src/images/cm_visionslide_3.png", 
              alt: "North star concept of posture management",
              caption: "Consistent way to apply and manage frameworks" // <--- Specific caption
            },
            { 
              src: "src/images/cm_visionslide_4.png", 
              alt: "North star concept of compliance monitoring",
              caption: "A single monitoring view for all frameworks" // <--- Specific caption
            }
          ]}
          backgroundColor="var(--color-gradient-tertiary)"
          caption="A few key slides from the unified compliance presentation"
        />
  </AnimateOnScroll>
  <CSSection>
    <p>We presented the strategy to a small working group of PM and engineering leads. The team had concerns about timeline and resources, but saw the feasibility of a phased approach. To make a case for dedicated time and resources, we presented to senior leadership.</p>
    <p>The presentation served as the official catalyst for the "Unified Compliance" initiative, shifting focus to building a fully integrated experience.</p>
    <CSCard
      variant="sketchy"
      icon={<img src="src/images/knot.png" alt="Tangled knot" />}
      title="The messy middle"
      description="Alignment didn't happen overnight. It took weeks of continued discussion after the design review—engineering feasibility assessments, political negotiation between teams, and clarifying the phased deprecation strategy. The presentation became the catalyst for the 'Unified Compliance' initiative, shifting the focus from just moving things around to building a fully integrated experience."
    />
  </CSSection>
  <AnimateOnScroll>
  <CSSection>
    <h3>Prototype & test</h3>
    <h2>Running rapid discovery with customers to validate the unified compliance experience</h2>
    <p>I led three 2-week design sprints to validate the MVP with customers.</p>
    </CSSection>
    <CSSection>
    <h4>Sprint #1: North star concept</h4>
    <p><strong>Hypothesis:</strong> Users with varying compliance experience need tailored guidance</p>
    <p>Based on my adoption-barriers study, I knew that cloud engineers setting up GCP infrastructure often lacked compliance experience. As one participant highlighted:</p>
      <CSBlockquote variant="accent">
        "These cloud engineers who are responsible for setting up the cloud infra on GCP may not have much experience with compliance. Having additional recommendations for those engineers would be helpful." <br/>- Data & AI Engineer, Public Sector
      </CSBlockquote>
      <p>I designed an AI-powered (<a href="https://gemini.google.com/" target="_blank" className="text-link">Gemini</a>) compliance score simulator, inspired by credit score tools, that provided clear, personalized recommendations for improving overall compliance scores.</p>
      </CSSection>
    <CSImageGroup
          images={[
        
            { 
              src: "src/images/Gemini_Compliance_1.png", 
              alt: "Compliance score simulator showing predicted scores based on remediation actions",
              caption: "" // <--- Specific caption
            },
            { 
              src: "src/images/Gemini_Compliance_2.png", 
              alt: "Compliance score simulator showing predicted scores based on remediation actions",
              caption: "" // <--- Specific caption
            },
          ]}
          backgroundColor="var(--color-gradient-tertiary)"
          caption="Compliance score simulator showing predicted scores based on remediation actions"
        />
        </AnimateOnScroll>
        <AnimateOnScroll>
        <CSSection>
          <p><strong>Outcome:</strong> ✅ Validated: 8/10 participants saw value in predicted scores. However, delivering truly personalized recommendations based on each customer's environment wasn't technically feasible for MVP. Rather than ship a generic AI experience that would erode trust, I deprioritized AI features and focused on deterministic, auditable scoring that GRC teams could defend to regulators.</p>
        </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h4>Sprint #2: Near-term experience</h4>
            <p>I applied Sprint 1 learnings to improve transparency and guidance in the near-term MVP. Another adoption barrier was lack of visibility between regulatory requirements (controls) and the Google Cloud policies that achieve those requirements.</p>
            <p>Despite pushback to create a policy-first view for DevOps teams, I advocated for and designed a "controls-first" experience for all users.</p>
            <CSCard
      variant="sketchy"
      icon={<img src="src/images/noun-pencil.png" alt="Tangled knot" />}
      title='Why "controls-first" mattered strategically'
      description="Controls (Compliance requirements) are the cloud-agnostic way Compliance leads and GRC teams measure compliance. An experience without this is like Google Maps without the turn-by-turn directions. For public sector customers, this was table stakes. Without it, we couldn't demonstrate we understood compliance workflows."
    />
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/Create posture_MyCanadaProtectedB.png", 
                alt: "Controls-first experience",
                caption: "The controls-first view for creating a custom framework",
                annotations: [
                  "1.'Controls-centric' view: Addresses the compliance “black-box” problem by showing the relationship between compliance requirements and the necessary policies to satisfy them",
                  "2.'View by controls or policies': Allows GRC users to work in 'controls' (what auditors care about) while letting engineers work in 'policies' (what they implement), creating a single source of truth for both."
                ]
              },
            ]}
            backgroundColor="var(--color-gradient-tertiary)"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <p><strong>Outcome:</strong> ✅ Validated: The "controls-first" view tested with 100% positive sentiment for all participants: </p>
            <CSBlockquote variant="accent">
              "When I see something like 'frequency of audit log reviews,' it's helpful to know that's directly tied to a control in the CA family, maybe CA-7." <br/>- Security Architect, State of Hawaii/TEK Systems
            </CSBlockquote>
            <CSBlockquote variant="accent">
              "What I'm seeing on the screen is pretty nice: To be able to create a template and select whichever controls we're looking for." <br/>- Operations Infrastructure Lead, NASA
            </CSBlockquote>
            </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h3>Build</h3>
            <h2>From 0 to MVP: Designing four capabilities that transformed a broken journey into a unified experience</h2>
            <p>I led the end-to-end design for the Compliance Manager MVP, working with over 60 stakeholders to translate sprint insights into a cohesive experience.</p>
            <p>I designed the full end-to-end experience of our four core capabilities:</p>
            <h4>Framework library</h4>
            <p><strong>The problem:</strong> Customers with less compliance experience were unsure which frameworks should be applied to their resources.</p>
            <p><strong>The solution:</strong> The new framework library supports discoverability by enabling users to browse or search for frameworks by industry, use case, or category.</p>
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/cm_framework_library.png", 
                alt: "Controls-first experience",
                caption: "Framework library" 
              },
            ]}
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h4>Custom framework builder</h4>
            <p><strong>The problem:</strong> Customers stressed that “off the shelf” frameworks rarely accounted for their organization’s specific needs.</p>
            <p><strong>The solution:</strong> I designed a guided framework creation flow that allows users to create a custom framework from scratch or from a template. The controls-first experience makes it clear which guardrails to select to achieve compliance goals.</p>
            </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/Step=1 (Start New).png", 
                alt: "Custom framework builder, step 1",
                caption: "Step 1: Start New" 
              },
              { 
                src: "src/images/Step=3 (Empty).png", 
                alt: "Custom framework builder, step 3",
                caption: "Step 3: Add Cloud Controls" 
              },
              { 
                src: "src/images/Step=4.png", 
                alt: "Custom framework builder, step 4",
                caption: "Step 4: Define parameters" 
              },
            ]}
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h4>Cloud controls (new policy management experience)</h4>
            <p><strong>The problem:</strong> A significant pain point for customers was having to manage an assortment of Google Cloud rules (Org Policies, IAM policies, etc.), to manage compliance.</p>
            <p><strong>The solution:</strong> With cloud controls, customers no longer have to interface with various rules and policies. Instead, cloud controls act as a “wrapper” around existing rules supporting our customers from their issue detection to prevention journey.</p>
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/CloudControlLibrary.png", 
                alt: "Cloud controls",
                caption: "Cloud controls library" 
              },
            ]}
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h5>Navigating constraints to ship a "noise-free" feature</h5>
            <p>Customers explicitly requested "Mute & Risk Accept" to reduce noise from irrelevant findings, critical for alarm fatigue. We couldn't build it for MVP. Additionally, we were under pressure to ship the feature quickly. This meant I needed to design pragmatic solutions that worked within these constraints.</p>
            <p>I proposed and designed a "Disable Cloud Control" feature that allowed customers to silence irrelevant controls at the source. This was a deliberate tradeoff that solved the core alarm fatigue problem within our constraints, even though it wasn't the ideal long-term pattern. I secured alignment from product and engineering to ship this pragmatic solution.</p>
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/MuteCloudControl.png", 
                alt: "Disable cloud control",
                caption: "Disable cloud control (from cloud control detail page)" 
              },
            ]}
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h4>Monitoring dashboard</h4>
            <p><strong>The problem:</strong> The old experience was reactive. It only alerted users <i>after</i> violations occurred, like Google Maps telling you after you'd already missed your exit. Customers couldn't easily answer "How are we satisfying HIPAA?" without manual analysis.</p>
          </CSSection>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <CSImageGroup
              images={[
                { 
                  src: "src/images/AssuredWorkloads.png", 
                  alt: "Monitoring dashboard",
                  caption: "Before: The old Assured Workloads monitoring dashboard (only shows violations)" 
                },
              ]}
              backgroundColor="var(--color-gradient-tertiary)"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <CSSection>
              <p>I redesigned monitoring to show proactive compliance status using a single, auditable metric: <strong>% of controls passing</strong>. This aligned with our customer's mental model of compliance allowing them to easily understand their compliance status.</p>
            </CSSection>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <CSImageGroup
              images={[
                { 
                  src: "src/images/ComplianceManager_Monitor.png", 
                  alt: "Monitoring dashboard",
                  caption: "After: The new Compliance Manager monitoring dashboard (shows % of controls passing)" 
                },
              ]}
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <CSSection>
              <h4>Framework monitoring detail page</h4>
              <p><strong>The problem:</strong> Our old experience didn't provide a way to see the details of a framework. Customers needed to be able to see the details of a framework to understand which controls are being monitored and which policies are being applied.</p>
              <p><strong>Design challenge:</strong> The relationship between compliance requirements (controls) and Google Cloud policies is hierarchical. Controls are parents, policies are children. But they don't share the same metadata. I explored simple tables and expanding rows, but both failed to show the hierarchy clearly.</p>
            </CSSection>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <CSImageGroup
              images={[
                { 
                  src: "src/images/ComplianceSimpleTable.png", 
                  alt: "Framework monitoring",
                  caption: "Iteration #2: Expanding row table",
                  annotations: [
                    "This created a terrible 'empty column' experience. The parent 'Control' (compliance requirements) and the child 'Policies' (Google Cloud policies) don't share the same metadata, so it just looked broken and confusing."
                  ]
                },
              ]}
              backgroundColor="var(--color-gradient-tertiary)"
            />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <p>My breakthrough came from an OOUX (Object-Oriented UX) exercise.</p>
            <CSImageGroup
              images={[
                { 
                  src: "src/images/OOUX.png", 
                  alt: "OOUX exercise",
                  caption: "Snippet from OOUX exercise" 
                },
              ]}
              backgroundColor="var(--color-surface-secondary)"
            />
            <p> By mapping the objects and their attributes, I found:</p>
            <ol>
              <li><strong>1. The anchor:</strong> Both controls and policies share a "Name," this became the primary column</li>
              <li><strong>2. The aggregation:</strong> Controls don't have findings, but policies do. I needed to show aggregated pass/fail at the parent level</li>
              <li><strong>3. The mixed states:</strong> Physical controls could be "Not Assessed," but Cloud Controls could only be "Pass" or "Fail"</li>    
            </ol>
            <p>This led me to the existing design system's Tree Table component. It perfectly solved the hierarchy problem, showed aggregated findings at the parent level, and handled mixed status states. Rather than build a bespoke component under time constraints, I leveraged what existed.</p>
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/TreeTable.png", 
                alt: "Tree table",
                caption: "Final design: The tree table from the framework monitoring page" 
              },
            ]}
            backgroundColor="var(--color-surface-secondary)"
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h5>Adding status to the framework monitoring page</h5>
            
            <p><strong>Balacing accessibility and consistency:</strong> My first instinct was to use red/blue for pass/fail (avoiding red/green colorblindness issues). However, this conflicted with Google Cloud's visual language, which uses green for success everywhere. Introducing blue would create inconsistency across the platform. I made the intentional decision to use red/green but followed WCAG 1.4.1 by adding high-contrast borders and explicit text labels ("Passing," "Failing," "Total Assessed") so color wasn't the only visual cue. This maintained platform consistency while ensuring 100% accessibility.</p>
            <CSImageGroup
              images={[
                { 
                  src: "src/images/ControlsPassing.png", 
                  alt: "Controls passing and failing chart",
                  caption: "Controls passing chart" 
                },
              ]}
              backgroundColor="var(--color-surface-secondary)"
            />
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection><p>This led to our final, simple, and validated solution: two charts.
First, 'Controls Passing', to give users their 'point-in-time' status.
Second, 'Controls Passing Over Time', to build trust and show them their remediation efforts were working.
I intentionally placed these two charts directly above the 'Tree Table' (the directions). This created the perfect, logical flow: users could immediately see their high-level status, then dive directly into the directions to take action.</p></CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSImageGroup
            images={[
              { 
                src: "src/images/CM_MonitoringDetail.png", 
                alt: "Framework monitoring detail page",
                caption: "Final design: Framework monitoring detail page" 
              },
            ]}          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection>
            <h3>Impact</h3>
            <h2>Transforming a fragmented journey into a fully integrated experience</h2>
            <p>The launch of Compliance Manager proved Google Cloud's ability to serve customers with complex regulatory needs. By transforming a fragmented journey into a fully-integrated experience, we addressed key adoption blockers and drove significant business impact:</p>
            </CSSection>
            <CSGrid>
            <CSCard 
              variant="standard"
              icon=""
              title="Unblocked $275M"
              description="in at-risk public sector pipeline (customers evaluating multi-cloud solutions cited unified compliance management as a requirement)"
            />
            <CSCard 
              variant="standard"
              icon=""
              title="100+ customers onboarded pre-GA launch"
              description="despite having access to the old experience. They opted in because the unified approach finally met their expectations for a 'fully loaded compliance monitoring and config experience'"
            />
            </CSGrid>
            <CSSection>
              <p>The product was featured at Google Cloud Next 2024, showcasing the unified compliance journey to thousands of customers and partners.</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/r4nol-bJsxw?si=WmUtCTl7lFa7xDem" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CSSection><h3>Learnings & retrospect</h3>
            <h2>Sprints compressed months of alignment into weeks. Next time: advocate earlier for critical technical needs.</h2>
            <p><strong>What worked:</strong> The sprint approach allowed us to explore big ideas (like AI-powered recommendations), validate assumptions quickly, and build stakeholder confidence through customer evidence rather than opinion. Deprioritizing AI when it wasn't feasible prevented us from shipping an experience that would have damaged trust with GRC teams.</p>
            <p><strong>What I learned:</strong> A senior designer's job isn't just to solve the problems they're given. It's to find the right problems to solve. The team thought we had a pricing or marketing problem. My research proved it was a core product value problem. That insight became the catalyst for the entire $275M success.</p>
            <p><strong>What I'd change:</strong> I wish I had advocated earlier for intentional Infrastructure as Code (IaC) support. Tools like Terraform are critical for many Google Cloud users, and while I kept this in mind throughout the design process and embedded support where I could, I should have pushed harder to make IaC a first-class consideration from day one, not just a UI afterthought.</p>
            </CSSection>
        </AnimateOnScroll>
  

    </CaseStudyLayout>
  );
}