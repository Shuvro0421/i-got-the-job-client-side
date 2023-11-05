import { useEffect, useState } from "react";
import RemoteJob from "./RemoteJob";


const RemoteJobs = () => {
    const [remoteJobs, setRemoteJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const partTimeJobs = data.filter(job => job.category === "Remote Job");
                setRemoteJobs(partTimeJobs)
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