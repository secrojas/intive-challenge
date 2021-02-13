import React, { useContext, useState } from 'react';
import { UserApiContext } from '../context/UserApiContext';

const Formulario = () => {

    const [ search, saveSearch ] = useState({       
        limit: ''
    });
    
    const { searchUserApi, saveConsult } = useContext(UserApiContext);

    // función para leer los contenidos
    const getData = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                searchUserApi(search);
                saveConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>List of thumbnails Random User API</legend>
            </fieldset>

            <div className="row mt-4">                
                <div className="col-md-6">
                    <select 
                        className="form-control"
                        name="limit"
                        onChange={getData}                        
                        required
                    >
                        <option value="">-- Select Range of results --</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                         <option value="200">200</option>
                        <option value="500">500</option>
                       
                    </select>
                </div>

                <div className="col-md-6">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Show Data"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;