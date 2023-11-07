import { TbMoodSearch } from 'react-icons/tb';
import Typed from 'react-typed'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Jobs from './Jobs';
import OnSiteJobs from './OnSiteJobs';
import RemoteJobs from './RemoteJobs';
import Hybrids from './Hybrids';
import PartTimes from './PartTimes';


const Banner = () => {
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
            <Tabs className={' md:text-base text-xs text-center w-full h-1/2 overflow-auto'}>
                <TabList className={'text-blue-500 font-semibold'} >
                    <Tab>All Jobs</Tab>
                    <Tab>On Site Job</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
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
            
        </div>
    );
};

export default Banner;