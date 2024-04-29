import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    const { createUserEmailPassword, updateUserProfile, logOut } = useContext(AuthContext)

    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoLink.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast('Your password must be at least six characters long.', { icon: '⚠', });
            return;
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            toast('Please include at least one uppercase letter in your password.', { icon: '⚠', });
            return;
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            toast('Your password must contain at least one lowercase letter.', { icon: '⚠', });
            return;
        }

        createUserEmailPassword(email, password)
            .then(result => {
                console.log(result);
                if (result) {
                    logOut()
                        .then(result => {
                            console.log(result);
                            toast.success('Registration successful!', { duration: 3000 });
                            setTimeout(() => {
                                navigate('/login')
                            }, 3000);
                        })
                        .catch(error => {
                            console.log(error);
                        })

                }
                updateUserProfile(name, photoURL)
                    .then(() => {

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
                toast.error('Oops! Registration failed. Please try again');
            })
    }

    return (
        <HelmetProvider>
            <div className="mt-4 mb-4" data-aos="zoom-in-down" data-aos-duration="1000">
                <Helmet>
                    <title>Registration Page || Paper Glass Hub</title>
                </Helmet>
                <div className="text-center mx-4 my-3">
                    <h1 className="text-xl md:text-3xl font-bold">Registration Now</h1>
                    <p className="text-lg">Welcome to our registration page! Registering with us opens up a world of opportunities and benefits. Whether you're a new user or returning member, <br /> creating an account is quick and easy. Join our community today and unlock exclusive features!</p>
                </div>
                <div className="px-4 lg:max-w-7xl mx-auto">
                    <form className="space-y-4" onSubmit={handleCreateUser}>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg">Full Name</label>
                            <input type="text" name="name" id="name" className="border-2 p-2" placeholder="Full Name" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input type="email" name="email" id="email" className="border-2 p-2" placeholder="Enter your email" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="photoURL" className="text-lg">Photo URL</label>
                            <input type="text" name="photoLink" id="photoURL" className="border-2 p-2" placeholder="Enter your photo URL" required />
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <input type={showPass ? "text" : "password"} name="password" id="password" className=" border-2 p-2" placeholder="Enter your password" required />
                            <span onClick={() => setShowPass(!showPass)} className="absolute right-2 bottom-2">
                                {
                                    showPass ? <IoEye className="text-2xl md:text-3xl" /> : <IoEyeOff className="text-2xl md:text-3xl" />
                                }
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <button className="btn w-full font-bold text-lg bg-violet-600 text-gray-50 hover:text-black">Registration</button>
                        </div>
                    </form>
                    <p className="font-semibold mt-2">If you already have an account. Please <Link to="/login" className="text-red-500">Log In</Link></p>
                </div>
                <Toaster />
            </div>
        </HelmetProvider>
    );
};

export default Register;