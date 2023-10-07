import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
            }><li><a className="font-semibold">Home</a></li></NavLink>
        <NavLink to="/donation" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
            }><li><a className="font-semibold">Donation</a></li></NavLink>
        <NavLink to='/statistics' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
            }><li><a className="font-semibold">Statistics</a></li></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to="/" className="w-32"><img src="https://i.ibb.co/JpR9gfd/Logo.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu-horizontal px-1 gap-5">
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;