import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const Signin = () => {

    const {signInUser} = use(AuthContext);

    const handleUserSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then( res => {
            const user = res.user;
            console.log(user);
            const signInInfo = {
                email, 
                lastSignInTime: user?.metadata?.lastSignInTime
            }
            fetch("https://coffee-store-server-neon-beta.vercel.app/users", {
                method: "PATCH",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                toast.success("User Sign In Successfully")
                console.log("after update", data);
            })
        }
        )
        .catch(
            error => {
                toast.error(error.message);
            }
        )

    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body space-y-4">
                    <h1 className="text-4xl text-center">Sing In Now!!...</h1>
                    <form onSubmit={handleUserSignIn}  className="space-y-4">
                        <div>
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="btn btn-neutral mt-4">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;