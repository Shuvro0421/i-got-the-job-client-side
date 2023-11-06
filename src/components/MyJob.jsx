import { Link } from "react-router-dom";


const MyJob = ({ myJob }) => {
    const { _id, name, companyName, title, postingDate, applicationDeadline, salary, applicantsNumber } = myJob
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="">
                        <tr>
                       
                            <th className="">Title</th>
                            <th className="">Company name</th>
                            <th className="">Posted By</th>
                            <th className="">Job Posting Date</th>
                            <th className="">Job Deadline</th>
                            <th className="">Salary Range</th>
                            <th className="">Job Applicants Number</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* row 1 */}
                        <tr>
                            <td className="">{title}</td>
                            <td className="">{companyName}</td>
                            <td className="">{name}</td>
                            <td className="">{postingDate}</td>
                            <td className="">{applicationDeadline}</td>
                            <td className="">{salary}</td>
                            <td className="">{applicantsNumber}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJob;