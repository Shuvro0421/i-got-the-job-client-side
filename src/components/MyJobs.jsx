import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import MyJob from "./MyJob";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [allJobs, setAllJobs] = useState([]);
    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    useEffect(() => {
        if (allJobs.length > 0) {
            const filteredJobs = allJobs.filter(job => job?.name === user?.displayName);
            setMyJobs(filteredJobs);
        }
    }, [allJobs, user?.displayName]);

    return (
        <div className="mt-24">
            {
                myJobs.length > 0 ? (
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="">Title</th>
                                        <th className="">Company name</th>
                                        <th className="">Posted By</th>
                                        <th className="">Job Posting Date</th>
                                        <th className="">Job Deadline</th>
                                        <th className="">Salary Range</th>
                                        <th className="">Job Applicants Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row  */}
                                    {
                                        myJobs.map((myJob, index) => <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td className="">{myJob.title}</td>
                                            <td className="">{myJob.companyName}</td>
                                            <td className="">{myJob.name}</td>
                                            <td className="">{myJob.postingDate}</td>
                                            <td className="">{myJob.applicationDeadline}</td>
                                            <td className="">{myJob.salary}</td>
                                            <td className="">{myJob.applicantsNumber}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center gap-10">
                        <h1 className="text-blue-500 text-center md:mt-40 mt-24 md:text-4xl text-2xl font-semibold">No Jobs Added...</h1>
                        <Link to={'/addJobs'}><button className="btn btn-outline hover:bg-blue-500 text-blue-500  font-semibold normal-case text-lg hover:border-none">Add a job +</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default MyJobs;
