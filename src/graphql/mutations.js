import { gql } from '@apollo/client';

export const CREATE_ITEM = gql`
  mutation CreateItem($name: String!, $description: String!) {
    createItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
      name
      description
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $name: String!, $description: String!) {
    updateItem(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
