import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { gymAuth } from './AuthProvider';

const Login = () => {

    const {usersLogin} = useContext(gymAuth)

    const loginAccountForm =(e) =>{
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value

        // badsha@gmail.com
        usersLogin(email, password)
            .then((result) => {
                console.log(result.user);
                const lastSignInTime = result?.user?.metadata?.lastSignInTime
                const loginObj = { email, lastSignInTime }
                fetch(`http://localhost:5000/users/${email}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(loginObj),
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

            })
            .catch((error) => {
                console.log(error.message);
            })

     }
    return (
        <div>
        <div className="my-14">
            <div className=" flex-col lg:flex-row-reverse">
                <div className=" bg-base-100 w-full mx-auto max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={loginAccountForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <span>Create a account ? <Link to={"/register"} className='text-[#20b7d6]'>Create</Link></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;