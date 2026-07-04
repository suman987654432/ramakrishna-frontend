import React from 'react';
const heroortho = "https://ik.imagekit.io/omj3ygfmb/hospital/images/hero_VthCZ1fDg.avif";
const herogyna = "https://ik.imagekit.io/omj3ygfmb/hospital/images/herogyna_A-z7e2L0K.png";
const herouro = "https://ik.imagekit.io/omj3ygfmb/hospital/images/Urology_1_V3y-pX7o2.png";
const ortho1 = "https://ik.imagekit.io/omj3ygfmb/hospital/images/ortho1_eb8JB9bI.png";
const gynaIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/gyna_CnSrfkZ_.png";
const uroIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/uro_IcSOxPik.png";
const gastroIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/gastro_BmHdPZk7.png";
const gastrohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/gastrohero_B8K2lWwZ0.png";
const dermahero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/dermahero_q9y_O1Gg4.png";
const dermaIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/derma_Bn6n2NCC.png";
const endohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/endohero_Bv3D8E2xR.png";
const endoIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/endrio_DmD3RbQi.png";
const pediahero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/pediahero_Hq6e02D4E.png";
const pediaIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/pedia_DD6xnViz.png";
const neurohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/neurohero_1pYI2O_fC.png";
const neuroIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/neuro_CxHjvJQ0.png";
const nephrohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/nephrohero_1Vv3H9uL8.png";
const nephroIcon = "https://ik.imagekit.io/omj3ygfmb/hospital/images/nephro_wYBiAUmF.png";
const plasticshero1 = "https://ik.imagekit.io/omj3ygfmb/hospital/images/plasticshero1_PyjbxdmzC.png";
const plastics = "https://ik.imagekit.io/omj3ygfmb/hospital/images/plastics_9Nn5EEkzp.png";
const generalhero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/generalhero_1qoIm3vHf.png";
const general = "https://ik.imagekit.io/omj3ygfmb/hospital/images/general_6SHhS9-NU.png";
const oncohero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/oncohero_wiCgaMK0s4.png";
const onco = "https://ik.imagekit.io/omj3ygfmb/hospital/images/onco_NpRpFKyx6.png";
const vascularhero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/vascularhero_yPxMoKEw1.png";
const vas = "https://ik.imagekit.io/omj3ygfmb/hospital/images/vas_5i6uE_ncb.png";
const enthero = "https://ik.imagekit.io/omj3ygfmb/hospital/images/enthero_avyk9_1wB.png";
const ent = "https://ik.imagekit.io/omj3ygfmb/hospital/images/ent_GP7djl0GJ9.png";




export const departmentsData = {
    orthopedics: {
        id: "orthopedics",
        name: "Orthopaedics",
        hero: {
            image: heroortho,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Movement</span> that takes life <span className="font-bold italic">forward</span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Knee Replacement",
                "Joint Replacement",
                "Trauma and Fracture Care",
                "Sports Medicine & Arthroscopy",
                "Hand and Wrist Surgery",
                "Deformity Correction",
                "Paediatric Ortho",
                "Shoulder Surgery"
            ]
        },
        care: {
            icon: ortho1,
            title: "Orthopaedic Care",
            description: "Our Orthopaedics team helps you move better and live without pain. Whether you're dealing with joint pain, a sports injury, fractures, or arthritis, we provide the right care to help you recover strength, mobility, and confidence in your everyday life.",
            items: [
                "JOINT PAIN",
                "FRACTURES & TRAUMA",
                "ARTHRITIS",
                "BACK PAIN",
                "SPORTS INJURIES",
                "LIGAMENT TEARS",
                "OSTEOPOROSIS",
                "PAEDIATRIC ORTHOPAEDIC ISSUES"
            ]
        },
        doctors: {
            title: "Orthopaedic",
            subtitle: "Specialists",
            description: "The Orthopaedic Specialists at Atreum Hospitals represent a multi-disciplinary team of experienced consultants, each focused on a specific area of musculoskeletal care."
        }
    },
    'obstetrics-gynecology': {
        id: "obstetrics-gynecology",
        name: "Obstetrics & Gynecology",
        hero: {
            image: herogyna,
            centerContent: true,
            title: (
                <>
                    We understand <span className="font-bold italic">womanhood</span><br />like no one else
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Normal Delivery",
                "Caesarean Section (C-Section)",
                "PCOD/PCOS Management",
                "Infertility Treatment",
                "Menopause Care",
                "High-Risk Pregnancy",
                "Laparoscopic Gynaecology Surgery",
                "Hysterectomy"
            ]
        },
        care: {
            icon: gynaIcon,
            title: "Obstetrics and Gynecology Care",
            description: "Our Gynaecology department supports women’s health at every stage of life. From routine check-ups and menstrual health to reproductive care and menopause management, we offer compassionate care in a safe and supportive environment.",
            items: [
                "ANTENATAL CARE",
                "PREGNANCY CONFIRMATION & EARLY SCANS",
                "ROUTINE ANC CHECK-UPS",
                "HIGH-RISK PREGNANCY MANAGEMENT",
                "GESTATIONAL DIABETES & HYPERTENSION CARE",
                "GENERAL GYNECOLOGY",
                "PCOS/PCOD MANAGEMENT",
                "MENSTRUAL DISORDERS",
                "FIBROID UTERUS",
                "OVARIAN CYST",
                "MENOPAUSE CLINIC"
            ]
        },
        doctors: {
            title: "Obstetrics &",
            subtitle: " Specialists",
            description: "The Obstetrics & Gynaecology Specialists at Atreum Hospitals represent a multidisciplinary team of experienced consultants, each focused on comprehensive women's healthcare. Working within a unified clinical framework, they combine specialised expertise with collaborative decision-making to deliver precise, patient-centred treatment."
        }
    },
    urology: {
        id: "urology",
        name: "Urology",
        hero: {
            image: herouro,
            centerContent: true,
            title: (
                <>
                    Restoring <span className="font-bold italic">Comfort, <br /> One Step</span> at a Time
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Kidney Stones",
                "Urinary Tract Infection (UTI)",
                "Prostate Issues",
                "Bladder Problems",
                "Urological Cancers",
                "Infertility and Sexual Health",
                "Paediatric Urology",
                "Reconstructive Urology"
            ]
        },
        care: {
            icon: uroIcon,
            title: "Urology Care ",
            description: "The Urology department cares for conditions related to the urinary system and men’s health. From kidney stones and urinary infections to prostate concerns, our specialists focus on accurate diagnosis and effective treatment so you can feel comfortable and healthy again.",
            items: [
                "KIDNEY STONES",
                "PROSTATE ENLARGEMENT (BPH)",
                "URINARY TRACT INFECTION (UTI)",
                "URINARY INCONTINENCE",
                "MALE INFERTILITY",
                "ERECTILE DYSFUNCTION",
                "HEMATURIA (BLOOD IN URINE)",
                "BLADDER DISORDERS"
            ]
        },
        doctors: {
            title: "Urology",
            subtitle: "Specialists",
            description: "Our Urology specialists combine clinical excellence with advanced surgical techniques to provide comprehensive care for all urological conditions with precision and empathy."
        }
    },
    neurology: {
        id: "neurology",
        name: "Neurology",
        hero: {
            image: neurohero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Healing </span> the mind, <br /> <span className="font-bold italic">Empowering </span> life
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Stroke (Brain attack)",
                "Epilepsy / Seizure disorders",
                "Headache & Migraine",
                "Parkinson’s disease",
                "Neuropathy (Nerve weakness)",
                "Multiple Sclerosis",
                "Dementia / Memory Disorders",
                "Vertigo"
            ]
        },
        care: {
            icon: neuroIcon,
            title: "Neurology Care",
            description: "The Neurology department focuses on conditions affecting the brain, spine, and nerves. Whether you are experiencing frequent headaches, dizziness, stroke symptoms, or other neurological concerns, our specialists work to diagnose the cause and guide you toward the right treatment.",
            items: [
                "STROKE (BRAIN ATTACK)",
                "EPILEPSY / SEIZURE DISORDERS",
                "HEADACHE & MIGRAINE",
                "PARKINSON’S DISEASE",
                "NEUROPATHY (NERVE WEAKNESS)",
                "MULTIPLE SCLEROSIS",
                "DEMENTIA / MEMORY DISORDERS",
                "VERTIGO",
                "MYASTHENIA GRAVI"
            ]
        },
        doctors: {
            title: "Neurology",
            subtitle: "Specialists",
            description: "Our Neurology specialists are leaders in treating complex brain and nerve conditions with compassion and precision."
        }
    },
    gastroenterology: {
        id: "gastroenterology",
        name: "Gastroenterology",
        hero: {
            image: gastrohero, // Placeholder
            centerContent: true,
            title: (
                <>

                    Helping You Feel <span className="font-bold italic">Good,</span> <br /> From the <span className="font-bold italic">Inside Out</span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Acid Reflux / GERD",
                "Gastritis & Peptic Ulcer",
                "IBS (Irritable Bowel Syndrome)",
                "Inflammatory Bowel Disease (IBD)",
                "Liver Diseases (Fatty Liver, Hepatitis)",
                "Pancreatitis",
                "GI Bleeding",
                "Jaundice"
            ]
        },
        care: {
            icon: gastroIcon,
            title: "Gastroenterology Care",
            description: "The Gastroenterology department helps diagnose and treat digestive issues affecting the stomach, liver, intestines, pancreas, and gallbladder. If you're experiencing acidity, stomach discomfort, liver problems, or digestive concerns, our specialists help you find relief and restore digestive health.",
            items: [
                "ACID REFLUX / GERD",
                "GASTRITIS & PEPTIC ULCER",
                "IBS (IRRITABLE BOWEL SYNDROME)",
                "INFLAMMATORY BOWEL DISEASE (IBD)",
                "LIVER DISEASES (FATTY LIVER, HEPATITIS)",
                "PANCREATITIS",
                "GI BLEEDING",
                "JAUNDICE"
            ],
            sections: [
                {
                    title: "DIAGNOSTIC & THERAPEUTIC PROCEDURES",
                    items: [
                        "Upper GI Endoscopy",
                        "Colonoscopy",
                        "ERCP",
                        "Sigmoidoscopy",
                        "Endoscopic Polypectomy",
                        "Variceal banding",
                        "PEG tube insertion"
                    ]
                },
                {
                    title: "SURGERIES PERFORMED",
                    items: [
                        "Upper GI Endoscopy",
                        "Colonoscopy",
                        "ERCP",
                        "Sigmoidoscopy",
                        "Endoscopic Polypectomy",
                        "Variceal banding",
                        "PEG tube insertion"
                    ]
                },
                {
                    title: "EMERGENCY GI SURGERIES",
                    items: [
                        "Upper GI Endoscopy",
                        "Colonoscopy",
                        "ERCP",
                        "Sigmoidoscopy",
                        "Endoscopic Polypectomy",
                        "Variceal banding",
                        "PEG tube insertion"
                    ]
                }
            ]
        },

        doctors: {
            title: "Gastroenterology",
            subtitle: "Specialists",
            description: "Our Gastroenterology specialists provide expert care for a wide range of digestive and liver conditions, combining advanced diagnostics with a patient-centered approach."
        }
    },
    dermatology: {
        id: "dermatology",
        name: "Dermatology",
        hero: {
            image: dermahero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Care </span>that makes you glow <br /> from <span className="font-bold italic">within</span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Acne & Scarring",
                "Skin Allergies",
                "Psoriasis & Eczema",
                "Mole Mapping",
                "Skin Biopsies",
                "Hair & Nail Disorders",
                "Pigmentation Treatment",
                "Skin Infections"
            ]
        },
        care: {
            icon: dermaIcon,
            title: "Dermatology Care",
            description: "The Dermatology department cares for conditions affecting the skin, hair, and nails. From acne and allergies to chronic skin conditions, our specialists help you achieve healthier skin with the right diagnosis and treatment.",
            items: [
                "SKIN BIOPSIES",
                "ALLERGY TESTING",
                "MOLE MAPPING",
                "PHOTOTHERAPY FOR PSORIASIS",
                "ACNE TREATMENT"
            ]
        },
        doctors: {
            title: "Dermatology",
            subtitle: "Specialists",
            description: "Our Dermatology specialists combine clinical expertise with a focus on skin health to provide comprehensive care for all dermatological conditions."
        }
    },
    endocrinology: {
        id: "endocrinology",
        name: "Endocrinology",
        hero: {
            image: endohero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Balance</span> that nurtures your <span className="font-bold italic">well-being</span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Diabetes (Type 1 & 2)",
                "Thyroid Disorders",
                "PCOS / Hormonal Imbalance",
                "Metabolic Bone Disease",
                "Obesity & Weight Management",
                "Pituitary Disorders",
                "Adrenal Gland Issues",
                "Growth Disorders"
            ]
        },
        care: {
            icon: endoIcon,
            title: "Endocrinology Care",
            description: "The Endocrinology department focuses on hormone-related health concerns such as diabetes, thyroid disorders, and metabolic conditions. Our specialists work closely with patients to create personalized care plans that support long-term health and balance.",
            items: [
                "DIABETES MANAGEMENT",
                "THYROID DISORDERS",
                "METABOLIC BONE DISEASE CARE",
                "HORMONE REPLACEMENT THERAPY"
            ]
        },
        doctors: {
            title: "Endocrinology",
            subtitle: "Specialists",
            description: "Our Endocrinology specialists represent a multi-disciplinary team focused on hormonal health and metabolic wellness, providing precise and empathetic care."
        }
    },
    pediatrics: {
        id: "pediatrics",
        name: "Pediatrics",
        hero: {
            image: pediahero,
            centerContent: true,
            title: (
                <>
                    Trust the  <span className="font-bold italic">experts </span> for, <br />your <span className="font-bold italic">little ones </span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Newborn Check-ups",
                "Growth & Development Monitoring",
                "Vaccination Programs",
                "Fever & Infection Management",
                "Asthma & Allergy Clinic",
                "Nutritional Counseling",
                "School Health Programs",
                "Pediatric Emergency Care"
            ]
        },
        care: {
            icon: pediaIcon,
            title: "Pediatrics Care",
            description: "Our Pediatrics department is dedicated to caring for infants, children, and teenagers. From routine health check-ups and vaccinations to treating childhood illnesses, we ensure young patients receive gentle, attentive care in a child-friendly environment.",
            items: [
                "NEWBORN CHECK-UPS",
                "GROWTH & DEVELOPMENT MONITORING",
                "VACCINATION PROGRAMS",
                "FEVER & INFECTION MANAGEMENT",
                "ASTHMA & ALLERGY CLINIC",
                "NUTRITIONAL COUNSELING",
                "SCHOOL HEALTH PROGRAMS"
            ]
        },
        doctors: {
            title: "Pediatric",
            subtitle: "Specialists",
            description: "Our Pediatric specialists combine clinical excellence with a gentle, child-friendly approach to ensure the best health outcomes for your little ones."
        }
    },
    nephrology: {
        id: "nephrology",
        name: "Nephrology",
        hero: {
            image: nephrohero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Guiding </span> Your Body <br /> Back in <span className="font-bold italic">Sync </span>
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Chronic Kidney Disease (CKD)",
                "Kidney Stones",
                "Dialysis Requirement",
                "High Blood Pressure (Renal)",
                "Proteinuria / Hematuria",
                "Electrolyte Imbalance",
                "Urinary Tract Infections",
                "Kidney Transplant Follow-up"
            ]
        },
        care: {
            icon: nephroIcon,
            title: "Nephrology Care",
            description: "Our Nephrology team cares for the health of your kidneys. From managing chronic kidney disease and high blood pressure to supporting patients who require dialysis, we focus on protecting kidney function and helping you maintain overall well-being.",
            items: [
                "CHRONIC KIDNEY DISEASE (CKD)",
                "ACUTE KIDNEY INJURY (AKI)",
                "DIABETIC NEPHROPATHY",
                "HYPERTENSIVE KIDNEY DISEASE",
                "NEPHROTIC SYNDROME",
                "URINARY TRACT DISORDERS",
                "ELECTROLYTE IMBALANCE",
                "KIDNEY STONES (MEDICAL MANAGEMENT)",
                "24/7 DIALYSIS SUPPORT",
                "EMERGENCY DIALYSIS"
            ]
        },
        doctors: {
            title: "Nephrology",
            subtitle: "Specialists",
            description: "Our Nephrology specialists combine clinical excellence with advanced renal care to provide comprehensive support for patients with kidney-related conditions."
        }
    },
    plastics: {
        id: "plastics",
        name: "Plastics Surgery",
        hero: {
            image: plasticshero1,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Unique care, </span> <br />just the way you like it
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Reconstructive Surgery",
                "Burn care & Management",
                "Scar Revision",
                "Aesthetic Procedures",
                "Hand & Wrist Surgery",
                "Facial Reconstruction",
                "Body Contouring",
                "Congenital Deformities"
            ]
        },
        care: {
            icon: plastics,
            title: "Plastics Care",
            description: "The Plastic Surgery department offers procedures that restore function and improve appearance. From reconstructive treatments after injury or illness to cosmetic enhancements, our specialists focus on safe procedures and natural-looking results.",
            items: [
                "RECONSTRUCTIVE SURGERY AFTER TRAUMA/CANCER",
                "BURN CARE",
                "SCAR REVISION",
                "AESTHETIC PROCEDURES"
            ]
        },
        doctors: {
            title: "Plastics",
            subtitle: "Specialists",
            description: "Our Plastic Surgeons represent a team of highly skilled consultants focused on reconstructive and aesthetic excellence."
        }
    },
    'general-surgery': {
        id: "general-surgery",
        name: "General Surgery",
        hero: {
            image: generalhero,
            centerContent: true,
            title: (
                <>
                    Where<span className="font-bold italic">care, comfort, </span> and <br /> <span className="font-bold italic">excellence </span> come together
                </>
            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Appendicitis",
                "Hernia (Inguinal, Umbilical)",
                "Gallbladder Stones",
                "Piles / Fissure / Fistula",
                "Thyroid Surgery",
                "Breast Lump Removal",
                "Laparoscopic Surgery",
                "Trauma Surgery"
            ]
        },
        care: {
            icon: general,
            title: "General Surgery Care",
            description: "Our General Surgery department provides surgical care for a wide range of medical conditions. Using modern techniques and a patient-focused approach, our surgeons aim to ensure safe procedures and smoother recovery for every patient.",
            items: [
                "APPENDICITIS",
                "HERNIA (INGUINAL, UMBILICAL, INCISIONAL)",
                "GALLBLADDER STONES",
                "PILES / FISSURE / FISTULA",
                "THYROID DISORDERS",
                "BREAST LUMPS",
                "ABSCESS DRAINAGE",
                "SOFT TISSUE TUMORS"
            ]
        },
        doctors: {
            title: "General",
            subtitle: "Specialists",
            description: "Our General Surgery specialists represent a team of experienced surgeons providing comprehensive surgical management for a broad spectrum of diseases."
        }
    },
    oncology: {
        id: "oncology",
        name: "Oncology",
        hero: {
            image: oncohero,
            centerContent: true,
            title: (
                <>
                    Delivering <span className="font-bold italic">hope </span> and <span className="font-bold italic">expertise </span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Cancer Screening",
                "Chemotherapy",
                "Targeted Therapy",
                "Immunotherapy",
                "Hormonal Therapy",
                "Palliative Care",
                "Early Detection",
                "Tumor Board Consultation"
            ]
        },
        care: {
            icon: onco,
            title: "Oncology Care",
            description: "The Oncology department provides compassionate care for patients facing cancer. With a focus on early detection, accurate diagnosis, and coordinated treatment, our team supports patients and their families throughout every step of the journey.",
            items: [
                "CHEMOTHERAPY (DAY-CARE MODEL)",
                "TARGETED THERAPY",
                "IMMUNOTHERAPY",
                "HORMONAL THERAPY",
                "PALLIATIVE CARE",
                "CANCER SCREENING PROGRAMS"
            ]
        },
        doctors: {
            title: "Oncology",
            subtitle: "Specialists",
            description: "Our Oncology specialists combine clinical expertise with a compassionate approach to provide advanced cancer care and support throughout the treatment process."
        }
    },
    'vascular-surgery': {
        id: "vascular-surgery",
        name: "Vascular Surgery",
        hero: {
            image: vascularhero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Timely care, </span>when it <br /> matters the  <span className="font-bold italic">most </span>
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Peripheral Artery Disease (PAD)",
                "Diabetic Foot Ulcers",
                "Deep Vein Thrombosis (DVT)",
                "Aneurysms (Non-Cardiac)",
                "Varicose Veins",
                "Carotid Artery Disease",
                "Chronic Non-healing Wounds",
                "Lymphedema Management"
            ]
        },
        care: {
            icon: vas,
            title: "Vascular Care",
            description: "The Vascular Surgery department treats conditions affecting blood vessels and circulation. From varicose veins to complex vascular conditions, our specialists focus on improving blood flow and helping you maintain better overall health.",
            items: [
                "PERIPHERAL ARTERY DISEASE (PAD)",
                "DIABETIC FOOT ULCERS",
                "DEEP VEIN THROMBOSIS (DVT)",
                "ANEURYSMS (NON-CARDIAC)",
                "VARICOSE VEINS",
                "CAROTID ARTERY DISEASE",
                "CHRONIC NON-HEALING WOUNDS"
            ]
        },
        doctors: {
            title: "Vascular",
            subtitle: "Specialists",
            description: "Our Vascular Surgery specialists represent a team of experienced consultants focused on comprehensive circulatory health and advanced surgical interventions."
        }
    },
    ent: {
        id: "ent",
        name: "ENT",
        hero: {
            image: enthero,
            centerContent: true,
            title: (
                <>
                    <span className="font-bold italic">Caring </span> For the Senses <br /> That  <span className="font-bold italic">Connect You </span>  to Life
                </>

            ),
            formTitle: "Unconditional care",
            formSubtitle: "begins with knowing you",
            concerns: [
                "Sinusitis",
                "Deviated Nasal Septum (DNS)",
                "Tonsillitis",
                "Hearing Loss",
                "Vertigo",
                "Ear Infections",
                "Nasal Polyps",
                "Voice Disorders"
            ]
        },
        care: {
            icon: ent,
            title: "ENT Care",
            description: "Our ENT department treats conditions related to the ear, nose, and throat. Whether it’s hearing issues, sinus problems, throat infections, or voice concerns, our specialists provide expert care to help you breathe, hear, and speak comfortably.",
            items: [
                "SINUSITIS",
                "DEVIATED NASAL SEPTUM (DNS)",
                "TONSILLITIS",
                "HEARING LOSS",
                "VERTIGO",
                "EAR INFECTIONS",
                "NASAL POLYPS",
                "VOICE DISORDERS"
            ]
        },
        doctors: {
            title: "ENT",
            subtitle: "Specialists",
            description: "Our ENT specialists provide comprehensive care for ear, nose, and throat conditions, utilizing advanced diagnostic tools and surgical techniques."
        }
    }
};









