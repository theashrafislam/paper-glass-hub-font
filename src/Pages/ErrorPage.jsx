import { Link } from "react-router-dom";
import NotFound from "../NotFound.json"
import Lottie from "lottie-react"
import { Helmet, HelmetProvider } from 'react-helmet-async';
const ErrorPage = () => {
    return (
        <HelmetProvider>
            <div className="w-3/12 mx-auto">
                <Helmet>
                    <title>Error Page || Paper Glass Hub</title>
                </Helmet>
                <Lottie animationData={NotFound} />
                <div className="text-center">
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to="/">
                        <button rel="noopener noreferrer" href="#" className="btn px-8 py-3 font-bold rounded bg-violet-600 text-gray-50 hover:text-black">Back to homepage</button>
                    </Link>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default ErrorPage;