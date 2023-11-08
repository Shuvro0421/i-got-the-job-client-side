import { useEffect, useState } from "react";
import AllJob from "./AllJob";
import { TbMoodSearch } from 'react-icons/tb';
import useTitle from "../hooks/useTitle";


const AllJobs = () => {
    useTitle('All Jobs')
    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);


    useEffect(() => {
        fetch('https://i-got-the-job-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => { setAllJobs(data) })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    const handleSearch = e => {
        e.preventDefault()
        const search = e.target.search.value
        const filtered = allJobs.filter(job => job.title.toLowerCase() == search.toLowerCase());
        setFilteredJobs(filtered);
    }

    const jobsJobs = filteredJobs.length == 0 ? allJobs : filteredJobs

    return (
        <div>
            <form onSubmit={handleSearch} className="form-control  flex relative md:flex-row flex-col md:justify-center md:items-center gap-2 mt-24 md:mx-0 mx-5">
                <input type="text" name="search" placeholder="Search Jobs...." className="input text-slate-600 input-bordered w-full md:w-96" />
                <div className="">
                    <button type="submit" className="btn w-full"><TbMoodSearch></TbMoodSearch></button>
                </div>
            </form>
            {
                jobsJobs.map((allJob, index) => <AllJob key={index} allJob={allJob}></AllJob>)
            }

        </div>
    );
};

export default AllJobs;