import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { PEOPLE_QUERY } from './store/Person';


export const People:FC = () => {
    const { data } = useQuery(PEOPLE_QUERY);
    return (
        <div>
            { console.log("Data is", data) }
            hello
        </div>
    )
};