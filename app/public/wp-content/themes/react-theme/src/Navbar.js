import React from 'react';
import { useQuery, gql } from '@apollo/client';
import client from './apollo-client';

// GraphQL query to fetch the primary menu
const GET_PRIMARY_MENU = gql`
  query GetPrimaryMenu {
    menu(id: "primary", idType: LOCATION) {
      menuItems {
        nodes {
          id
          label
          url
          parentId
        }
      }
    }
  }
`;

const Navbar = () => {
    const { loading, error, data } = useQuery(GET_PRIMARY_MENU, { client });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const menuItems = data.menu.menuItems.nodes;

    return (
        <nav>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
