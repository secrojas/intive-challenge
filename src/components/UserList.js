
import React, { useContext } from 'react';
import User from './User';
import { UserApiContext } from '../context/UserApiContext';

const UserList = () => {

    // extraer los usuarios
    const { userApi} = useContext(UserApiContext);

    return ( 
        <div className="row mt-5">           
            {userApi.map(user => (
                <User                     
                    user={user}
                />
            ))}            
        </div>
     );
}
 
export default UserList;