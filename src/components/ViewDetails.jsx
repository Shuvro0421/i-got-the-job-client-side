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
                <div className="hero-content mt-20 justify-center lg:items-start items-center  flex-col lg:flex-row">
                    <img src={detail.logo} className="w-60 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold text-blue-500">{detail.title}</h1>
                        <p className=" text-white font-medium">{detail.description}</p>
                        <div className="flex md:flex-row flex-col md:items-center items-start md:justify-between justify-center">
                            <p className="mt-5 text-white font-medium">Salary: {detail.salary}</p>
                            <p className="mt-5 text-white font-medium">Applicants Number: {detail.applicantsNumber}</p>
                        </div>
                        <button  onClick={() => document.getElementById('my_modal_4').showModal()} className="btn mt-5 hover:border-blue-500 btn-outline hover:bg-blue-500 text-blue-500 font-semibold hover:text-white normal-case">Apply For This Job</button>
                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-blue-200">
                            
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 hover:text-red-500">X</button>
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