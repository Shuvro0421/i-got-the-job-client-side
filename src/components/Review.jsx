import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Review = ({review}) => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const getNextReview = () => {
        setCurrentReviewIndex((currentReviewIndex + 1) % review.length);
    };
    const getPrevReview = () => {
        setCurrentReviewIndex((currentReviewIndex - 1 + review.length) % review.length);
    };
    return (
        <div>
            <div className="">
                <h1 className="lg:text-5xl md:text-4xl text-lg mt-20 text-blue-500 font-semibold text-center">See what our users say.</h1>
                <div className="flex items-center justify-center gap-10 mt-6">
                    <button className="bg-blue-300 p-2  rounded-md" onClick={getPrevReview}><RiArrowLeftSLine className="text-2xl hover:text-white text-gray-500 hover: "></RiArrowLeftSLine></button>
                    <div className="flex flex-col md items-center justify-center md:w-[1200px]">
                        <p className="text-center md:text-xl text-sm font-semibold">{review.opinion1}</p>
                        <p className="text-center md:text-base text-xs mt-3">{review.reviewerName}</p>
                    </div>
                    <button className="bg-blue-300 p-2 rounded-md" onClick={getNextReview}><RiArrowRightSLine className="text-2xl hover:text-white text-gray-500 hover: "></RiArrowRightSLine></button>
                </div>
            </div>
        </div>
    );
};

export default Review;