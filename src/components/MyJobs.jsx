import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import Swal from 'sweetalert2'




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


    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                            const deleteGone = myJobs.filter(singleCart => singleCart._id !== _id)
                            setMyJobs(deleteGone)
                        }
                    })
            }
        })

    }

    

    return (
        <div className="mt-24">
            {
                myJobs.length > 0 ? (
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table  shadow-2xl rounded-lg mt-10 w-4/5  m-auto text-center">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th className="">Title</th>
                                        <th className="">Company name</th>
                                        <th className="">Category</th>
                                        <th className="">Posted By</th>
                                        <th className="">Job Posting Date</th>
                                        <th className="">Job Deadline</th>
                                        <th className="">Salary Range</th>
                                        <th className="">Job Applicants Number</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="text-blue-500 font-semibold">
                                    {/* row  */}
                                    {
                                        myJobs.map((myJob, index) => <tr key={index}>

                                            <td className="">{myJob.title}</td>
                                            <td className="">{myJob.companyName}</td>
                                            <td className="">{myJob.category}</td>
                                            <td className="">{myJob.name}</td>
                                            <td className="">{myJob.postingDate}</td>
                                            <td className="">{myJob.applicationDeadline}</td>
                                            <td className="">{myJob.salary}</td>
                                            <td className="">{myJob.applicantsNumber}</td>
                                            <td>
                                                <div className="flex justify-between">
                                                    <div onClick={() => handleDelete(myJob._id)} className="btn  btn-ghost text-base hover:text-red-500 hover:bg-blue-200">
                                                        <RiDeleteBin5Line></RiDeleteBin5Line>

                                                    </div>
                                                    <div onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-ghost text-base hover:text-slate-500 hover:bg-blue-200">
                                                        <Link to={`/singleJob/${myJob._id}`}><BiEditAlt></BiEditAlt></Link>
                                                    </div>
                                                </div>
                                            </td>
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
