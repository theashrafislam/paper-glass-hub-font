import { useLoaderData } from "react-router-dom";
import AllArtCreftCard from "../Components/AllArtCreftCard";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AllArtAndCreftItems = () => {
    const loadedAllData = useLoaderData();
    return (
        <HelmetProvider>
            <div className="my-5">
            <Helmet>
                <title>All Art And Craft Items || Paper Glass Hub</title>
            </Helmet>
                <div className="font-bold mb-2 text-2xl text-center">Art and Craft Items</div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadedAllData.map((item, index) => (
                                <AllArtCreftCard item={item} index={index} key={item._id} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </HelmetProvider>

    );
};

export default AllArtAndCreftItems;
