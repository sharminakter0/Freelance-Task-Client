import React, { useContext } from 'react';
import logo from '../../public/Worknesticon.webp'
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import DarkModeToggler from './DarkModeToggler';


const Header = () => {
    const {user,logout} = useContext(AuthContext)
    return (
        <>
       
          <div className="navbar bg-base-100 shadow-sm dark:bg-gray-900">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink to="/"> <li>Home</li></NavLink>
       <NavLink to="/add-task"> <li>Add Task</li></NavLink>
       <NavLink to="/browse-tasks"> <li>Browse Task</li></NavLink>
       <NavLink to="/my-posted-tasks"> <li>My Posted Task</li></NavLink>
      </ul>
    </div>
    <div className="flex text-xl gap-0"> <img className='size-7' src={logo}  /><h3 className=' font-semibold '> Work<span className='text-purple-500 font-bold'>N</span>est</h3></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 text-sm text-gray-700 ">
       <NavLink to="/" className={
        ({isActive})=>  isActive
            ? 'underline text-purple-600'
            : 'hover:underline'
       }> <li>Home</li></NavLink>
       <NavLink to="/add-task"  className={
        ({isActive})=>  isActive
            ? 'underline text-purple-600'
            : 'hover:underline'
       }> <li>Add Task</li></NavLink>
       <NavLink to="/browse-tasks"   className={
        ({isActive})=>  isActive
            ? 'underline text-purple-600'
            : 'hover:underline'
       }> <li>Browse Task</li></NavLink>
       <NavLink to="/my-posted-tasks"  className={
        ({isActive})=>  isActive
            ? 'underline text-purple-600'
            : 'hover:underline'
       }> <li>My Posted Task</li></NavLink>
    </ul>
  </div>
 <div className="navbar-end">
<div>
          {user?(
            <div className='flex items-center space-x-3'>
             <img src={user.photoURL} alt="user"
             className="w-10 h-10 rounded-full"
            //  hover={user.displayName}
            
             title={user.displayName ||'user'} /> 
             <button onClick={logout}
             className='btn btn-active btn-primary  '>Logout</button>
            </div>
          ):(
    

   <NavLink to={"/auth/login"} className="btn btn-primary px-7">  Login
  </NavLink>

)}</div>
       <div className=' ml-3 '>
        
        <DarkModeToggler></DarkModeToggler>
       </div>

       </div>
        </div>

        </>
    );
};

export default Header;