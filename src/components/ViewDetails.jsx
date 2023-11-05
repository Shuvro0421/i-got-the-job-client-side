import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    // { image , logo , title, name, category, salary, postingDate, applicationDeadline, applicantsNumber, description , companyName }
    const [detail, setDetail] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const singleDetail = data.find(single => single._id === id)
                setDetail(singleDetail)
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, [id]);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${detail.image})` }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="">
                <div className="hero-content justify-center lg:items-start items-center  flex-col lg:flex-row">
                    <img src={detail.logo} className="w-60 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold text-blue-500">{detail.title}</h1>
                        <p className=" text-white font-medium">{detail.description}</p>
                        <div className="flex md:flex-row flex-col md:items-center items-start md:justify-between justify-center">
                            <p className="mt-5 text-white font-medium">Salary: {detail.salary}</p>
                            <p className="mt-5 text-white font-medium">Applicants Number: {detail.applicantsNumber}</p>
                        </div>
                        <button className="btn mt-5 hover:border-blue-500 btn-outline hover:bg-blue-500 text-blue-500 font-semibold hover:text-white normal-case">Apply For This Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;