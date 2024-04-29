// import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar";

import ArtAndCraftCategoriesSection from "../Components/ArtAndCraftCategoriesSection";
import Banner from "../Components/Banner";
import CraftItemsSection from "../Components/CraftItemsSection";
import OurTeam from "../Components/OurTeam";
import Testimonial from "../Components/Testimonial";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
            <div>
            <Helmet>
                <title>Home Page || Paper Glass Hub</title>
            </Helmet>
                <Banner></Banner>
                <CraftItemsSection></CraftItemsSection>
                <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>
                <Testimonial></Testimonial>
                <OurTeam></OurTeam>

            </div>
        </HelmetProvider>

    );
};

export default Home;