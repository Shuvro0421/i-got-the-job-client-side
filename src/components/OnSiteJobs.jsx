import { useEffect, useState } from "react";
import OnsiteJob from "./OnsiteJob";


const OnSiteJobs = () => {
    const [onSiteJobs, setOnSiteJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const filterJobs = data.filter(job => job.category === "on site job");
                setOnSiteJobs(filterJobs)
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    return (
        <div>
            {
                onSiteJobs.map((onSiteJob, index) => <OnsiteJob key={index} onSiteJob={onSiteJob}></OnsiteJob>)
            }
        </div>
    );
};

export default OnSiteJobs;