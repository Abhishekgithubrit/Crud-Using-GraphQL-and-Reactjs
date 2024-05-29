import React from 'react';
import CreateForm from './components/CreateForm';
import ReadList from './components/ReadList';

const App = () => {
  return (
    <div>
      <h1>Item Management</h1>
      <CreateForm />
      <ReadList />
    </div>
  );
};

export default App;
