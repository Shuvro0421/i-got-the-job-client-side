import useTitle from "../hooks/useTitle";
import Banner from "./Banner";

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Main;