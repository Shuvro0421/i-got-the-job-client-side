import { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {setJobs(data)})
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div>
            {
                jobs.map((job , index) =><Job key={index} job={job}></Job> )
            }
        </div>
    );
};

export default Jobs;
