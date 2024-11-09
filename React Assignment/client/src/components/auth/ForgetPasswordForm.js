import React, { useState } from 'react';
import logo from '../../utils/images/sappy-seals-sappy.gif';
import { Link } from 'react-router-dom'

const ForgotPasswordForm = () => {
     const [email,setEmail] = useState("")
     const [newPassword,setNewPassword] = useState("")


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="w-32 h-32 rounded-full" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">FORGOT PASSWORD?</h1>
                    <form className="space-y-6">
                    <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                       
                        <input
                            type="password"
                            placeholder="Enter New Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newPassword}
                            onChange={(e)=>setNewPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Submit
                        </button>
                    </form>
                    <div className="mt-6 text-center   items-center space-x-4">
                       
                        <Link to="/" className="text-sm text-blue-600 hover:underline">
                           Log In Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
