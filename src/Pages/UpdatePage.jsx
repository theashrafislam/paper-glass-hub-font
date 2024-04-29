import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UpdatePage = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;
    const id = useParams();
    const [loadedData, setLoadedData] = useState({});
    const { _id, photo, itemName, subCategory, shortDescription, price, rating, processingTime, customization: initialCustomization, stockStatus } = loadedData;
    const [customization, setCustomization] = useState(initialCustomization || '');
    const [selectedStockStatus, setSelectedStockStatus] = useState(stockStatus || '');

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photoLink.value;
        const itemName = form.itemName.value;
        const subCategory = form.subCategory.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;
        const updatedInfo = { photo, itemName, subCategory, shortDescription, price, rating, processingTime, customization, email, displayName, stockStatus: selectedStockStatus };
        
        fetch(`https://paper-glass-hub-client.vercel.app/craftItems/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Your data has been updated.');
            } else {
                toast.error('Your data has been not updated.');
            }
        });
    };

    useEffect(() => {
        fetch(`https://paper-glass-hub-client.vercel.app/craftItems/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setLoadedData(data);
                setCustomization(data.customization || '');
                setSelectedStockStatus(data.stockStatus || '');
            });
    }, [id.id]);

    return (
        <div className="my-10 mx-4 lg:mx-0">
            <h1 className="text-3xl font-semibold mb-4 text-center">Update Art & Craft Information</h1>
            <p className="text-center mt-2 mb-6">Welcome to the Update page! Here, you can update the details of your Art & Craft item. Simply fill out the form below with the new information you'd like to apply.</p>
            <form className="space-y-4" onSubmit={handleForm}>
                {/* Form inputs */}
                <div className="flex lg:flex-row flex-col gap-4">
                    {/* Photo URL */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="photoURL" className="text-lg">Photo URL</label>
                        <input type="text" name="photoLink" defaultValue={photo} id="photoURL" className="border-2 p-2 rounded-lg" placeholder="Photo URL" required />
                    </div>
                    {/* Item Name */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="item-name" className="text-lg">Item Name</label>
                        <input type="text" name="itemName" id="item-name" defaultValue={itemName} className="border-2 p-2 rounded-lg" placeholder="Item Name" required />
                    </div>
                </div>
                {/* Other form inputs */}
                <div className="flex lg:flex-row flex-col gap-4">
                    {/* Subcategory */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="sub-category" className="text-lg">Subcategory Name</label>
                        <input type="text" name="subCategory" id="sub-category" defaultValue={subCategory} className="border-2 p-2 rounded-lg" placeholder="Subcategory Name" required />
                    </div>
                    {/* Short description */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="short-description" className="text-lg">Short Description</label>
                        <input type="text" name="shortDescription" id="short-description" defaultValue={shortDescription} className="border-2 p-2 rounded-lg" placeholder="Short Description" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4">
                    {/* Price */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="price-id" className="text-lg">Price</label>
                        <input type="text" name="price" id="price-id" defaultValue={price} className="border-2 p-2 rounded-lg" placeholder="Price" required />
                    </div>
                    {/* Rating */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="rating-id" className="text-lg">Rating</label>
                        <input type="text" name="rating" id="rating-id" defaultValue={rating} className="border-2 p-2 rounded-lg" placeholder="Rating" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 items-center">
                    {/* Customization */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="customization-id" className="text-lg">Customization</label>
                        <select className="select select-info w-full p-2 border-gray-200 border-2" value={customization} onChange={(e) => setCustomization(e.target.value)} required>
                            <option disabled value="">Select your choice</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    {/* Processing Time */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="processing-time" className="text-lg">Processing Time</label>
                        <input type="text" name="processingTime" id="processing-time"  defaultValue={processingTime} className="border-2 p-2 rounded-lg" placeholder="Processing Time" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 items-center">
                    {/* Stock Status */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="stock-status" className="text-lg">Stock Status</label>
                        <select className="select select-info w-full p-2 border-gray-200 border-2" value={selectedStockStatus} onChange={(e) => setSelectedStockStatus(e.target.value)} required>
                            <option disabled value="">Select your choice</option>
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                </div>
                {/* Add button */}
                <div className="flex flex-col">
                    <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Update</button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default UpdatePage;
