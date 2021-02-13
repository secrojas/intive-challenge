import React from 'react';
import UserDetail from '../components/UserDetail';

import { useParams } from 'react-router-dom';


const Detail = () => {

    let { id, limit } = useParams();

    return (
        <UserDetail
            id={id}
            limit={limit}
        />
    )
}

export default Detail;