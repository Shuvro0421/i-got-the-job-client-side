import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "./AuthProvider";
import { usePDF } from 'react-to-pdf';

const AppliedJobs = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'appliedJobs.pdf' });
    useTitle('Applied Jobs')
    const { user } = useContext(AuthContext);
    const [allJobs, setAllJobs] = useState([]);
    const [myJobs, setMyJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all"); // Default value is "all"

    useEffect(() => {
        fetch(`https://i-got-the-job-server.vercel.app/appliedJobs?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, [user?.email]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    useEffect(() => {
        if (allJobs.length > 0) {
            const filteredJobs = allJobs?.filter(job => job?.name === user?.displayName);
            setMyJobs(filteredJobs);
        }
    }, [allJobs, user?.displayName]);

    useEffect(() => {
        const filteredJobsByCategory = selectedCategory !== "all" ?
            allJobs.filter(job => job?.category === selectedCategory) :
            allJobs;

        const filteredJobsByUserAndCategory = filteredJobsByCategory.filter(job => job?.name === user?.displayName);

        setMyJobs(filteredJobsByUserAndCategory);
    }, [selectedCategory, allJobs, user?.displayName]);

    return (
        <div className="mt-24">
            {
                myJobs.length > 0 ? (
                    <div>
                        <div className="flex items-center justify-between mx-4">
                            <div className="flex items-center ml-4">
                                <label className="text-blue-500 font-semibold" htmlFor="category">Category:</label>
                                <select className="ml-2 rounded-md text-blue-500 font-semibold bg-transparent" name="category" id="category" onChange={handleCategoryChange} value={selectedCategory}>
                                    <option value="all">all</option>
                                    <option value="on site job">on site job</option>
                                    <option value="part time">part time</option>
                                    <option value="remote job">remote job</option>
                                    <option value="hybrid">hybrid</option>
                                </select>
                            </div>
                            <div>
                                <button className="btn btn-outline normal-case text-sm border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-none" onClick={() => toPDF()}>Download PDF</button>
                            </div>
                        </div>

                        <div ref={targetRef} className="overflow-x-auto">
                            <table className="table  shadow-2xl rounded-lg mt-10 w-4/5  m-auto text-center">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="">Title</th>
                                        <th className="">Company name</th>
                                        <th className="">Category</th>
                                        <th className="">Applied By</th>
                                        <th className="">Salary Range</th>
                                        <th className="">Email</th>
                                        <th className="">Resume</th>
                                    </tr>
                                </thead>
                                <tbody className="text-blue-500 font-semibold">
                                    {/* row  */}
                                    {
                                        myJobs.map((myJob, index) => (
                                            <tr key={index}>
                                                <td className="">{myJob.title}</td>
                                                <td className="">{myJob.companyName}</td>
                                                <td className="">{myJob.category}</td>
                                                <td className="">{myJob.name}</td>
                                                <td className="">{myJob.salary}</td>
                                                <td className="">{myJob.email}</td>
                                                <td className="">{myJob.resume}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center my-20 gap-10">
                        <h1 className="text-blue-500 text-center md:mt-40 mt-24 md:text-4xl text-2xl font-semibold">Not Applied Yet...</h1>
                        <Link to={'/allJobs'}><button className="btn btn-outline hover:bg-blue-500 text-blue-500  font-semibold normal-case text-lg hover:border-none">Apply for a job +</button></Link>
                    </div>
                )
            }

        </div>
    );
};

export default AppliedJobs;
