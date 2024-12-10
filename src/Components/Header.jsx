import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">Gym Store</a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal gap-6 text-xl px-1">
                        <NavLink to="/" ><li><a>Home</a></li></NavLink>
                        <NavLink to="/addschedule" ><li><a>Add Schedule</a></li></NavLink>
                        <NavLink to="/allschedule" ><li><a>All Schedule</a></li></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><a className="btn">login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;