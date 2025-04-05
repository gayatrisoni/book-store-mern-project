import React from 'react'
import {Link} from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const password = watch("password");

    const onSubmit = (data) =>  {
        console.log(data)
    }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
      <div className=' w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-lg font-semibold mb-4'>Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4' >
                <label className='block text-gray-700  text-sm font-bold mb-2' htmlFor='email'>Email</label>
                <input
                    {...register("email", { required: true })} 
                    type="email"  name="email" id="email" placeholder='Email Address' 
                    className='shadow appearance-none border  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                />
                {errors.email && <p className='mt-2 text-red-500'>Please enter an email address</p>}
            </div>
            <div className='mb-4' >
                <label className='block text-gray-700  text-sm font-bold mb-2' htmlFor="password">Password</label>
                <input 
                    {...register("password", { required: true })} 
                    type="password"  name="password" id="password" placeholder='Password' 
                    className='shadow appearance-none border  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                />
                {password && password.length < 8 && (<p className='mt-2 text-red-500'>Password should be at least 8 character</p>)}
                {errors.password && <p className='mt-2 text-red-500'>Please enter password</p>}
            </div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login</button>
            </div>
        </form>
        <p className='align-baseline font-medium mt-4 text-sm'>Haven't an account? Please <Link to="/register" className='text-blue-500 hover:text-blue-700'>Register</Link></p>
       <div className='mt-4'>
            <button className='w-full flex flex-wrap gap-1 justify-center items-center bg-secondary hover:bg-blue-700 font-bold py-2 px-4 rounded text-white focus:outline-none'> <FaGoogle className='mr-2' />Sign In with Google</button>
       </div>
       <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
       
      </div>
    </div>
  )
}

export default Login
