import React from 'react';

import { Link } from 'react-router-dom';

const User = ({user}) => {

    // Muestra y formatea los datos de los usurios de la API
    return ( 
        <div className="col-md-3 mb-3">
            <div className="card">
                <Link to={{pathname: `/detail/${user.login.uuid}/500`, state: {test:'test'}}} style={{textDecoration:'none',color:'black'}}>
                    <h4 className="card-header text-center">
                        {user.name.title}. {user.name.first} {user.name.last}
                    </h4>
                </Link>

                <img className="image-box" src={user.picture.thumbnail} alt={`Imagen de ${user.name.first}`} />

                <p className="text-one">
                    City: {user.location.city} 
                </p> 
                <p className="text-one">                   
                    Country: {user.location.country}
                </p>

                <p className="text-one">                   
                    {user.email}
                </p>                 

                 <div className="card-body">
                    <Link to={{pathname: `/detail/${user.login.uuid}/500`, state: {test:'test'}}} style={{textDecoration:'none',color:'black'}}>
                        <button
                            type="button"
                            className="btn btn-block btn-primary"                        
                        >
                            Quick View
                        </button> 
                    </Link>
                                         
                 </div>
            </div>
        </div>
     );
}
 
export default User;
