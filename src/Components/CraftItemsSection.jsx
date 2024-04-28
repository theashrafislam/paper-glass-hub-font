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
            <div>
                {
                    loadedData.map(data => <CraftItemCard data={data} key={data._id}></CraftItemCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;