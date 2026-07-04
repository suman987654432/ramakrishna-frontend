import hero from "../ads image/hero.png";
import knee from "../ads image/knee.png";
import persistent from "../ads image/persistent.png";
import difficulty from "../ads image/difficulty.png";
import swelling from "../ads image/swelling.png";
import reduced from "../ads image/reduced.png";
import pain from "../ads image/pain.png";
import limited from "../ads image/limited.png";

// Spine Surgery Images
import spineHero from "../ads image/spine_hero.webp";
import spineIllustration from "../ads image/spine.webp";
import spine1 from "../ads image/spine/spine1.webp"
import spine2 from "../ads image/spine/spine2.webp"
import spine3 from "../ads image/spine/spine3.webp"
import spine4 from "../ads image/spine/spine4.webp"
import spine5 from "../ads image/spine/spine5.webp"
import spine6 from "../ads image/spine/spine6.webp"
// import spine7 from "../ads image/spine/spine7.webp"



export const adsData = {
    'knee-replacement': {
        slug: 'knee-replacement',
        hero: {
            title: <>Get the <span className="font-bold italic text-[#0B5D85]">safest knee replacement at Atreum</span></>,
            subtitle: <><span className="font-semibold text-[#0B5D85]">Walk freely again with confidence.</span> Book your consultation with <span className="font-semibold text-[#19628D]">Atreum’s orthopaedic experts today!</span></>,
            image: hero
        },
        info: {
            title: <>What is <span className="italic font-bold">Knee <br /> Replacement</span> Surgery?</>,
            description: <><span className="font-semibold text-[#0B5D85]">Knee replacement surgery</span> is a procedure that replaces <span className="font-bold text-[#0B5D85]">damaged</span> or <span className="font-bold text-[#0B5D85]">worn-out parts</span> of the <span className="font-bold text-[#0B5D85]">knee joint</span> with <span className="font-bold text-[#0B5D85]">advanced artificial implants</span>. It is usually recommended for patients experiencing persistent <span className="font-bold text-[#0B5D85]">knee pain, stiffness, swelling</span>, or difficulty walking due to arthritis, injury, or <span className="font-bold text-[#0B5D85]">age-related wear and tear</span>.</>,
            sideText: <>A knee replacement may be <span className="font-bold text-[#0B5D85]">total</span> or <span className="font-bold text-[#0B5D85]">partial</span>, depending on the <span className="font-bold text-[#0B5D85]">extent of joint damage</span>.</>,
            bottomText: <>At Atreum, we focus on <span className="italic font-bold">precision-led treatment</span> and <span className="italic font-bold">personalised recovery plans</span> to ensure <span className="italic font-bold">better outcomes</span> and <span className="italic font-bold">faster rehabilitation</span>.</>,
            image: knee
        },
        symptoms: {
            title: <>When Should You <span className="font-bold italic">Consider Knee Replacement?</span></>,
            subtitle: "You may need to consult a specialist if you experience:",
            items: [
                { title: "PERSISTENT KNEE PAIN", image: persistent },
                { title: "DIFFICULTY WALKING OR CLIMBING STAIRS", image: difficulty },
                { title: "SWELLING AND STIFFNESS", image: swelling },
                { title: "REDUCED RANGE OF MOTION", image: reduced },
                { title: "PAIN THAT AFFECTS SLEEP", image: pain },
                { title: "LIMITED MOBILITY DESPITE MEDICATION OR PHYSIOTHERAPY", image: limited }
            ]
        },
        // benefits: {
        //     title: <>Benefits of <span className="font-bold italic">Knee Replacement Surgery</span></>,
        //     items: [
        //         "Relief from chronic knee pain",
        //         "Improved joint function and mobility",
        //         "Correction of leg deformity",
        //         "Better sleep and overall quality of life",
        //         "Return to daily activities",
        //         "Long-lasting results with advanced implants",
        //         "Enhanced physical independence",
        //         "Faster recovery with modern techniques"
        //     ]
        // },
        doctors: {
            title: <><span className="font-bold italic">Orthopaedic experts</span> <span className="font-normal">at Atreum</span></>,
            department: 'orthopaedics',
            formDepartment: 'Knee Replacement'
        }
    },
    'spine-surgery': {
        slug: 'spine-surgery',
        hero: {
            title: <>Advanced <span className="font-bold italic text-[#0B5D85]">Spine Surgery</span> for <span className="font-bold italic text-[#0B5D85]" >Herniated Discs at Atreum</span> </>,
            subtitle: <><span className="font-semibold text-[#0B5D85]">Get</span> <span className="font-semibold text-[#19628D]">lasting relief</span> and <span className="font-semibold text-[#19628D]">faster recovery</span> from  <span className="font-semibold text-[#19628D]">slipped disc pain</span> with Atreum’s <span className="font-semibold text-[#19628D]">orthopaedic experts</span></>,
            image: spineHero
        },

        info: {
            title: <>What is <span className="italic font-bold">Herniated Disc Spine Surgery? </span></>,
            description: <><span className="font-semibold text-[#0B5D85]">Herniated disc spine surgery</span> is an advanced medical procedure designed to treat conditions that affect the <span className="font-bold text-[#0B5D85]">spinal column</span>. It is usually considered when conservative treatments like physical therapy or medication prove ineffective for <span className="font-bold text-[#0B5D85]">chronic back pain, herniated discs</span>, or <span className="font-bold text-[#0B5D85]">nerve compression</span>.</>,
            sideText: <>Our specialists perform both <span className="font-bold text-[#0B5D85]">minimally invasive</span> and <span className="font-bold text-[#0B5D85]">complex spinal surgeries</span> to restore function and relieve pain.</>,
            bottomText: <>At Atreum, we utilize <span className="italic font-bold">precision diagnostics</span> and <span className="italic font-bold">advanced surgical techniques</span> to ensure the highest safety standards and <span className="italic font-bold">rapid recovery</span>.</>,
            image: spineIllustration,
            imageClass: "-translate-y-10 lg:-translate-y-16 xl:-translate-y-1 "
        },
        symptoms: {
            title: <>When Should You <span className="font-bold italic">Consider Spine Surgery?</span></>,
            subtitle: "You may need to consult a specialist if you experience:",
            items: [
                { title: "Persistent lower back or neck pain", image: spine1 },
                { title: "Pain radiating to the leg or arm", image: spine2 },
                { title: "Numbness or tingling sensation", image: spine3 },
                { title: "Muscle weakness", image: spine4 },
                { title: "Difficulty walking or standing", image: spine5 },
                { title: "Pain worsening while sitting or bending", image: spine6 },
                // { title: "Symptoms not improving with medication or physiotherapy", image: spine7 }
            ]
        },
        benefits: {
            title: <>Benefits of <span className="font-bold italic">Spine Surgery</span> for <span className="font-bold italic">Herniated Discs</span></>,
            items: [
                "RELIEF FROM SEVERE BACK AND NERVE PAIN",
                "REDUCED NUMBNESS AND TINGLING",
                "IMPROVED MOBILITY AND MOVEMENT",
                "MINIMALLY INVASIVE TREATMENT OPTIONS",
                "SHORTER HOSPITAL STAY",
                "FASTER RECOVERY",
                "REDUCED NERVE COMPRESSION",
                "BETTER QUALITY OF LIFE"
            ]
        },
        doctors: {
            title: <><span className="font-bold italic">Spine Specialists</span> <span className="font-normal">at Atreum</span></>,
            department: 'Neurology',
            formDepartment: 'Spine Surgery'
        }
    }
};
