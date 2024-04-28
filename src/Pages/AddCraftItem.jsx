const AddCraftItem = () => {
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photoLink.value;
        console.log(photo);
    }
    return (
        <div className="my-10 mx-4 lg:mx-0">
            <h1 className="text-3xl font-semibold mb-4 text-center">Welcome to Our Art & Craft Marketplace</h1>
            <p className="text-center mt-2 mb-6">At our marketplace, we celebrate creativity in all its forms. Whether you're a seasoned artisan or just starting your crafting journey, we invite you to share your creations with the world. Our Add Craft Item page is designed to make it easy for you to showcase your work and connect with buyers who appreciate handmade artistry.</p>
            <form className="space-y-4" onSubmit={handleForm}>
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="photoURL" className="text-lg">Photo URL</label>
                        <input type="text" name="photoLink" id="photoURL" className="border-2 p-2 rounded-lg" placeholder="Photo URL" required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="item-name" className="text-lg">Item Name</label>
                        <input type="text" name="itemName" id="item-name" className="border-2 p-2 rounded-lg" placeholder="Item Name" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="sub-category" className="text-lg">Subcategory Name</label>
                        <input type="text" name="subCategory" id="sub-category" className="border-2 p-2 rounded-lg" placeholder="Enter your email" required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="short-description" className="text-lg">Short description</label>
                        <input type="text" name="shortDescription" id="short-description" className="border-2 p-2 rounded-lg" placeholder="Short Description" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="price-id" className="text-lg">Price</label>
                        <input type="text" name="price" id="price-id" className="border-2 p-2 rounded-lg" placeholder="Price" required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="rating-id" className="text-lg">Rating</label>
                        <input type="text" name="price" id="rating-id" className="border-2 p-2 rounded-lg" placeholder="Rating" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 items-center">
                    <div className="flex flex-col w-full">
                        <label htmlFor="customization-id" className="text-lg">Customization</label>
                        <select className="select select-info w-full p-2 border-gray-200 border-2" value="Select you choose">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="processing-time" className="text-lg">Processing Time</label>
                        <input type="text" name="customization" id="processing-time" className="border-2 p-2 rounded-lg" placeholder="Processing Time" required />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 items-center">
                    <div className="flex flex-col w-full">
                        <label htmlFor="stock-status" className="text-lg">Stock Status</label>
                        <input type="text" name="stockStatus" id="stock-status" className="border-2 p-2 rounded-lg" placeholder="Stock Status" required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="stock-status" className="text-lg">Stock Status</label>
                        <select className="select select-info w-full p-2  border-gray-200 border-2">
                            <option disabled selected>Select you choose</option>
                            <option> In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </div>
                </div>
                {/* email and displayName  */}
                <div className="flex flex-col">
                    <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddCraftItem;