import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";


const Error = () => {
    useTitle('Error')
    return (
        <div className="flex items-center flex-col justify-center bg-white">
            <img src='https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif' alt="" />
            <div>
                <h1 className="text-blue-500 md:text-4xl text-center text-2xl font-semibold">404! Page not found. <br /> <span className="underline"> <Link to={'/'}>Go back</Link> </span> </h1>

            </div>
        </div>
    );
};

export default Error;