import { useNavigate, useLocation } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAdsContext = location.state?.fromAds;

    return (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center px-4 text-center font-sohne">
            <div className="relative mb-8">
                <h1 className="text-[120px] sm:text-[180px] font-canela font-bold text-[#19628D]/10 leading-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl sm:text-3xl font-canela text-[#19628D] font-medium">
                        Page Not Found
                    </p>
                </div>
            </div>
            
            <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm sm:text-base leading-relaxed">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <button
                onClick={() => navigate(isAdsContext ? '/knee-replacement' : '/')}
                className="group flex items-center gap-3 bg-[#19628D] hover:bg-[#0FB1AB] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#19628D]/20 hover:shadow-[#0FB1AB]/30 active:scale-95"
            >
                <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                {isAdsContext ? 'Return to Ads Home' : 'Return to Home'}
            </button>
        </div>
    );
};

export default NotFound;
