import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './Header';

import Loading from './Loading';

const UserDetail = ({id,limit}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [dataUserFinal, saveDataUserFinal] = useState([]);

    useEffect(() => {
        getData();
        getDataUser();
    }, []);

    async function getData() {
        await axios(`https://randomuser.me/api/?seed=srojasweb&results=${limit}`)
        .then((response) => {
            setData(response.data.results);            
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
            
        });
    }

    console.log(data);
    console.log(dataUserFinal);
    
    const getDataUser = () =>
    {
        if(data != null)            
        {
            let res = [];
            for (let i=0; i < data.length; i++) {
                if(data[i].login.uuid === id ){
                    res.push(data[i]);
                    saveDataUserFinal(res);
                    break;  
                }
            }   
        }
    }

    return (
        <>
            <Header />            
            <div className="container mt-5">
                <div className="row"> 
                    <div className="col-12 col-md-3"></div>                  
                    <div className="col-12 col-md-6">
                        <div className="card">                            
                            <div> 
                                {loading || !data
                                ? <Loading/>
                                :                                
                                dataUserFinal.map(user => (
                                    <>
                                        <p className="text-detail-one">
                                            <img src={user.picture.large} alt={`Imagen de ${user.name.first}`} />
                                        </p>                                            
                                        <h4 className="card-header text-center">
                                            {user.name.title}. {user.name.first} {user.name.last}
                                        </h4>
                                        <p className="text-one">
                                            City: {user.location.city} 
                                        </p> 
                                        <p className="text-one">                   
                                            Country: {user.location.country}
                                        </p>

                                        <p className="text-one">                   
                                            {user.email}
                                        </p> 
                                        <p className="text-one">                   
                                            Phone: {user.phone}
                                        </p>
                                    
                                        <p className="text-one">                   
                                            Location: {user.location.street.number} {user.location.street.name}
                                        </p>                                         
                                    </>                                
                                ))                                
                                }  
                            </div>                            
                        </div>
                        <br/>
                    </div>
                </div>            
            </div> 
        </>
    );
}
 
export default UserDetail;