import { Link } from "react-router-dom";


const PartTime = ({ partTime }) => {
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
                        <Link to={`/viewDetails/${_id}`}><button className="btn btn-ghost text-blue-500 hover:text-white normal-case">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartTime;