import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { AuthContext } from '../../Context/AuthContext';


const Navbar = () => {

  const {user, signOutUser} = use(AuthContext);
  console.log(user);

  const handleSignOut = () =>{
       signOutUser()
       .then(() =>{
        console.log('sign out successfull.');
        alert('Sign Out Successfully.');
       })
       .catch(error =>{
        console.log(error);
       })
  }
 
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    
    <li><NavLink to="/services">Services</NavLink></li>
    {user && <> 
      
      <li><NavLink to="/Profile">Profile</NavLink></li>
     </>}
    
   
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className='text-yellow-500 '>Read</span><span className='text-green-800 '>ly</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
     {user ? 
    <>
     <span className='mr-2'>{user.email}</span>
    

    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
        <img alt="user" src={user?.photoURL} />

        </div>
       
      </div>
      <a onClick={handleSignOut} href="#_" class="ml-3 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-800 rounded-full group-hover:w-56 group-hover:h-56 "></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700 "></span>
    <span class="relative ">Sign Out</span>
</a> 
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div> 
    </>:
    <Link to="/login" ><a href="#_" class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span class="relative">Login</span>
</a></Link>
     
     }
  </div>
</div>
    );
};

export default Navbar;





  