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
    return (
        <div>
            {
                remoteJobs.map((remoteJob, index) => <RemoteJob key={index} remoteJob={remoteJob}></RemoteJob>)
            }
        </div>
    );
};

export default RemoteJobs;