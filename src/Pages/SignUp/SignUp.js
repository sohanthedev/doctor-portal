import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit } = useForm();

    const {createUser,updateUser}= useContext(authContext)

    const handleLogin = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName:data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                .catch(err=>console.log(err))
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='h-1/2 flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                <div className="form-control w-full ">
                <label className="label">
                <span className="label-text">name</span>
                </label>
                <input {...register("email",{required:true})} type="text"  className="input input-bordered w-full "/>
                
                </div>
                <div className="form-control w-full ">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input {...register("email",{required:true})} type="text"  className="input input-bordered w-full "/>
                
                </div>
                <div className="form-control w-full ">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input {...register("password",{required:true})} type="password"  className="input input-bordered w-full"/>
                <label className="label">
                <span className="label-text">Forget Password</span>
                </label>
                
                </div>

     
      <input className='btn btn-primary w-full text-white' value='Submit' type="submit" />
                </form>
                <p>New to Doctor Portal <Link className='text-primary ' to='/login'>Already have an account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;