import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import client from './apollo-client';
import { useState } from 'react';

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
  const [activeDropdown, setActiveDropdown] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data.menu.menuItems.nodes;

  // Helper to group menu items by parentId
  const getChildren = (parentId) =>
    menuItems.filter((item) => item.parentId === parentId);

  const transformUrl = (url) => {
    const wordpressBaseUrl = 'http://localhost:10022'; // Replace with your WordPress URL
    if (url.startsWith(wordpressBaseUrl)) {
      return url.replace(wordpressBaseUrl, '').replace(/\/$/, ''); // Normalize URL
    }
    return url.replace(/\/$/, ''); // Handle relative paths
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
        {menuItems
          .filter((item) => !item.parentId) // Top-level menu items
          .map((item) => {
            const children = getChildren(item.id);
            const hasChildren = children.length > 0;

            return (
              <li
                key={item.id}
                style={{
                  position: 'relative',
                  margin: '0 15px',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => hasChildren && setActiveDropdown(item.id)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  to={transformUrl(item.url)}
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    padding: '5px 10px',
                    backgroundColor: activeDropdown === item.id ? '#63ab65' : '',
                    color: activeDropdown === item.id ? 'white' : '#333',
                    borderRadius: hasChildren ? '5px' : '0',
                  }}
                >
                  {item.label} {hasChildren && '▾'}
                </Link>

                {/* Dropdown Menu */}
                {hasChildren && activeDropdown === item.id && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: 'white',
                      listStyle: 'none',
                      padding: '10px 0',
                      margin: 0,
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      zIndex: 1000,
                    }}
                  >
                    {children.map((child) => (
                      <li key={child.id} style={{ padding: '10px 20px' }}>
                        <Link
                          to={transformUrl(child.url)}
                          style={{
                            textDecoration: 'none',
                            color: '#333',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
