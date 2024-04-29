import { Link } from "react-router-dom";

const ArtCartCard = ({ data }) => {
    const { _id, photo, itemName, subCategory, shortDescription, price, rating, processingTime, stockStatus, customization } = data;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mt-2">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h3 className="text-3xl font-semibold tracking-wide"><span>Item Name: </span>{itemName}</h3>
                    <p className="dark:text-gray-800"><span className="font-bold">Sub Category: </span>{subCategory}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Short Description: </span>{shortDescription && (shortDescription.length > 50 ? shortDescription.slice(0, 80) : shortDescription)}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Price: </span>{price}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Rating: </span>{rating}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Processing Time: </span>{processingTime}</p>
                </div>
                <Link to={`/viewDetailsPage/${_id}`}>
                    <button className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">View Details</button></Link>
            </div>
        </div>
    );
};

export default ArtCartCard;
