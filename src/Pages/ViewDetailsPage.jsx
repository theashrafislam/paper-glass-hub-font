import { Link, useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ViewDetailsPage = () => {
    const data = useLoaderData();
    const { _id, photo, itemName, subCategory, shortDescription, price, rating, processingTime, stockStatus, customization } = data;
    return (
        <HelmetProvider>
            <div className="space-y-5 mx-4 md:mx-4 lg:mx-0 mt-4 flex flex-col lg:flex-row gap-5 justify-center my-10">
                <Helmet>
                    <title>Details Page || Paper Glass Hub</title>
                </Helmet>
                <div className="flex-1">
                    <img className="w-full h-[200px] md:h-[400px] lg:h-[600px] rounded-2xl" src={photo} alt="" />
                </div>
                <div className="flex-1">
                    <div >
                        <h1 className="font-bold text-2xl md:text-3xl mb-2">{itemName}</h1>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Sub Category: </span>{subCategory}</p>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Description: </span>{shortDescription}</p>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price: </span>{price}</p>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Rating: </span>{rating}</p>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Customization: </span>{customization}</p>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Processing Time: </span>{processingTime}</p>
                        <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Stock Status: </span>{stockStatus}</p>
                    </div>
                    <div>
                        <Link to="/" className="btn w-full text-base md:text-xl font-bold bg-violet-600 text-gray-50 hover:text-black">Back to Home</Link>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default ViewDetailsPage;