import { Outlet } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTopButton from "./ScrollToTopButton ";



const Home = () => {
    useTitle('Home')
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTopButton></ScrollToTopButton>
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