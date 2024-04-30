import { Link } from "react-router-dom";

const AllArtCreftCard = ({ item, index }) => {
    const { photo, itemName, shortDescription, rating, _id } = item;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{itemName}</div>
                        <div className="text-sm opacity-50">{shortDescription && (shortDescription.length > 50 ? shortDescription.slice(0, 80) : shortDescription)}</div>
                    </div>
                </div>
            </td>
            <td>{rating}</td>
            <td>
            <Link to={`/viewDetailsPage/${_id}`} className='btn w-full font-bold text-base md:text-lg rounded-xl bg-violet-600 text-gray-50 hover:text-black'>
                View Details
                </Link>
            </td>
        </tr>
    );
};

export default AllArtCreftCard;
