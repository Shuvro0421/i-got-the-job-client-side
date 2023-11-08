import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "./AuthProvider";


const ViewDetails = () => {
    useTitle('View Details')
    // { image , logo , title, name, category, salary, postingDate, applicationDeadline, applicantsNumber, description , companyName }
    const [detail, setDetail] = useState([]);
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [nameError, setNameError] = useState('')


    useEffect(() => {
        fetch('https://i-got-the-job-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                const singleDetail = data.find(single => single._id === id)
                setDetail(singleDetail)
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, [id]);

    const [userApplied, setUserApplied] = useState(false);

    useEffect(() => {
        // Fetch the user's applied jobs (assuming this endpoint exists)
        fetch(`https://i-got-the-job-server.vercel.app/appliedJobs?userId=${user.id}`)
            .then(res => res.json())
            .then(appliedJobs => {
                // Check if the user has already applied for the current job
                const alreadyApplied = appliedJobs.some(job => job?.jobId === detail?._id);
                setUserApplied(alreadyApplied);
            })
            .catch(error => console.error('Error fetching user\'s applied jobs:', error));
    }, [detail?._id, user?.id]);

    const handleAddAppliedJob = e => {
        e.preventDefault()
        const today = new Date()
        const deadlineDate = new Date(detail.applicationDeadline)
        // Set both dates to the start of the day to avoid time discrepancies
        today.setHours(0, 0, 0, 0);
        deadlineDate.setHours(0, 0, 0, 0);
        setError('')
        setNameError('')
        if (today.getTime() > deadlineDate.getTime()) {
            setError('Application deadline has passed. You cannot apply.');
            return;
        }
        if (user.displayName === detail.name) {
            setError('You cannot apply in your own job');
            return;
        }
        if (userApplied) {
            setError('You have already applied for this job.');
            return;
        }

        const form = e.target
        const title = form.title.value
        const salary = form.salary.value
        const companyName = form.companyName.value
        const name = form.name.value
        const category = form.category.value
        const email = form.email.value
        const resume = form.resume.value


        const appliedJobs = {
            applicantsNumber: parseInt(detail.applicantsNumber),
            jobId: detail._id,
            companyName,
            title,
            salary,
            category,
            name,
            email,
            resume
        };

        setSuccess('')
        // send data to the server 
        fetch(`https://i-got-the-job-server.vercel.app/appliedJobs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(appliedJobs),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuccess('Applied Successfully')
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${detail.image})` }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="">
                <div className="hero-content mt-20 justify-center lg:items-start items-center  flex-col lg:flex-row">
                    <img src={detail.logo} className="w-60 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold text-blue-500">{detail.title}</h1>
                        <p className=" text-white font-medium">{detail.description}</p>
                        <div className="flex md:flex-col flex-col md:items-start items-start md:justify-between justify-center">
                            <p className="mt-5 text-white font-medium">Salary: {detail.salary}</p>
                            <p className="mt-5 text-white font-medium">Applicants Number: {detail.applicantsNumber}</p>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn mt-5 hover:border-blue-500 btn-outline hover:bg-blue-500 text-blue-500 font-semibold hover:text-white normal-case">Apply For This Job</button>
                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-blue-200">
                            <form onSubmit={handleAddAppliedJob}>
                                <div className="flex flex-col items-start justify-center">
                                    <h1 className="text-blue-500 font-semibold">Title:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="title" id="" value={detail?.title} />
                                </div>
                                <div className="flex flex-col items-start justify-center mt-5">
                                    <h1 className="text-blue-500 font-semibold">Company Name:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="companyName" id="" value={detail?.companyName} />
                                </div>
                                <div className="flex flex-col items-start justify-center mt-5">
                                    <h1 className="text-blue-500 font-semibold">Category:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="category" id="" value={detail?.category} />
                                </div>
                                <div className="flex flex-col items-start justify-center mt-5">
                                    <h1 className="text-blue-500 font-semibold">Salary:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="salary" id="" value={detail.salary} />
                                </div>
                                <div className="flex flex-col items-start justify-center mt-5">
                                    <h1 className="text-blue-500 font-semibold">Name:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="name" id="" defaultValue={user?.displayName} />
                                </div>
                                <div className="flex flex-col items-start justify-center  mt-5">
                                    <h1 className="text-blue-500 font-semibold">Email:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="email" id="" defaultValue={user?.email} />
                                </div>
                                <div className="flex flex-col items-start justify-center mt-5">
                                    <h1 className="text-blue-500 font-semibold">Resume / CV Link:</h1>
                                    <input className="p-2 w-full text-blue-500 font-semibold bg-blue-300 placeholder-slate-500 mt-2 rounded-lg" type="text" name="resume" id="" defaultValue={'no link'} />
                                </div>
                                <div className="mt-4">
                                    <h1 className="text-yellow-500 font-semibold">{success}</h1>
                                    <h1 className="text-red-500 font-semibold">{error}</h1>
                                    <h1 className="text-red-500 font-semibold">{nameError}</h1>
                                </div>

                                <input className="p-2 w-full border-2 mt border-blue-500 btn btn-ghost hover:bg-blue-500 hover:text-white text-blue-500 normal-case  mt-10 rounded-lg" type="submit" value="Apply" />
                            </form>


                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 hover:text-white">X</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;