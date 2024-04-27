import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const navLinks = <>
            <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/">Home</NavLink></li>
            <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/allArtAndCreftItems">All Art & craft Items</NavLink></li>
            <li className="font-semibold" data-aos="fade-up" data-aos-duration="500"><NavLink to="/myArtAndCraftList">My Art&Craft List</NavLink></li>
            {/* <li className="font-semibold" data-aos="fade-up" data-aos-duration="500"><NavLink to="/login">Login</NavLink></li> */}
            <li className="font-semibold" data-aos="fade-down" data-aos-duration="500"><NavLink to="/register">Register</NavLink></li>
        </>
    
    const handleLogOut = () => {
        logOut()
            .then(result => {
                // if(result){
                //     toast.success('Log Out successful!');
                // }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar border-2 rounded-xl bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {}
                    </ul>
                </div>
                <Link data-aos="fade-right" data-aos-duration="500" className="btn btn-ghost text-xl" to="/">PaperGlass Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div data-aos="fade-left" data-aos-duration="500" className="flex items-center justify-center">
                            <Link to="/userProfile" tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
                                <div className="w-10 rounded-full" title={user?.displayName}>
                                    <img alt="User Images" src={user?.photoURL && user.photoURL} />
                                </div>
                            </Link>
                            <button onClick={handleLogOut} className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">Log out</button>
                        </div>
                        :
                        <Link data-aos="fade-left" data-aos-duration="500" to="/login" className="btn md:text-base font-bold bg-violet-600 text-gray-50 hover:text-black">Log In</Link>
                }
            </div>
            {/* <Toaster /> */}
        </div>
    );
};

export default Navbar;