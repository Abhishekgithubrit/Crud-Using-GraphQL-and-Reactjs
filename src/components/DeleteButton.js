import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_ITEM } from '../graphql/mutations';

const DeleteButton = ({ id }) => {
  const [deleteItem] = useMutation(DELETE_ITEM, {
    update(cache) {
      cache.modify({
        fields: {
          items(existingItems, { readField }) {
            return existingItems.filter(item => id !== readField('id', item));
          },
        },
      });
    },
  });

  const handleDelete = async () => {
    try {
      await deleteItem({ variables: { id } });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <button onClick={handleDelete} style={{ padding: '8px 16px', borderRadius: '4px', background: '#f44336', color: 'white', border: 'none', marginLeft: '10px' }}>Delete</button>
  );
};

export default DeleteButton;
