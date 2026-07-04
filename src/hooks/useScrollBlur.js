import { useEffect, useState, useRef } from 'react';

export const useScrollBlur = (options = {}) => {
    const {
        startBlurAfter = 80,
        maxBlur = 3,
        blurSpeed = 2,
        minOpacity = 0.6
    } = options;

    const [scrollEffect, setScrollEffect] = useState({ blur: 0, opacity: 1 });
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    if (rect.top > -startBlurAfter && rect.top < startBlurAfter) {
                        setScrollEffect({ blur: 0, opacity: 1 });
                    } else if (rect.top < -startBlurAfter) {
                        const scrollDistance = Math.abs(rect.top + startBlurAfter);
                        const blurValue = Math.min((scrollDistance / (windowHeight * blurSpeed)) * maxBlur, maxBlur);
                        const opacityValue = Math.max(minOpacity, 1 - (scrollDistance / (windowHeight * blurSpeed)));
                        
                        setScrollEffect({ blur: blurValue, opacity: opacityValue });
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [startBlurAfter, maxBlur, blurSpeed, minOpacity]);

    return { scrollEffect, elementRef };
};
