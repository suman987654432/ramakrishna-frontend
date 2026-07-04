import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const fetchSEO = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://atreum.onrender.com';
                
                // First get global settings
                const globalRes = await fetch(`${API_BASE_URL}/api/settings`);
                const globalData = await globalRes.json();
                
                let title = globalData?.siteTitle || 'Atreum Hospital';
                let description = globalData?.metaDescription || '';

                // Then try to fetch specific SEO for the current path
                const currentPath = location.pathname;
                const seoRes = await fetch(`${API_BASE_URL}/api/seo/by-url?url=${encodeURIComponent(currentPath)}`);
                
                if (seoRes.ok) {
                    const seoData = await seoRes.json();
                    if (seoData.metaTitle) title = seoData.metaTitle;
                    if (seoData.metaDescription) description = seoData.metaDescription;
                }

                // Update Document Title
                document.title = title;

                // Update Meta Description
                let meta = document.querySelector('meta[name="description"]');
                if (!meta) {
                    meta = document.createElement('meta');
                    meta.name = 'description';
                    document.getElementsByTagName('head')[0].appendChild(meta);
                }
                meta.content = description;

            } catch (error) {
                console.error("Failed to update SEO tags:", error);
            }
        };

        fetchSEO();
    }, [location.pathname]);

    return null;
};

export default SEOUpdater;
