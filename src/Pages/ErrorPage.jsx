// import NotFound from "NotFound.json";
import { Link } from "react-router-dom";
import NotFound from "../NotFound.json"
import Lottie from "lottie-react"
const ErrorPage = () => {
    return (
        <div className="w-3/12 mx-auto">
            <Lottie animationData={NotFound} />
            <div className="text-center">
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to="/">
                    <button rel="noopener noreferrer" href="#" className="btn px-8 py-3 font-bold rounded bg-violet-600 text-gray-50 hover:text-black">Back to homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;