import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';




const Login = () => {
    const {register, formState:{errors}, handleSubmit } = useForm()
    const {signIn} = useContext(AuthContext)
    const [loginError, SetLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'


    

    const handleLogin = data =>{
        console.log(data);
        SetLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
            navigate(from, {replace: true})
           
        })
        .catch(err => {
            console.error(err.message)
            SetLoginError(err.message)
        })
    }



    return (
        <div >
            <span className='grid justify-end  m-4'>
            <div className="collapse rounded-lg bg-slate-100 justify-end">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">
    Email & Password 
  </div>
  <div className="collapse-content">
    <p>Buyer</p>
    <p>Email    : <span>phone_resale_buyer@gmail.com</span> </p>
    <p>Password : <span>buyer123456</span> </p>
    <hr className="border-spacing-2 border-blue-500 cursor-pointer hover:border-red-500 duration-500" />
    <p>Seller</p>
    <p>Email    : <span>phone_resale_seller@gmail.com</span> </p>
    <p>Password : <span>seller123456</span> </p>
    <hr className="border-spacing-2 border-blue-500 cursor-pointer hover:border-red-500 duration-500" />
    <p>Admin</p>
    <p>Email    : <span>abc@gmail.com</span> </p>
    <p>Password : <span>123456</span> </p>
    <hr className='font-bold' />
  </div>
</div>
            </span>
            <div className='h-[800px] flex justify-center items-center' >
                
            
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
     
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Email</span>
                </label>
                <input type="text" 
                {...register("email", {required: 'Email Address is required'})}
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Password</span>
                </label>
                <input type="password" 
                {...register("password", {required: 'Password Address is required', minLength: {value: 6, message: 'password must be 6 characters'},})}
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <label className="label">
                     <span className="label-text">Forget Password?</span>
                </label>
            </div>

            
                <input className='btn btn-accent w-full' value = 'Login' type="submit" />

                {loginError && <p className='text-red-500'>{loginError}</p>}
         </form>
         <p>New to Phone Resale? <Link className='text-secondary mt-5' to={'/signup'}>Create new account</Link></p>
         
            </div>
            </div>
        </div>
    );
};

export default Login;