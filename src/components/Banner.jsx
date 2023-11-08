import { TbMoodSearch } from 'react-icons/tb';
import Typed from 'react-typed'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobs from './Jobs';
import OnSiteJobs from './OnSiteJobs';
import RemoteJobs from './RemoteJobs';
import Hybrids from './Hybrids';
import PartTimes from './PartTimes';
import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useEffect } from 'react';


const Banner = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const getNextReview = () => {
        setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
    };
    const getPrevReview = () => {
        setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
    };



    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images3.alphacoders.com/813/813087.jpg)' }}>
                <div className="hero-overlay bg-slate-900 bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">

                        <h1 className="mb-5 md:text-5xl text-2xl font-bold">We Are <Typed className='text-blue-400' strings={[' an opportunity', ' a profit', ' a support']} typeSpeed={100} backSpeed={50} loop></Typed> </h1>

                        <p className="mb-5 md:text-base text-sm">{`"Opportunities don't happen. You create them." This powerful quote by Chris Grosser encapsulates the essence of proactive and deliberate action in shaping one's destiny.`}</p>
                        <div className="form-control flex relative md:flex-row flex-col md:justify-center md:items-center gap-2 mt-10 md:mx-0 mx-5">
                            <input type="text" placeholder="Search Jobs...." className="input text-slate-600 input-bordered w-full md:w-96" />
                            <button className="btn absolute right-0"><TbMoodSearch></TbMoodSearch></button>
                        </div>
                    </div>
                </div>

            </div>
            <Tabs className={' md:text-base text-xs text-center w-full'}>
                <TabList className={'text-blue-500 font-semibold'}>
                    <Tab selectedClassName="selected-tab">All Jobs</Tab>
                    <Tab selectedClassName="selected-tab">On Site Job</Tab>
                    <Tab selectedClassName="selected-tab">Remote Job</Tab>
                    <Tab selectedClassName="selected-tab">Hybrid</Tab>
                    <Tab selectedClassName="selected-tab">Part Time</Tab>
                </TabList>

                <TabPanel>
                    <Jobs></Jobs>
                </TabPanel>
                <TabPanel>
                    <OnSiteJobs></OnSiteJobs>
                </TabPanel>
                <TabPanel>
                    <RemoteJobs></RemoteJobs>
                </TabPanel>
                <TabPanel>
                    <Hybrids></Hybrids>
                </TabPanel>
                <TabPanel>
                    <PartTimes></PartTimes>
                </TabPanel>
            </Tabs>
            <div>
                <h1 className='text-blue-500 md:text-5xl text-2xl font-semibold my-8 text-center'>About Us</h1>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://devtechnosys.com/insights/wp-content/uploads/2022/03/Job-Seeker.gif)' }}>
                    <div className="hero-overlay bg-black bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-blue-500 text-5xl font-bold">I Got The Job</h1>
                            <p className="mb-5">At I Got the Job, we are dedicated to revolutionizing the way individuals discover their dream careers and companies connect with top-tier talent. Our platform serves as the nexus where aspirations meet opportunities, empowering both job seekers and employers. <br /><br />

                                <span className='text-blue-500 font-semibold'>Our Mission: <br /></span>
                                We are passionate about transforming the job search experience. Our mission is to simplify the process, making it more accessible, transparent, and efficient for all involved. <br /><br />

                                <span className='text-blue-500 font-semibold'>What We Offer: <br /></span>

                                <div className='ml-5'>
                                    For Job Seekers: <br />
                                    We provide a comprehensive array of job listings across various industries, ensuring that you have access to diverse opportunities. Our user-friendly platform makes the search for your ideal job simple and effective. <br />

                                    For Employers: <br /> We offer a space where you can showcase your company and its job openings to a pool of talented individuals. Our platform streamlines the recruitment process, making it easier for you to find the perfect candidates for your organization. <br /> <br />
                                </div>


                                <span className='text-blue-500 font-semibold'>Why Choose I Got the Job?<br /></span>
                                <div className='ml-5 flex md:flex-row-reverse flex-col-reverse items-center justify-between '>
                                    <div>
                                        User-Centric Approach: <br /> We prioritize user experience, aiming to make the job search and hiring process as seamless and stress-free as possible. <br />

                                        Diversity and Inclusively: <br /> We believe in equal opportunities for all. Our platform fosters diversity and inclusively, connecting companies with a wide range of talented individuals from various backgrounds. <br />

                                        Innovation: <br /> We continually evolve to incorporate the latest technologies and trends in the employment sector, ensuring that our users benefit from cutting-edge features and a competitive edge. <br />

                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <span className='text-blue-500  font-semibold'>Meet The Man: <br /> Md. Adib Arman Shuvro</span> <br />
                                        <img src="https://i.ibb.co/5nBC6Df/adib-Image.png" alt="" />
                                    </div>
                                    <br /> <br />
                                </div>
                                <br /><br />
                                Thank you for choosing I Got the Job. Join us in this journey toward fulfilling career opportunities and building exceptional teams!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-96 lg:h-80 md:h-96">
                <h1 className="lg:text-5xl md:text-4xl text-lg mt-20 text-blue-500 font-semibold text-center">See what our users say.</h1>
                <div className="flex items-center justify-center gap-10 mt-6">
                    <button className="bg-blue-300 p-2  rounded-md" onClick={getPrevReview}><RiArrowLeftSLine className="text-2xl hover:text-white text-gray-500 hover: "></RiArrowLeftSLine></button>
                    <div className="flex items-center justify-center gap-10 mt-6 w-[1200px] h-20 overflow-auto">

                        <div className="flex flex-col items-center justify-center w-full max-w-lg">
                            <p className="text-center md:text-xl text-sm font-semibold">
                                {reviews.length > 0 && reviews[currentReviewIndex]?.opinion1}
                            </p>
                            <p className="text-center md:text-base text-xs mt-3">
                                {reviews.length > 0 && reviews[currentReviewIndex]?.reviewerName}
                            </p>
                        </div>

                    </div>

                    <button className="bg-blue-300 p-2 rounded-md" onClick={getNextReview}><RiArrowRightSLine className="text-2xl hover:text-white text-gray-500 hover: "></RiArrowRightSLine></button>

                </div>
            </div>
        </div>
    );
};

export default Banner;