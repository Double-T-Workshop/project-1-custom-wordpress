import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import client from './apollo-client';

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

  const transformUrl = (url) => {
      const wordpressBaseUrl = 'http://localhost:10022'; // Replace with your WordPress URL
      if (url.startsWith(wordpressBaseUrl)) {
          return url.replace(wordpressBaseUrl, '').replace(/\/$/, ''); // Normalize URL
      }
      return url.replace(/\/$/, ''); // Handle relative paths
  };

  return (
      <nav>
          <ul>
              {menuItems.map((item) => (
                  <li key={item.id}>
                      <Link to={transformUrl(item.url)}>{item.label}</Link>
                  </li>
              ))}
          </ul>
      </nav>
  );
};

export default Navbar;