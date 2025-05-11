import React, {  useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';

const Login = () => {
  const loc=useLocation();
  console.log(loc)
 const navigate=useNavigate()
  const {handleSignin}=useContext(AuthContext)
  const handleLogin=(e)=>{
 e.preventDefault();
    const email=e.target.email.value;
    const pass=e.target.pass.value;
  
    handleSignin(email,pass)
    navigate(`${loc.state?loc.state:'/'}`)
  }
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div class="card bg-base-100 p-5  w-xl shrink-0 shadow-2xl ">
      <div class="card-body">
      <p className='font-semibold text-4xl text-center border-b-2 border-base-300 p-3'>Login your account</p>
        <form onSubmit={handleLogin} class="fieldset my-5 gap-3">
          <label class="label text-sm text-primary font-semibold">Email Address</label>
          <input type="email" class="input w-full" placeholder="Email" name='email'/>
          <label class="label text-sm text-primary font-semibold" >Password</label>
          <input type="password" class="input w-full" placeholder="Password" name='pass'/>
          <div><a class="link link-hover">Forgot password?</a></div>
          <button class="btn btn-neutral mt-4" value="submit" >Login</button>
          <p className='text-center'>Dont’t Have An Account ? <Link to='/auth/register'><span className='text-secondary'>Register</span></Link></p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;