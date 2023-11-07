import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PartTime = ({ partTime }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, companyName, title, postingDate, applicationDeadline, salary, applicantsNumber } = partTime
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl m-5">
                <div className="md:flex-row flex flex-col gap-4 justify-between md:items-end items-center p-4">
                    <div>
                        <h2 className="text-xl font-semibold md:text-left text-center text-blue-500">{title}</h2>
                        <div className="md:text-left text-center">
                            <p><span className="font-medium">Company Name:</span> {companyName}</p>
                            <p><span className="font-medium">Posted By:</span> {name}</p>
                            <p><span className="font-medium">Job Posting Date:</span> {postingDate}</p>
                            <p><span className="font-medium">Job Deadline:</span> {applicationDeadline}</p>
                            <p><span className="font-medium">Salary Range:</span> {salary}</p>
                            <p><span className="font-medium">job Applicants Number:</span> {applicantsNumber}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        {
                            user ? (<Link to={`/viewDetails/${_id}`}><button className="btn btn-ghost text-blue-500 hover:text-white normal-case">View Details</button></Link>) : (<div>
                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-ghost text-blue-500 hover:text-white normal-case">View Details</button>
                            </div>)
                        }
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="text-left text-xl text-blue-500 font-semibold">Stop right there</h3>
                            <p className="text-left py-4 font-semibold">You should <span> <Link className="text-blue-500 underline" to={'/login'}>login</Link> </span> first <br /><br /> Or if you do not have account then you can <span> <Link className="text-blue-500 underline" to={'/register'}>register</Link> </span></p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500
                                     hover:text-white">X</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default PartTime;