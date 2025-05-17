import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const SingUp = () => {
    const { createUser } = use(AuthContext);

    const handleUserSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...rest } = Object.fromEntries(
            formData.entries()
        );

        // console.log(finalFormData);
        createUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                const userProfileInfo = {
                    email,
                    ...rest,
                    creationTime: user?.metadata?.creationTime,
                    lastSignInTime: user?.metadata?.lastSignInTime,
                    lastLoginAt: user?.metadata?.lastLoginAt
                };

                // ! save the user profile info to the database
                fetch("https://coffee-store-server-neon-beta.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userProfileInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            toast.success("User Created Successfully", {
                                position: "top-right",
                            });
                        }
                    });
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-right",
                });
            });
    };

    return (
        <div className="flex justify-center items-center h-[calc(100vh-95px)]">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body space-y-4">
                    <h1 className="text-4xl text-center">Sing Up Now!!...</h1>
                    <form onSubmit={handleUserSingIn} className="space-y-4">
                        <div>
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input"
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div>
                            <label className="label">Address</label>
                            <input
                                name="address"
                                type="text"
                                className="input"
                                placeholder="Enter Your Address"
                            />
                        </div>
                        <div>
                            <label className="label">Phone</label>
                            <input
                                name="phone"
                                type="text"
                                className="input"
                                placeholder="Enter Your Phone Number"
                            />
                        </div>
                        <div>
                            <label className="label">Photo URL</label>
                            <input
                                name="photoURL"
                                type="text"
                                className="input"
                                placeholder="Enter Your Photo URL"
                            />
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="btn btn-neutral mt-4">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
