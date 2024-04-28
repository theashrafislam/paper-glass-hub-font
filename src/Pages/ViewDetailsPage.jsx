// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

const ViewDetailsPage = () => {
    const data = useLoaderData()
    return (
        <div>
            {console.log(data)}
        </div>
    );
};

export default ViewDetailsPage;