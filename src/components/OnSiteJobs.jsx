import { useEffect, useState } from "react";
import OnsiteJob from "./OnsiteJob";


const OnSiteJobs = () => {
    const [onSiteJobs, setOnSiteJobs] = useState([]);

    useEffect(() => {
        fetch('https://i-got-the-job-server-9mfm31f86-adibs-projects-900c94ef.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                const filterJobs = data.filter(job => job.category === "on site job");
                setOnSiteJobs(filterJobs)
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    
    const [seeAll, setSeeAll] = useState(false)
    const handleSeeAll = () => {
        setSeeAll(!seeAll)
    }
    return (
        <div>
            {
                !seeAll ? onSiteJobs.slice(0, 4).map((onSiteJob, index) => <OnsiteJob key={index} onSiteJob={onSiteJob}></OnsiteJob>)
                    : onSiteJobs.map((onSiteJob, index) => <OnsiteJob key={index} onSiteJob={onSiteJob}></OnsiteJob>)
            }
            {
                onSiteJobs.length > 4 && <button onClick={handleSeeAll} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">{seeAll ? 'see less' : 'see all'}</button>
            }
        </div>
    );
};

export default OnSiteJobs;