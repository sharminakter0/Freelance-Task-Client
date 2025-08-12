import React, {useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';



const RagisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [showPassword,setShowPassword] =useState(false);
  const { createUser, updateUser, setUser, gLogin } = useContext(AuthContext);



  const handleRegister = (e) => {
    e.preventDefault();
    const target = e.target;
   const name1 = target.fname.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;
     //******* */
   
    // const formData = new FormData(form);
    // const  {email,password,...userProfile}=Object.fromEntries(formData.entries());

     
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

        setShowPassword(!showPassword);

  
    

    if (!hasUpperCase || !hasLowerCase || !isLengthValid) {
      setPasswordError(
        'Password must be at least 6 characters and include both uppercase and lowercase letters.'
      );

    
      
     
      return;
    }

    setPasswordError('');

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name1, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name1, photoURL: photo });
            navigate('/');
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  // toggle password
  const togglePassword=()=>{
  setShowPassword(!showPassword);}


  const handleGooleLogin = () => {
    gLogin()
      .then((result) => {

         Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Logged in with Google!',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
        navigate(location.state ? location.state : '/');
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="card bg-base-100 w-full max-w-md mx-auto my-20 shadow-2xl border border-opacity-10 border-white">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-5 text-purple-500 ">
            Create An Account
          </h2>
          

          <fieldset className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered flex"
                placeholder="John"
                name="fname"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered flex"
                placeholder="Enter Your Email"
                name="email"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered flex"
                placeholder="https://your-photo.url"
                name="photo"
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type={showPassword ?'text':'password'}
                className="input input-bordered flex"
                id="password"
                placeholder="••••••••"
                name="password"
                required
              />
              <div
              
              onClick ={togglePassword}
              className='absolute right-3 top-9 cursor-pointer text-gray-500'>
                {showPassword?<FaEyeSlash/> :<FaEye/>}

              </div>
              {passwordError && (
                <label className="label">
                  <span className="label-text-alt text-red-500 text-sm">{passwordError}</span>
                </label>
              )}
              <label className="label">
                <span className="label-text-alt text-xs opacity-70">
                  Minimum 6 characters, uppercase and lowercase
                </span>
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-primary size-5" required />
                <span className="label-text ml-2 text-sm">
                  I agree to the <a className="link link-primary">Terms of Service</a> and{' '}
                  <a className="link link-primary">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">
              Register
            </button>
          </fieldset>

          <div className="divider my-6">OR REGISTER WITH</div>

          <div className="flex justify-center gap-4">
           <Link to="">  <button onClick={handleGooleLogin} type="button" className="btn px-38">
            <FcGoogle className='size-5  ' /> Google
            </button></Link>
          </div>

          <p className="text-center text-sm mt-6">
            Already have an account?{' '}
            <Link to="/auth/login" className="link link-primary font-medium">
             Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default RagisterPage;
