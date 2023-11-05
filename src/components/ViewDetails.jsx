import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => { 
                const singleDetail =  data.find(single => single._id === id)
                setDetail(singleDetail)
             })
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    return (
        <div>
            <h1>{detail.name}</h1>
        </div>
    );
};

export default ViewDetails;