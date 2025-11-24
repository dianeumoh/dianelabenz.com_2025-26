// src/components/case-study/CaseStudyLayout.tsx
import type { ReactNode } from 'react';
import type { CaseStudyMeta } from '../types/casestudy';

type Props = {
  meta: CaseStudyMeta;
  children: ReactNode;
};

export default function CaseStudyLayout({ children }: Props) {
  return (
    <>
      <main className="case-study-main">
        {/* We removed the automatic hero/title rendering.
            Now we just render the children, allowing full control per page. 
        */}
        {children} 
        
        {/* Standard Navigation footer can stay */}
        <div className="container">
           <nav className="cs-next-project">
             {/* ... nav ... */}
           </nav>
        </div>
      </main>
    </>
  );
}