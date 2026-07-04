import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import HeroSection from '../components/landingPage/HeroSection'
import ContactSection from '../components/landingPage/ContactSection'
import SurgeryInfo from '../components/landingPage/SurgeryInfo'
import SymptomsSection from '../components/landingPage/SymptomsSection'
import BenefitsSection from '../components/landingPage/BenefitsSection'
import DoctorSection from '../components/landingPage/DoctorSection'
import Form from '../components/common/Form'
import { IoClose } from 'react-icons/io5'
import MapSection from '../components/HeroPage/MapSection'
import NotFound from './NotFound'

const AdsPage = ({ slug: propSlug }) => {
    const { slug: paramSlug } = useParams()
    const slug = propSlug || paramSlug
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
                const res = await fetch(`${API_BASE_URL}/api/landing-pages/${slug}`, { cache: 'no-store' });
                if (res.ok) {
                    const data = await res.json();
                    setPageData(data);
                }
            } catch (error) {
                console.error("Failed to fetch ads page data:", error);
            } finally {
                setLoading(false);
            }
        };
        if (slug) fetchPageData();
    }, [slug]);

    useEffect(() => {
        if (!isFormOpen) return undefined
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [isFormOpen])

    const openFormModal = () => setIsFormOpen(true)
    const closeFormModal = () => setIsFormOpen(false)

    if (loading) return null;

    if (!pageData) {
        return <Navigate to="/404" state={{ fromAds: true }} replace />
    }

    return (
        <>
            <HeroSection data={pageData.hero} onBookAppointment={openFormModal} />
            <ContactSection leadSource="ADS form" />
            <SurgeryInfo data={pageData.info} />
            <BenefitsSection data={pageData.benefits} />
            <DoctorSection data={pageData.doctors} onBookAppointment={openFormModal} />
            <SymptomsSection data={pageData.symptoms} />
            <MapSection />

            {isFormOpen && (
                <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
                    <div className="relative w-full max-w-xl my-2 sm:my-8 animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={closeFormModal}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[110] p-2 bg-[#19628D]/10 hover:bg-[#19628D]/20 rounded-full text-[#19628D] transition-colors"
                            aria-label="Close modal"
                        >
                            <IoClose size={20} />
                        </button>

                        <div
                            className="max-h-[calc(100dvh-1rem)] sm:max-h-[90vh] overflow-y-auto scrollbar-hide bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                        >
                            <Form inModal department={pageData.doctors.formDepartment || pageData.doctors.department} leadSource="ADS form" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AdsPage