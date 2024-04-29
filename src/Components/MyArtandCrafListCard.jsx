
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});

const MyArtandCrafListCard = ({ data }) => {
    const navigate = useNavigate()
    const [itemData, setItemData] = useState(data);
    const handleUpdate = (e) => {
        if(e) {
            navigate(`/updatePage/${e}`);
        }
    }
    const handleDelete = (_id) => {

        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`https://paper-glass-hub-client.vercel.app/craftItemsInfo/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(dataInfo => {
                        console.log(data);
                        if (dataInfo.deletedCount > 0) {
                            setItemData(null)
                        }
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }
    if (!itemData) {
        return null;
    }

    const { _id, photo, itemName, subCategory, shortDescription, price, rating, processingTime, stockStatus, customization } = data;
    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h3 className="text-3xl font-semibold tracking-wide"><span>Item Name: </span>{itemName}</h3>
                    <p className="dark:text-gray-800"><span className="font-bold">Price: </span>{price}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Rating: </span>{rating}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Customization: </span>{customization}</p>
                    <p className="dark:text-gray-800"><span className="font-bold">Stock Status: </span>{stockStatus}</p>
                </div>
                <div className="flex gap-4 justify-between">
                    <button onClick={() => handleUpdate(_id)} className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyArtandCrafListCard;