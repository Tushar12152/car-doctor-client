import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"

const Nav = () => {



    const nav=<div className=" flex gap-6">
           <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Home</NavLink>

           <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>About</NavLink>


           <NavLink to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Service</NavLink>


           <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Blog</NavLink>


           <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 underline" : ""}>Contact</NavLink>
    </div>


  return (
    <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

       {nav}

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className="w-[100px]" src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
{nav}

    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline border-2 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-[white]">Appointment</button>
  </div>
</div>
  );
};

export default Nav;
