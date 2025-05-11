import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';

const Register = () => {
    const {createUser,setUser,user}=use(AuthContext)
    const handleSubmit=e=>
    {
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const pass=e.target.pass.value;
        
        createUser(email,pass)
        .then(res=>{
            const user1=res.user;
            setUser(user1)
            console.log(user)
            console.log(user1)
        }
           
        ).catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div class="card bg-base-100 p-5  w-xl shrink-0 shadow-2xl ">
      <div class="card-body">
      <p className='font-semibold text-4xl text-center border-b-2 border-base-300 p-3'>Register your account</p>
        <form onSubmit={handleSubmit} class="fieldset my-5 gap-3">
        <label class="label text-sm text-primary font-semibold">Your Name</label>
          <input name="name" type="text" class="input w-full" placeholder="Enter your name" />
          <label class="label text-sm text-primary font-semibold">Photo URL</label>
          <input name="photo" type="text" class="input w-full" placeholder="Enter your photo url" />
          <label class="label text-sm text-primary font-semibold">Email Address</label>
          <input name="email" type="email" class="input w-full" placeholder="Email" />
          <label class="label text-sm text-primary font-semibold">Password</label>
          <input name="pass" type="password" class="input w-full" placeholder="Password" />
          <div><a class="link link-hover">Forgot password?</a></div>
          <button type='submit' class="btn btn-neutral mt-4">Register</button>
          <p className='text-center'>Already Have An Account ? <Link to='/auth/login'><span className='text-secondary'>Login</span></Link></p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Register;