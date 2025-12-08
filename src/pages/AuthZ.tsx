import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import { CSSection, CSBrowserFrame, CSGrid, CSCard, CSImageGroup, CSBlockquote } from '../components/CaseStudyBlocks';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ArrowIcon from '../components/ArrowIcon';

export default function AuthZ() {
    const meta: CaseStudyMeta = {
        title: "HPE GreenLake Cloud IAM Experience",
        subtitle: "Designing HPE GreenLake Cloud's role-based access control (RBAC) experience.", // Fallback for SEO
        heroImage: "/src/images/hpeauthz_hero.png", // Using available wellness image
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
                        <CSBrowserFrame>
                            <img
                                src={meta.heroImage}
                                alt="HPE GreenLake Cloud IAM Hero"
                                className="cs-hero-img cs-img-no-shadow"
                            />
                        </CSBrowserFrame>
                    </div>
                </AnimateOnScroll>
            </div>

            <div className="container">

                {/* --- 2. HEADER BLOCK --- */}
                <AnimateOnScroll>
                    <div className="cs-header-block">
                        <h1 className="cs-title">
                            Helping system administrators secure the castle
                        </h1>
                        {/* Tags */}
                        <div className="cs-tags-wrapper">
                            <span className="tag-primary">Product strategy</span>
                            <span className="tag-primary">User research</span>
                            <span className="tag-primary">End-to-end design</span>
                        </div>

                        {/* Date */}
                        <span className="cs-date">September 2021 - October 2021</span>

                        {/* Intro Paragraph */}
                        <p className="cs-intro-text">
                            Designing HPE GreenLake Cloud's role-based access control (RBAC)experience.            </p>

                    </div>
                </AnimateOnScroll>
                {/* --- 3. SPLIT SECTION (Impact vs Meta) --- */}
                <div className="cs-intro-split">

                    {/* LEFT: Impact Card */}
                    <div className="impact-card">
                        <h3>Impact</h3>
                        <p>
                            As the product designer for HPE GreenLake's IAM experience, I redesigned the custom role creation flow to reduce complexity and build admin confidence in managing access.
                        </p>
                        <ul>
                            <li><strong>Shipped redesign used by 44,000+ customers </strong> with 100% task completion in validation (8/8 admins)</li>
                            <li><strong>Influenced 2022 roadmap</strong> Competitive research and advocacy moved user groups feature up in priority</li>
                            <li><strong>Challenged stakeholder assumptions with research </strong> Proved custom roles were table stakes, not edge cases, shifting product investment strategy</li>
                        </ul>
                    </div>

                    {/* RIGHT: Metadata Stack */}
                    <aside className="meta-stack">

                        <div className="meta-block">
                            <h4>Role</h4>
                            <p>Product designer (End-to-end design, product strategy, user research)</p>
                        </div>

                        <div className="meta-block">
                            <h4>Team</h4>
                            <p>10+ cross-functional partners (engineering, product)</p>
                        </div>
                        <div className="meta-block">
                            <h4>Links & press</h4>
                            <div className="meta-links">
                                <a href="https://www.hpe.com/br/en/home.html" className="footer-external-link">Product website<ArrowIcon /></a>
                                <a href="https://www.youtube.com/watch?v=GhPNVLq9DnY5" className="footer-external-link">See it in action<ArrowIcon /></a>
                                <a href="https://community.hpe.com/t5/the-cloud-experience-everywhere/stay-ahead-of-it-issues-with-hpe-s-aiops-driven-wellness/ba-p/7215817" className="footer-external-link">Read the blog<ArrowIcon /></a>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
            <AnimateOnScroll>
                <CSSection>
                    <h3>Overview</h3>
                    <h2>Controlling user access prevents cybersecurity breaches and data leaks</h2>
                    <p>Imagine you check into a hotel and receive a room key card. Your key card would only grant access to your room and other hotel amenities like the gym or pool. Now imagine you're part of the hotel cleaning staff. Your key card would only unlock the rooms you're assigned to clean that day. This is known as access management, a security practice that ensures people only have access to what they need.</p>
                    <p>Access management is critical for anyone using the cloud. Poor configurations can lead to security breaches, data leaks, and lawsuits. HPE GreenLake Cloud's role-based access control (RBAC) experience allows you to control user access to your resources, applications, and data.</p>
                    <p><strong>I was tasked with enhancing the design of HPE GreenLake Cloud Platform's access management system. This meant making our access flows secure and seamless.</strong></p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h3>The problem</h3>
                    <h2>Tech support was slammed with calls from confused customers</h2>
                    <p>The first iteration of HPE GreenLake Cloud launched in 2020. Our Beta users were confused by the custom role creation experience and struggled with giving their team the correct permissions. Because of this, admins assigned their users conflicting roles, giving their team too much access or locking themselves out of their accounts entirely.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/AddPermissions_Old_sub_1.png",
                        alt: "Nested permissions hierarchy was easy to overlook",
                        caption: "Nested permissions hierarchy was easy to overlook"
                    },
                    {
                        src: "/src/images/AddPermissions_Old_sub_2.png",
                        alt: "HPE GreenLake Cloud's sub-resources terminology confused users and led to misconfigurations",
                        caption: "''Sub-resources'' terminology confused users and led to misconfigurations"
                    },
                    {
                        src: "/src/images/AddPermissions_Old_sub_3.png",
                        alt: "HPE IAM column browser with no global search and filter options",
                        caption: "Lack of global search made it difficult to find the right permissions"
                    },
                ]}
                    backgroundColor="var(--color-gradient-tertiary)"
                    caption="The before state: confusion about how to create a custom role caused users to be locked out of their applications
or grant their users too many permissions."
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p>Technical support was slammed with calls from frustrated customers who needed help properly managing and assigning access.</p>
                    <p><strong>Business goals:</strong></p>
                    <ul>
                        <li><strong>Solve identified experience gaps</strong> based on customer feedback that led to misconfigurations</li>
                        <li><strong>Build trust into the experience</strong> so system administrators feel confident they're not granting redundant or conflicting permissions</li>
                        <li><strong>Provide clear guidance</strong> so admins know how to correctly assign roles from the start, granting the right level of permission to their team</li>
                        <li><strong>Reduce calls to customer support</strong> via concise workflows and better guidance</li>
                    </ul>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h3>Kickoff & discovery</h3>
                    <h2>Challenging stakeholder assumptions with research</h2>
                    <p>I led a kickoff discovery meeting prior to the work and learned the following assumptions had been identified in the stakeholder request:</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSGrid>
                    <CSCard
                        variant="sketchy"
                        icon="" // Or <img src="..." />
                        title="Assumption #1: Customers don't require role granularity"
                        description="Simple roles would be enough for most use cases"
                    />
                    <CSCard
                        variant="sketchy"
                        icon="" // Or <img src="..." />
                        title="Assumption #2: Built-in roles are sufficient"
                        description="Custom role creation is an edge case, not core workflow"
                    />
                    <CSCard
                        variant="sketchy"
                        icon="" // Or <img src="..." />
                        title="Assumption #3: It's a UI/UX problem"
                        description="Fixing the interface will solve misconfiguration issues"
                    />
                    <CSCard
                        variant="sketchy"
                        icon="" // Or <img src="..." />
                        title="Assumption #4: Lower privilege + admin = lockouts"
                        description="Permission conflicts are the primary lockout cause"
                    />
                </CSGrid>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p><strong>I pushed for UX research before any design work began</strong> to validate these assumptions and understand IT admins' mental models. I'm a big champion of UX research, and while I was at HPE, I made sure to include my UXR partners early and often.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h3>Research</h3>
                    <h2>Proving custom roles were table stakes, not edge cases</h2>
                    <p>I collaborated with the UX research team to conduct ten unmoderated think-aloud survey studies on IT admins who manage employee access for their internal organization or cloud provider. The goal was to understand their mental models and unearth pain points.</p>
                    <p><strong>What we discovered:</strong></p>
                    <p>The big assumption my research proved wrong: <strong>Customers absolutely needed custom roles, and this was considered table stakes.</strong> This meant we really needed to invest in this experience and improve the task flow.</p>
                    <p><strong>Additional findings:</strong></p>
                    <ul>
                        <li>70% of participants listed the complexity of tools as the source of their biggest frustration</li>
                        <li>80% of participants felt that updating roles and privileges as their cloud services evolved was their biggest challenge80% of admins use custom roles to manage access</li>
                    </ul>
                    <CSBlockquote>
                        <p>“Many of the tools I work with struggle with two issues...the first is they are <strong>unnecessarily complicated and use quite complicated language</strong>. Somebody like myself <strong>who works with a plethora of tools may not necessarily be working with a particular tool day in day out and it may be some time before I use a particular tool again</strong>. With this in mind, tools need to be simple, user-friendly and easy to use for your basic configuration tasks. I find many platforms or services do not bear this in mind."</p>
                        <p>- Systems Admin, Education, UK</p>
                    </CSBlockquote>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h3>Competitive research</h3>
                    <h2>Understanding industry patterns and identifying gaps</h2>
                    <p>I spent two days conducting thorough competitive research on competitor IAM models (AWS, Azure, GCP) to:</p>
                    <ul>
                        <li>Understand how users were creating custom roles</li>
                        <li>Explore gaps not only in the experience but in the IAM architecture</li>
                        <li>Inform my design decisions with both research and industry best practices</li>
                    </ul>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/hpe_authz_compresearch.png",
                        alt: "Excerpt from the research report on competitor IAM models",
                        caption: "Excerpt from the research report on competitor IAM models"
                    },
                ]}
                    backgroundColor="var(--color-gradient-tertiary)"
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p>I studied each cloud platform's documentation and explored what I could in test accounts. The goal was to understand the tradeoffs and even recommend schemas that HPE might use.</p>
                    <p><strong>This research became a reusable artifact</strong> that other UX designers referenced for additional IAM feature work after this project. It also drove me to champion for an MVP of user groups, which was absent in the enhancement PRD. Thanks to this research and data, user groups were moved up as a bigger priority, and I got to work on this feature in 2022.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h3>Synthesis & strategy</h3>
                    <h2>Prioritizing what to redesign within tight constraints</h2>
                    <p>I synthesized results from the study and stakeholder interviews and presented my findings to the PM, UI and backend engineering teams, and feature architects.</p>
                    <p><strong>The challenge:</strong> I was on a <em>tight</em> deadline with limited engineering resources. This meant I needed to:</p>
                    <ul>
                        <li>Focus on high-priority use cases and critical experience issues</li>
                        <li>Avoid total overhaul of the experience</li>
                        <li>Reuse existing components when and where possible</li>
                    </ul>
                    <p><strong>My strategic decision:</strong> Focus the overhaul on the custom role creation experience since it was the most critical workflow. For the detail page and roles table, I made minor enhancements and worked with UI engineering to ensure my definition of "minor" aligned with theirs.</p>
                    <p>
                        <strong>Documenting complex workflows:</strong> I created wireflows to demonstrate task flows and interactions to engineers, PM, and feature architects. This helped uncover gaps and understand edge cases before jumping into designs, ensuring alignment and buy-in before I invested time in high-fidelity work.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/hpe_authz_wireflows.png",
                        alt: "Wireflows demonstrating the task flows and interactions",
                        caption: "Wireflows demonstrating the task flows and interactions"
                    },
                ]}
                    backgroundColor="var(--color-gradient-tertiary)"
                    caption="I utilized wireflows to uncover gaps and understand edge cases before jumping into designs."
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h3>The solution</h3>
                    <h2>Two redesign strategies: Minor enhancements and a critical overhaul</h2>
                    <p>Before jumping into design, I synthesized insights from support issues, user interviews, and competitive research to identify the core problems driving misconfigurations and lockouts.</p>
                    <p><strong>Problems I needed to solve:</strong></p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSGrid>
                    <CSCard
                        variant="standard"
                        icon="🫣" // Or <img src="..." />
                        title="Nested permissions were easy to miss"
                        description="Some cloud resources have nested child resources. The original design focused too heavily on showing the resource hierarchy, which reflected our backend architecture but didn't align with admins' mental models."
                    />
                    <CSCard
                        variant="standard"
                        icon="💬" // Or <img src="..." />
                        title="Sub-resource language was confusing"
                        description="Jargon made it hard to understand what permissions actually did"
                    />
                    <CSCard
                        variant="standard"
                        icon="🔎" // Or <img src="..." />
                        title="No global search"
                        description="Finding the right resource required tedious browsing through hierarchies"
                    />
                </CSGrid>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h4>1. Roles home page & detail page redesign</h4>
                    <p><strong>Minor enhancements to improve visibility and trust:</strong><br /> Given tight resource constraints, I focused on targeted improvements to the roles home page and detail view rather than a complete overhaul.</p>
                    <p><strong>Design decision - Making role usage visible:</strong><br />I worked with eng architects to ensure built-in role descriptions were a requirement for app onboarding. For the design, in lieu of monitoring capabilities, I added a column to the roles table to easily identify whether a role was being utilized. This helped admins understand which roles were actively assigned before making changes.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/RolesScreen_Before.png",
                        alt: "Roles home page redesign",
                        caption: "❌ Before: The roles home page didn't provide visibility into role usage or application"
                    },
                    {
                        src: "/src/images/RolesScreen_After.png",
                        alt: "Roles home page redesign",
                        caption: "✅ After: The roles home page now shows which roles are being used, helping admins understand which roles are actively assigned before making changes."
                    },
                ]}

                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p><strong>Detail view improvements - Subtask view + full-screen view:</strong><br />
                        I added a search bar for permissions in the panel and full-screen view to support root cause analysis. Clicking on the users tab shows who is assigned to the role. An admin can click on any user to view their user details.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/RoleDetails_Before.png",
                        alt: "The old role details view",
                        caption: "❌ Before: Users would have to click on each role to see this detailed view"
                    },
                    {
                        src: "/src/images/RoleSubtask_After-details.png",
                        alt: "Role subtask view",
                        caption: "✅ After: Users can now utilize a quick view to see details about a role from the roles home page"
                    },
                ]}
                    caption="I added a quick view to the roles home page to help admins understand the details of a role without having to click on it."
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p>In addition to the detail panel (sub-task view), I also redesigned the full-screen view to provide a more comprehensive understanding of the role, including which users are assigned to the role.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/RoleDetails_Before.png",
                        alt: "Roles detail page redesign",
                        caption: "❌ Before: Users had to visit the user details page to see which roles were assigned"
                    },
                    {
                        src: "/src/images/FullRoleView_After.png",
                        alt: "Roles detail page redesign",
                        caption: "✅ After: Users can now see all the roles assigned to a user in the role details page"
                    },
                ]}
                />
            </AnimateOnScroll>

            <AnimateOnScroll>
                <CSSection>
                    <h4>2. Custom role creation flow redesign</h4>
                    <p>
                        This was where I focused the majority of design effort. The custom role creation flow was the most critical workflow and the source of the most significant user pain.</p>
                    <h5>Adapting to mental models: Redesigning the column browser</h5>
                    <p>When reviewing user feedback, my team learned our original column browser component focused too heavily on showing the resource hierarchy (nested resources and their permissions), which reflected our backend architecture but didn't align with admins' mental models.</p>
                    <p>To use a kanban board analogy, admins who needed to grant a user access to a set of cards weren't always familiar with the exact board it belonged to.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/AddPermissions_Old_sub.png",
                        alt: "The old column browser",
                        caption: "❌ Before: The permissions column browser didn't align with admins' mental models"
                    },
                ]}
                    backgroundColor="var(--color-gradient-tertiary)"
                    caption="The original design forced users to traverse a tree to view child resources. Since the search only filtered items in the right panel, finding the right resource was a painful task"
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p><strong>My solution:</strong> I updated the column browser design (which I <a className="text-link" href="https://patents.google.com/patent/USD977511S1" target="_blank" rel="noopener noreferrer">co-invented in 2021</a>) to include:</p>
                    <ul>
                        <li><strong>Global search</strong> across the entire dataset (admins weren't browsing, they were searching)
                        </li>
                        <li><strong>Clear descriptions</strong> for each parent resource in human-readable format</li>
                        <li><strong>Unnested child resources</strong> so admins didn't need to know the exact hierarchy</li>
                    </ul>
                    <p>This updated component was adopted into the design system.</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/AddPermissions_New.png",
                        alt: "The new column browser",
                        caption: "✅ After: The permissions column browser now aligns with admins' mental models"
                    },
                ]}
                    caption="I added clear descriptions to each parent resource and unnested child resources. I also added global search since it was unlikely that an admin would be browsing"
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h5>From full page configuration to a wizard: The iteration journey</h5>
                    <p>I explored three approaches for the custom role creation flow:</p>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/CreateRole_FullPage_V1.png",
                        alt: "The old full page approach",
                        caption: "Full page creation - I nixed this because adding many permissions could make it unwieldy"
                    },
                    {
                        src: "/src/images/CreateRole_FormStepper_V2.png",
                        alt: "The old full page approach",
                        caption: "Form stepper - Would have required custom UI components we didn't have time for"
                    },
                    {
                        src: "/src/images/CreateRole_Wizard.png",
                        alt: "The old full page approach",
                        caption: "Wizard - A bit heavy, but the right tradeoff to avoid cognitive overload while staying within existing component constraints"
                    },
                ]}
                    backgroundColor="var(--color-gradient-tertiary)"
                    caption="The custom role creation iterations"
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <p>I chose the 3-step wizard to guide users through the process of creating a custom role, ensuring adequate real estate for complex permission sets in Step 2 without overwhelming the page.</p>
                    <p>My design addressed key findings:</p>
                    <ul>
                        <li>Provide users with the ability to duplicate and edit existing roles (reducing repetitive work)</li>
                        <li>Make it intuitive to understand how to grant access to resources within the platform</li>
                        <li>Make the language accessible and avoid jargon when possible</li>
                    </ul>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSImageGroup images={[
                    {
                        src: "/src/images/hpe_createrole_step1.png",
                        alt: "The wizard design",
                        caption: "1. In the recent update, users can create a custom role from scratch or duplicate permissions from an existing role"
                    },
                    {
                        src: "/src/images/CreateRole_Wizard.png",
                        alt: "The wizard design",
                        caption: "2. Users then name the custom role and add an optional description",
                    },
                    {
                        src: "/src/images/AddPermissions_New.png",
                        alt: "The wizard design",
                        caption: "3. Users then select their desired permissions from the column browser",
                    },
                    {
                        src: "/src/images/ReviewCreateRole.png",
                        alt: "The wizard design",
                        caption: "4.Users then review and create the custom role",
                    },
                ]}
                caption="The new custom role creation flow"
                />
            </AnimateOnScroll>
            <AnimateOnScroll>
                <CSSection>
                    <h4>Design validation</h4>
                    <p>I worked with the research team to develop a script and prototype to validate whether an admin would select the right resources when creating a custom role. The moderated study was conducted on UserZoom.</p>
                    <p>We asked participants to create a custom role to grant access to device inventory and device auto-licensing for their new network engineer hire (Rena). Participants also assigned the custom role to Rena and applied a policy to the role assignment.</p>
                    <p><strong>Outcome:</strong> ✅ <i>Validated</i> - 8/8 participants successfully created the custom role and assigned it to Rena.</p>
                    <p>Participants said:</p>
                    <CSBlockquote>
                        <p>"I would steal this page for my system. I like the search bar, that's where I go number one, because we have permission settings buried deep, the readability and sorting is really good and dropdowns are organized, the whole flow is really good."</p>
                    </CSBlockquote>
                    <CSBlockquote>
                        <p>"Straightforward and I like the permissions grouping."</p>
                    </CSBlockquote>
                    <CSBlockquote>
                        <p>"I like that it's really straightforward, I don't have to go digging around for things, [...] I can just go in there and give them their access and I'm done."</p>
                    </CSBlockquote>
                </CSSection>
            </AnimateOnScroll>
            <AnimateOnScroll>
          <CSSection>
            <h3>Learnings & retrospect</h3>
            <h2>Challenging assumptions early shifted our investment strategy</h2>
            <p>During the design process, I collaborated heavily with my awesome design team, PM, and feature architects to ensure I was creating an improved experience and not designing in a silo.</p>
          </CSSection>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <CSGrid>
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/whatworked_icon.svg" alt="Lightbulb" />
              title="What worked:"
              description="Pushing for UX research before design work began. This challenged stakeholder assumptions and proved custom roles were table stakes, which shifted the team's investment strategy and ensured we built the right thing."
            />
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/learned_icon.svg" alt="Open book" />
              title="What I learned:"
              description="Tight constraints require strategic prioritization. By focusing the overhaul on the critical custom role creation flow and making minor enhancements elsewhere, I delivered meaningful impact within resource limitations."
            />
            <CSCard
              variant="sketchy"
              icon=<img src="src/images/differently_icon.svg" alt="Pencil eraser" />
              title="What I'd change:"
              description="I wish I had worked more closely with the PM and feature architects earlier to understand critical features and develop a phased feature release strategy. While the updated experience tested well with study participants, user sentiment revealed some critical access management features were still missing. We needed to shift our mindset from delivering a minimum viable product to the earliest usable product."
            />
          </CSGrid>
        </AnimateOnScroll>
        </CaseStudyLayout>
    )
}