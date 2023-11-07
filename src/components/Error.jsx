import useTitle from "../hooks/useTitle";


const Error = () => {
    useTitle('Error')
    return (
        <div>
            <h1>page not found 404!</h1>
        </div>
    );
};

export default Error;