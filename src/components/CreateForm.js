import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ITEM } from '../graphql/mutations';

const CreateForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createItem] = useMutation(CREATE_ITEM);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createItem({ variables: { name, description } });
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ padding: '8px 16px', borderRadius: '4px', background: '#4CAF50', color: 'white', border: 'none' }}>Create</button>
      </form>
    </div>
  );
};

export default CreateForm;
