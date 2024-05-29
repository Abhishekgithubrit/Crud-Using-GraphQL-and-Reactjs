import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ITEMS } from '../graphql/queries';
import DeleteButton from './DeleteButton';

const ReadList = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <DeleteButton id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadList;
