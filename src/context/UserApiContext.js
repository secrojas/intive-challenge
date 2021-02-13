import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserApiContext = createContext();

const UserApiProvider = (props) => {

    const [userApi, saveUserApi] = useState([]);
    const [search, searchUserApi] = useState({
        limit:''
    });
    const [ query, saveConsult] = useState(false);

    const { limit } = search;
    
    
    const [error, setError] = useState(null);

    useEffect(() => {
        getData();
    }, [search]);

    async function getData() {
        if(query) {
            await axios(`https://randomuser.me/api/?seed=srojasweb&results=${limit}`)
            .then((response) => {
                saveUserApi(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                
            });
        }
    }

    return ( 
        <UserApiContext.Provider
            value={{
                userApi,
                searchUserApi, 
                saveConsult
            }}
        >
            {props.children}
        </UserApiContext.Provider>
     );
}
 
export default UserApiProvider;