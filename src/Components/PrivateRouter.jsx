import React, { use } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateRouter = ({children}) => {
    const loc=useLocation();
  
    const {user,load}=use(AuthContext)

    if(load)
        return <Loading></Loading>
    if(user &&user?.email)
       { 
        return children;
       } 
       
   return <Navigate to='/auth/login' state={loc.pathname}></Navigate>
};

export default PrivateRouter;