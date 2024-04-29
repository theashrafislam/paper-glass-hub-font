import { Link } from "react-router-dom";

const ArtAndCart = ({ data }) => {
    const { _id, photo, subCategory } = data;
    return (
        <Link to={`/artAndCart/${subCategory}`} className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{subCategory}</h2>
            </div>
        </Link>
    );
};

export default ArtAndCart;