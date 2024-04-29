import { useEffect, useState } from "react";
import CraftItemCard from "./CraftItemCard";

const CraftItemsSection = () => {
    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        fetch(`https://paper-glass-hub-client.vercel.app/craftItems`)
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])
    return (
        <div className="my-10 mx-4 lg:mx-0">
            <h1 className="text-center text-2xl font-bold">Craft items section</h1>
            <p className="text-center mt-2 w-10/12 mx-auto mb-4">Explore our diverse collection of exquisite craft items. From intricate glass paintings to stunning paper quilling designs, each piece is meticulously crafted to delight and inspire. Discover unique creations that showcase creativity and craftsmanship, perfect for adding charm to your home or gifting to loved ones.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    loadedData.slice(0, 6).map(data => <CraftItemCard data={data} key={data._id}></CraftItemCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;
