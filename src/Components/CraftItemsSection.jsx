import { useEffect, useState } from "react";
import CraftItemCard from "./CraftItemCard";

const CraftItemsSection = () => {
    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/craftItems')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])
    return (
        <div className="my-10">
            <h1>Hello I am craft items section {loadedData.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    loadedData.map(data => <CraftItemCard data={data} key={data._id}></CraftItemCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;