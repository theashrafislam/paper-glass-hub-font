import { useEffect, useState } from "react";
import ArtAndCart from "./ArtAndCart";

const ArtAndCraftCategoriesSection = () => {
    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        fetch(`https://paper-glass-hub-client.vercel.app/artAndCarftItems`)
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center mx-4 lg:mx-0">
                <h1 className="font-bold text-2xl mb-2">Art & Craft Categories</h1>
                <p className="w-10/12 mx-auto text-center">Explore our diverse collection of art and craft categories. Each category offers a unique selection of creative possibilities, from paintings to sculptures and beyond. Discover the perfect inspiration for your next masterpiece.</p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                            loadedData.slice(0, 6).map(data => <ArtAndCart data={data} key={data._id}></ArtAndCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftCategoriesSection;