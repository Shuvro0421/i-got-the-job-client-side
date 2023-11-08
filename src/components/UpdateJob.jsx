import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import useTitle from "../hooks/useTitle";

const UpdateJob = () => {
    useTitle('Update Job')
    const initialJob = useLoaderData()
    const { _id, image, logo, title, name, category, salary, postingDate, applicationDeadline, description, companyName } = initialJob
    const [startDate, setStartDate] = useState(new Date(postingDate))
    const [startDate2, setStartDate2] = useState(new Date(applicationDeadline))

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const logo = form.logo.value
        const title = form.title.value
        const name = form.name.value
        const companyName = form.companyName.value
        const category = form.category.value
        const salary = form.salary.value
        const postingDate = form.postingDate.value
        const applicationDeadline = form.applicationDeadline.value
        const description = form.description.value

        const jobs = { image, logo, title, name, category, salary, postingDate, applicationDeadline, description, companyName }
        console.log(jobs)

        // send data to the server 
        fetch(`https://i-got-the-job-server-9mfm31f86-adibs-projects-900c94ef.vercel.app/jobs/singleJob/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Updated',
                    })
                }
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/man-holding-wooden-cubes-jobs-text_218381-4505.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <form className="mt-28 shadow-2xl  md:w-4/5 md:mt-28 w-4/5 rounded-lg bg-blue-300 bg-opacity-30" onSubmit={handleAddProduct}>
                <div className="grid md:grid-cols-2 gap-2 p-5 grid-cols-1 items-center justify-center ">
                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="image" id="" placeholder="picture url of job banner..." defaultValue={image} />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="logo" id="" placeholder="logo url of company..." defaultValue={logo} />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="title" id="" defaultValue={title} />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="name" id="" defaultValue={name} />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="companyName" id="" defaultValue={companyName} />


                    <select className="bg-gray-200 p-2 rounded-lg" name="category" required>
                        <option className="" defaultValue={category} selected>job category...</option>
                        <option value="on site job">on site job</option>
                        <option value="remote job">remote job</option>
                        <option value="hybrid">hybrid</option>
                        <option value="part time">part time</option>
                    </select>


                    <input className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="salary" id="" defaultValue={salary} />

                    <div className='flex flex-col'>
                        <h1 className='text-blue-500 font-semibold'>posting date</h1>
                        <DatePicker className='p-2 bg-gray-200 w-full border mt-2 rounded-lg' name='postingDate' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='text-blue-500 font-semibold'>application deadline</h1>
                        <DatePicker className='p-2 bg-gray-200 w-full border mt-2 rounded-lg' name='applicationDeadline' selected={startDate2} onChange={(date) => setStartDate2(date)} />
                    </div>

                    <textarea className="p-2 bg-gray-200 placeholder-slate-500 mt-2 rounded-lg" type="text" name="description" id="" defaultValue={description} />
                </div>


                <input className="p-2 w-full border-2 border-blue-500 btn btn-ghost hover:bg-blue-500 hover:text-white text-blue-500 normal-case  mt-2 rounded-lg" type="submit" value="Update Job" />

            </form>
        </div>
    );
};

export default UpdateJob;