import Swal from 'sweetalert2'
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddJobs = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [startDate2, setStartDate2] = useState(new Date())
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
        const applicantsNumber = form.applicantsNumber.value
        const description = form.description.value


        const jobs = { image , logo , title, name, category, salary, postingDate, applicationDeadline, applicantsNumber, description , companyName }
        console.log(jobs)

        // send data to the server 
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobs),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added Successfully!',
                })
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className=''>
            <form className="mt-28 shadow-2xl m-2 rounded-lg bg-blue-300 bg-opacity-30" onSubmit={handleAddProduct}>
                <div className="grid md:grid-cols-2 gap-2 p-5 grid-cols-1 items-center justify-center ">
                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="image" id="" placeholder="picture url of job banner..." />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="logo" id="" placeholder="logo url of company..." />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="title" id="" placeholder="job title..." />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="name" id="" placeholder="user name..." />

                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="companyName" id="" placeholder="company name..." />


                    <select className="bg-gray-200 p-2 border-2 border-black rounded-lg" name="category">
                        <option className="" value="category" selected>job category...</option>
                        <option value="on site job">on site job</option>
                        <option value="remote job">remote job</option>
                        <option value="hybrid">hybrid</option>
                        <option value="part time">part time</option>
                    </select>


                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="salary" id="" placeholder="salary..." />

                    <div className='flex flex-col'>
                        <h1 className='text-blue-500 font-semibold'>posting date</h1>
                        <DatePicker className='p-2 bg-gray-200 border-2 w-full border-black mt-2 rounded-lg' name='postingDate' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='text-blue-500 font-semibold'>application deadline</h1>
                        <DatePicker className='p-2 bg-gray-200 border-2 w-full border-black mt-2 rounded-lg' name='applicationDeadline' selected={startDate2} onChange={(date) => setStartDate2(date)} />
                    </div>

                    <input className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" defaultValue={0} type="number" name="applicantsNumber" id="" placeholder="applicants number..." />
                    <textarea className="p-2 bg-gray-200 placeholder-slate-500 border-2 border-black mt-2 rounded-lg" type="text" name="description" id="" placeholder="short description..." />
                </div>


                <input className="p-2 w-full border-2 border-blue-500 btn btn-ghost hover:text-white text-blue-500 normal-case  mt-2 rounded-lg" type="submit" value="Add Job" />

            </form>
        </div>
    );
};

export default AddJobs;