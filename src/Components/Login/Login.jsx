import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

    const { signInUser } = use(AuthContext);
    

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);


        //login user
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            alert("Logged in Successfully!");
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
    
  <div className='bg-base-300 screen h-screen flex justify-center items-center overflow-hidden'>
      <div className="card bg-base-100 mx-auto  w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl mx-auto pt-5 font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
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