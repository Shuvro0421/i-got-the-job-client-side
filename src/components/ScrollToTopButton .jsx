import { useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowUp } from 'react-icons/md';


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
        // Clean up the event listener
        return () => {
            document.removeEventListener('scroll', () => { });
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-4  shadow"
                >
                    <MdKeyboardArrowUp></MdKeyboardArrowUp>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
