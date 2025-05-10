import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
    
  <div className='bg-base-300 screen h-screen flex justify-center items-center overflow-hidden'>
      <div className="card bg-base-100 mx-auto  w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl mx-auto pt-5 font-bold">Login now!</h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
           <Link to="/forgetPass"> <a  className="link  link-hover">Forgot password?</a></Link>
            </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>New to this site? <Link className='text-green-600 underline' to="/register" >Register</Link></p>
        </form>
      </div>
    </div>
  </div>
  
    );
};

export default Login;