import { useEffect, useState } from "react";
import Hybrid from "./Hybrid";


const Hybrids = () => {
    const [hybrids, setHybrids] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const partTimeJobs = data.filter(job => job.category === "On Site Job");
                setHybrids(partTimeJobs)
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    return (
        <div>
            {
                hybrids.map((hybrid, index) => <Hybrid key={index} hybrid={hybrid}></Hybrid>)
            }
        </div>
    );
};

export default Hybrids;