import { useEffect, useState } from "react";
import AllJob from "./AllJob";


const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => { setAllJobs(data) })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div>
            {
                allJobs.map((allJob, index) => <AllJob key={index} allJob={allJob}></AllJob>)
            }
        </div>
    );
};

export default AllJobs;