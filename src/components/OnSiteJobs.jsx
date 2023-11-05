import { useEffect, useState } from "react";
import OnsiteJob from "./OnsiteJob";


const OnSiteJobs = () => {
    const [onSiteJobs, setOnSiteJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const partTimeJobs = data.filter(job => job.category === "On Site Job");
                setOnSiteJobs(partTimeJobs)
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