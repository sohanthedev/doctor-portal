import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';




const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(authContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const heandleSignUp = (data) => {
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.log(error));
        
    }
    return (
        <div className='h-1/2 flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-4xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(heandleSignUp)}>

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
            <p>New to Doctor Portal <Link className='text-primary ' to='/signup'>Create new account</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Login;