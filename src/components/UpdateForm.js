import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ITEM } from '../graphql/mutations';

const UpdateForm = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [updateItem] = useMutation(UPDATE_ITEM);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateItem({ variables: { id: item.id, name, description } });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '8px 16px', borderRadius: '4px', background: '#008CBA', color: 'white', border: 'none' }}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
