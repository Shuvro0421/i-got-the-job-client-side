import { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => { setJobs(data) })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    const [seeAll, setSeeAll] = useState(false)
    const handleSeeAll = () => {
        setSeeAll(!seeAll)
    }

    return (
        <div>
            {
                !seeAll ? jobs.slice(0, 4).map((job, index) => <Job key={index} job={job}></Job>)
                    : jobs.map((job, index) => <Job key={index} job={job}></Job>)
            }
            {
                jobs.length > 4 && <button onClick={handleSeeAll} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">{seeAll ? 'see less' : 'see all'}</button>
            }
        </div>
    );
};

export default Jobs;
