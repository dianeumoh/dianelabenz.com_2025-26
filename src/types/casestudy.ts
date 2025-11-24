// src/types/case-study.ts

// 'export' allows other files to use this definition
export type CaseStudyMeta = {
    title: string;       // e.g., "From zero-to-MVP"
    subtitle: string;    // e.g., "Unifying the compliance experience..."
    heroImage: string;   // e.g., "/images/case-study-1/hero.png"
    role: string;        // e.g., "Lead Product Designer"
    team: string[];      // An array of strings: ["PM: Alex", "Eng: Sarah"]
    timeline: string;    // e.g., "6 Months"
    tags: string[];     // An array of strings: ["UI/UX", "Product Design", "User Research"]
  };