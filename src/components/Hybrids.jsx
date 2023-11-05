import { useEffect, useState } from "react";
import Hybrid from "./Hybrid";


const Hybrids = () => {
    const [hybrids, setHybrids] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const filterJobs = data.filter(job => job.category === "hybrid");
                setHybrids(filterJobs)
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