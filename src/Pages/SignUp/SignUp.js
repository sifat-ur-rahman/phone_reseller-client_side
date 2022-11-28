import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
// import useToken from '../../Hooks/UseToken';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const {register, formState:{errors}, handleSubmit } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
     
    const navigate = useNavigate()

    
    const handleSignUp = (data) =>{
        // console.log(data.role);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast("User created SuccessFully.")
            const userInfo = {
                displayName: data.name,
               
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email, data.role )
               
            })
            .catch(err => console.error(err))
        })
        .catch(err => {
            console.error(err)
            setSignUpError(err.message)
        })
    }

    const saveUser = (name, email, role) =>{
        const user = {name, email,role };
        console.log('saveUser',name, email,role);
        fetch('https://phone-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // getUserToken(email)
            navigate('/')
            setCreatedUserEmail(email)
        })
    }

   

    return (
        <div className='h-[800px] flex justify-center items-center' >
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
     
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Name</span>
                </label>
                <input type="text" 
                {...register("name", {required: 'Name Address is required'})}
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            </div>
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
                 className="input input-bordered w-full max-w-xs "/>
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                
            </div>
            <label className="label">
                     <span className="label-text">Role</span>
                </label>
            <select {...register("role")}  className="select select-info w-full ">
       
        <option>Buyer</option>
        <option>Seller</option>
</select>

            
                <input className='btn btn-accent w-full mt-5' value = 'Sign Up' type="submit" />

                {
                    signUpError && <p className='text-red-500'>{signUpError}</p>
                }
         </form>
         <p>Already have an account <Link className='text-secondary mt-5' to={'/login'}>Please Login</Link></p>
         
            </div>
        </div>
    );
};

export default SignUp;