const items = [
    { id: '1', name: 'Item 1', description: 'Description for item 1' },
    { id: '2', name: 'Item 2', description: 'Description for item 2' },
  ];
  
  const resolvers = {
    Query: {
      items: () => items,
      item: (parent, { id }) => items.find(item => item.id === id),
    },
    Mutation: {
      createItem: (parent, { name, description }) => {
        const newItem = { id: String(items.length + 1), name, description };
        items.push(newItem);
        return newItem;
      },
      updateItem: (parent, { id, name, description }) => {
        const index = items.findIndex(item => item.id === id);
        if (index === -1) throw new Error('Item not found');
        items[index] = { id, name, description };
        return items[index];
      },
      deleteItem: (parent, { id }) => {
        const index = items.findIndex(item => item.id === id);
        if (index === -1) throw new Error('Item not found');
        const deletedItem = items.splice(index, 1)[0];
        return deletedItem;
      },
    },
  };
  
  module.exports = resolvers;
  