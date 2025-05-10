
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {

    const {createUser} = use(AuthContext);
    

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        console.log(name, email,photo,password);

        //create user
        createUser(email, password)
        .then(result =>{
            console.log(result);
        })
          .catch(error =>{
            console.log(error);
          })
    }

    return (
        <div className='bg-base-300 screen h-screen flex justify-center items-center overflow-hidden'>
      <div className="card bg-base-100 mx-auto  w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl mx-auto pt-5 font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
           {/* name */}
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          {/* photo url */}
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
           {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>
           <p><input type="checkbox" defaultChecked className="checkbox checkbox-xs" /> Remember me.</p>
            </div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p>Already have an account? <Link className='text-green-600 underline' to="/login" >Login</Link></p>
        </form>
      </div>
    </div>
  </div>
    );
};

export default Register;