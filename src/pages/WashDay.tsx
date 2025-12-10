import { GlassPhoneSlider } from '../components/GlassPhoneSlider';
import CaseStudyLayout from '../components/CaseStudyLayout';
import type { CaseStudyMeta } from '../types/casestudy';
import { CSBrowserFrame} from '../components/CaseStudyBlocks';
import AnimateOnScroll from '../components/AnimateOnScroll';


export default function WashDay() {
    const meta: CaseStudyMeta = {
        title: "Wash Day",
        subtitle: "Building a personalized hair care platform from the ground up.", // Fallback for SEO
        heroImage: "/src/images/washday_cs_hero.png", 
        role: "",
        team: [],
        timeline: "",
        tags: []
    };

    const appScreens = [
        '/src/images/WashDay_SignUp1.png',
        '/src/images/WashDay_SignUp2.png',
        '/src/images/WashDay_SignUp3.png',
        '/src/images/WashDay_Onboarding_1.png',
        '/src/images/WashDay_Onboarding_2.png',
        '/src/images/WashDay_Onboarding_3.png',
        '/src/images/WashDay_Onboarding_4.png',
        '/src/images/WashDay_Onboarding_5.png',
        '/src/images/WashDay_Onboarding_6.png',
        '/src/images/WashDay_Home1.png',
        '/src/images/WashDay_Explore.png',
        '/src/images/WashDay_Routines.png',
        '/src/images/WashDay_Products.png',
        '/src/images/WashDay_Shampoos.png',
        '/src/images/WashDay_Shampoo_Detail.png',
        '/src/images/WashDay-Search_Active.png',
        '/src/images/WashDay_SearchCamera.png',
        '/src/images/WashDay_SearchCamera_Upload.png',
        '/src/images/WashDay_SearchCamera_Results.png',
      ];

    return (
        <CaseStudyLayout meta={meta}>
            {/* --- 1. HERO SECTION (With Glow) --- */}
            <div className="cs-hero-glow-wrapper">
                <AnimateOnScroll>
                    <div className="container">
                        <CSBrowserFrame>
                            <img
                                src={meta.heroImage}
                                alt="Wash Day Hero"
                                className="cs-hero-image cs-hero-image-mobile cs-img-no-shadow"
                            />
                        </CSBrowserFrame>
                    </div>
                </AnimateOnScroll>
            </div>
{/* --- 2. HEADER BLOCK --- */}
<AnimateOnScroll>
    <div className="container">
                    <div className="cs-header-block">
                        <h1 className="cs-title">
                        Building a personalized hair care platform from the ground up
                        </h1>
                        {/* Tags */}
                        <div className="cs-tags-wrapper">
                            <span className="tag-primary">Visual design</span>
                            <span className="tag-primary">End-to-end design</span>
                            <span className="tag-primary">Side project</span>
                        </div>

                        {/* Date */}
                        <span className="cs-date">2021 - ???</span>

                        {/* Intro Paragraph */}
                        <p className="cs-intro-text">
                            Wash Day is a mobile app and my personal side project that fosters knowledge about natural hair care by generating personalized hair care routines based on the user's hair type and goals.           </p>

                    </div>
                    </div>
                </AnimateOnScroll>
                

               
                
            <AnimateOnScroll>
            <div className="container">
         
         {/* The Slider Component */}
         <GlassPhoneSlider slides={appScreens} />
         
       </div>
            </AnimateOnScroll>
        </CaseStudyLayout>
    );
}