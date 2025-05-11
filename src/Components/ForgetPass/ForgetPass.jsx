import React, { useState } from 'react';

import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router';


const ForgetPass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email || "";
  const [email, setEmail] = useState(emailFromState);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
        navigate('/login'); 
      })
      .catch((error) => {
        console.error("Error sending reset email:", error);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleReset}>
          <label className="label">Email Address</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className="btn btn-primary mt-4 w-full">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
