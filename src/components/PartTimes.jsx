import { useEffect, useState } from "react";
import PartTime from "./PartTime";


const PartTimes = () => {
    const [partTimes, setPartTimes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const filterJobs = data.filter(job => job.category === "part time");
                setPartTimes(filterJobs)
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
                !seeAll ? partTimes.slice(0, 4).map((partTime, index) => <PartTime key={index} partTime={partTime}></PartTime>)
                    : partTimes.map((partTime, index) => <PartTime key={index} partTime={partTime}></PartTime>)
            }
            {
                partTimes.length > 4 && <button onClick={handleSeeAll} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">{seeAll ? 'see less' : 'see all'}</button>
            }
        </div>
    );
};

export default PartTimes;