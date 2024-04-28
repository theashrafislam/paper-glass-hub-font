import { Link } from "react-router-dom";

const CraftItemCard = ({data}) => {
    const {_id, photo,itemName, subCategory, shortDescription, price, rating, processingTime, stockStatus, customization} = data;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800" data-aos="fade-up" data-aos-duration="1000">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide">Item Name: {itemName}</h2>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Sub Category: {subCategory}</span></p>
                    <p className="dark:text-gray-800">
                        {/* {description.length > 100 ? description.slice(0, 100) : description} */}
                    </p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Short Description: </span>{shortDescription}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price: </span>{price}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Rating: </span>{rating}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>customization: </span>{customization}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Processing Time: </span>{processingTime}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>stockStatus: </span>{stockStatus}</p>
                </div>
                <Link to={`/viewDetailsPage/${_id}`} className='btn w-full font-bold text-lg md:text-xl rounded-xl bg-violet-600 text-gray-50 hover:text-black'>
                View Details
                </Link>
            </div>
        </div>
    );
};

export default CraftItemCard;