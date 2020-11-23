import React, { FC } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_PEOPLE, GET_PERSON, PeopleData, PersonData } from './store/Person';

export const People: FC = () => {
  const { data, loading } = useQuery<PeopleData>(GET_PEOPLE);
  const [getPerson, { data: personData }] = useLazyQuery<PersonData>(
    GET_PERSON
  );

  return (
    <div>
      {console.log('Data is', data)}
      {loading ? 'Loading...' : 'API Response'}
      {data?.people.results.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
      <input
        type="text"
        onChange={(e) => console.log('Changed', e)}
        onCompositionEnd={(e) => console.log('composition ended', e)}
      />
      <p>...</p>
      <button
        type="button"
        onClick={() =>
          getPerson({
            variables: { id: 3 },
          })
        }
      >
        Load more
      </button>
      {personData && console.log('Got data', personData)}
    </div>
  );
};
