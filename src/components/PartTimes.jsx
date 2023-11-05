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
    return (
        <div>
            {
                partTimes.map((partTime, index) => <PartTime key={index} partTime={partTime}></PartTime>)
            }
        </div>
    );
};

export default PartTimes;