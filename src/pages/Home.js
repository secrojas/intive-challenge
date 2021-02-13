import React from 'react';

import Header from '../components/Header';
import Formulario from '../components/Formulario';
import UserList from '../components/UserList';
import UserApiProvider from '../context/UserApiContext';

const Home = () => (
  
    <UserApiProvider>                
        <Header />
        <div className="container mt-5">
            <div className="row">
                <Formulario />
            </div>
            <UserList />
        </div>           
    </UserApiProvider>

)

export default Home