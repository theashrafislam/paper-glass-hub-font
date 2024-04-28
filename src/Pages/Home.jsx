// import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar";

import Banner from "../Components/Banner";
import CraftItemsSection from "../Components/CraftItemsSection";
import OurTeam from "../Components/OurTeam";
import Testimonial from "../Components/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItemsSection></CraftItemsSection>
            <Testimonial></Testimonial>
            <OurTeam></OurTeam>
            
        </div>
    );
};

export default Home;