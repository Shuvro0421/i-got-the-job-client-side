import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { signInUser, handleGoogleSignIn, user } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    if (user) {
        navigate(location?.state ? location.state : '/')
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user)
        setSuccess('')
        setError('')
        signInUser(email, password)
            .then(res => {
                console.log('user signed in', res.user)
                setSuccess('signed in successfully');
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.hero.page/wallpapers/3c808cff-8d2f-472b-83ae-f6bb894275bb-mystical-forest-art-wallpaper-wallpaper-2.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="hero min-h-screen ">
                        <div className="hero-content md:w-96 mt-14 flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full text-black max-w-sm shadow-2xl bg-slate-900 bg-opacity-50">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Password</span>
                                        </label>
                                        <input name="password" type="password" placeholder="password" className="input  input-bordered" required />
                                        <p className="text-blue-500 font-semibold mt-2">{success}</p>
                                        <p className="text-red-500 font-semibold mt-2">{error}</p>
                                        <label className="label">
                                            <p className='text-white'>New to Login ? <Link to={'/register'} className="text-blue-500  font-semibold">Register</Link></p>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">

                                        <input className="btn text-white bg-blue-500 hover:text-blue-500 hover:bg-white border-none  normal-case" type="submit" value="Login" />
                                    </div>
                                    <div className="flex items-center my-4">
                                        <div className="border-t border-blue-500 flex-grow"></div>
                                        <div className="mx-4 text-white font-semibold">or</div>
                                        <div className="border-t border-blue-500 flex-grow"></div>
                                    </div>
                                    <div className="form-control">
                                        <button onClick={handleGoogleSignIn} className="btn text-white bg-blue-500 hover:text-blue-500 hover:bg-white border-none  normal-case">Google <FcGoogle className="text-3xl"></FcGoogle></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;