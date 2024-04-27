import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;