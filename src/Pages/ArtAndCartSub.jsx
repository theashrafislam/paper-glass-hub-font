import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtCartCard from "../Components/ArtCartCard";

const ArtAndCartSub = () => {
    const getSubCategory = useParams();
    const { subCategory } = getSubCategory;
    const [loadedData, setLoadedData] = useState([])

    useEffect(() => {
        fetch('https://paper-glass-hub-client.vercel.app/craftItems')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setLoadedData(data)
            })
    }, [])
    const filteredData = loadedData.filter(item => item.subCategory === subCategory);
    return (
        <div className="my-5 mx-4 lg:mx-0">
            <div className="text-center space-y-3">
                <h1 className="text-center font-bold text-3xl">Art & Craft Categories Card</h1>
                <p className="w-10/12 mx-auto text-center">Welcome to our vibrant world of art and craft categories! Whether you're a seasoned artist, a hobbyist, or someone looking to unleash their creativity, we've got something for everyone. Dive into a realm where imagination knows no bounds and where every brushstroke, stitch, and sculpt comes to life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    filteredData.map(data => <ArtCartCard data={data} key={data._id}></ArtCartCard>)
                }
            </div>
        </div>
    );
};

export default ArtAndCartSub;