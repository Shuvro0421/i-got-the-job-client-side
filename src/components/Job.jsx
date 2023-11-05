

const Job = ({ job }) => {
    const { name, companyname, jobtitle, jobpostingdate, applicationdeadline, salaryrange, jobapplicantsnumber } = job
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl m-5">
                <div className="md:flex-row flex flex-col gap-4 justify-between md:items-end items-center p-4">
                    <div>
                        <h2 className="card-title text-blue-500">{jobtitle}</h2>
                        <div className="md:text-left text-center">
                            <p><span className="font-medium">Company Name:</span> {companyname}</p>
                            <p><span className="font-medium">Posted By:</span> {name}</p>
                            <p><span className="font-medium">Job Posting Date:</span> {jobpostingdate}</p>
                            <p><span className="font-medium">Job Posting Date:</span> {applicationdeadline}</p>
                            <p><span className="font-medium">Salary Range:</span> {salaryrange}</p>
                            <p><span className="font-medium">job Applicants Number:</span> {jobapplicantsnumber}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-ghost text-blue-500 hover:text-white normal-case">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;