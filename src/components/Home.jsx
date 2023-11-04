import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="">
                <Header></Header>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>

            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;