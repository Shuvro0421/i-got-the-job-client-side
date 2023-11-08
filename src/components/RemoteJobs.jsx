import { useEffect, useState } from "react";
import RemoteJob from "./RemoteJob";


const RemoteJobs = () => {
    const [remoteJobs, setRemoteJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const filterJobs = data.filter(job => job.category === "remote job");
                setRemoteJobs(filterJobs)
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
                !seeAll ? remoteJobs.slice(0, 4).map((remoteJob, index) => <RemoteJob key={index} remoteJob={remoteJob}></RemoteJob>)
                    : remoteJobs.map((remoteJob, index) => <RemoteJob key={index} remoteJob={remoteJob}></RemoteJob>)
            }
            {
                remoteJobs.length > 4 && <button onClick={handleSeeAll} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">{seeAll ? 'see less' : 'see all'}</button>
            }
        </div>
    );
};

export default RemoteJobs;