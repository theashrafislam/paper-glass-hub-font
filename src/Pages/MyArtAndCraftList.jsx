import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyArtandCrafListCard from "../Components/MyArtandCrafListCard";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext);
    const [loadedData, setLoadedData] = useState([]);
    const [filterValue, setFilterValue] = useState("All");

    useEffect(() => {
        fetch(`https://paper-glass-hub-client.vercel.app/craftItemsInfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const sortedData = sortData(data);
                setLoadedData(sortedData);
            });
    }, [user]);


    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const sortData = (data) => {
        return data.sort((a, b) => {
            return a.customization === "Yes" ? -1 : 1;
        });
    };

    const filteredData = filterValue === "All" ? loadedData : loadedData.filter(item => item.customization === filterValue);

    return (
        <HelmetProvider>
            <div className="my-10 mx-4 lg:mx-0">
                <Helmet>
                    <title>My Art And Craft List || Paper Glass Hub</title>
                </Helmet>
                <div className="mb-4">
                    <label htmlFor="customizationFilter" className="mr-2 font-bold">Filter by Customization:</label>
                    <select id="customizationFilter" value={filterValue} onChange={handleFilterChange} className="border border-gray-300 rounded-md p-1">
                        <option value="All">All</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        filteredData.map(data => <MyArtandCrafListCard data={data} key={data._id}></MyArtandCrafListCard>)
                    }
                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyArtAndCraftList;
