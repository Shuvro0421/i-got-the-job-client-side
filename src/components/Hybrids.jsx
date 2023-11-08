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

    const [seeAll, setSeeAll] = useState(false)
    const handleSeeAll = () => {
        setSeeAll(!seeAll)
    }
    return (
        <div>
            {
                !seeAll ? hybrids.slice(0, 4).map((hybrid, index) => <Hybrid key={index} hybrid={hybrid}></Hybrid>)
                    : hybrids.map((hybrid, index) => <Hybrid key={index} hybrid={hybrid}></Hybrid>)
            }
            {
                hybrids.length > 4 && <button onClick={handleSeeAll} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">{seeAll ? 'see less' : 'see all'}</button>
            }
        </div>
    );
};

export default Hybrids;