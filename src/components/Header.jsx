import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import 'react-tabs/style/react-tabs.css';
import noUser from '../assets/images/no-user-image-icon-3.jpg'
import { AuthContext } from "./AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out')
                navigate('/login')

            })
            .catch(error => {
                console.log(error)
            })
    }

    const links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/allJobs'}>All Jobs</Link></li>
            <li><Link to={'/appliedJobs'}>Applied Jobs</Link></li>
            <li><Link to={'/addJobs'}>Add a Job</Link></li>
            <li><Link to={'/myJobs'}>My Jobs</Link></li>
            <li><Link>Blogs</Link></li>
        </>
    return (
        <div className="navbar rounded-none bg-slate-300 fixed z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-blue-500  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-blue-500 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl hover:text-white text-blue-500">I Got The Job</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  text-blue-500 font-semibold  menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <div className="md:flex items-center hidden md:gap-2 gap-0">
                                <div>
                                    <p className="md:text-base text-xs text-blue-500 font-semibold text-center">{user.displayName}</p>
                                </div>
                                <label tabIndex={0} className="">
                                    <div className="">
                                        <img className='w-10 rounded-full' src={user?.photoURL ? user.photoURL : noUser} />
                                    </div>
                                </label>
                                <div>
                                    <button onClick={handleLogOut} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">Logout</button>
                                </div>
                            </div>
                            {/* small  */}
                            <div className="dropdown relative md:hidden">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    <label tabIndex={0} className="">
                                        <div className="">
                                            <img className='w-10 rounded-full' src={user?.photoURL ? user.photoURL : noUser} />
                                        </div>
                                    </label>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="flex flex-col dropdown-content mt-3 z-[1] p-2 pl-2 shadow bg-base-100 rounded-box w-40 absolute right-0 font-semibold"
                                >
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <p className="text-center text-blue-500 font-semibold text-xs">{user.displayName}</p>
                                        <div>
                                            <button onClick={handleLogOut} className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case">Logout</button>
                                        </div>
                                    </div>


                                </ul>
                            </div>

                        </div>

                        :
                        <Link className="btn btn-outline hover:bg-blue-500 hover:border-blue-500 text-blue-500 font-semibold hover:text-white normal-case" to={'/login'}>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;