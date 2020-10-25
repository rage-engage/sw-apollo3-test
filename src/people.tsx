import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE, PeopleData } from './store/Person';

export const People: FC = () => {
  const { data, loading } = useQuery<PeopleData>(GET_PEOPLE);
  return (
    <div>
      {console.log('Data is', data)}
      { loading ? 'Loading...' : 'API Response' }
      {data?.people.results.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};
