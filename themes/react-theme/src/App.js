import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Pages from './Pages';
import { useState } from 'react';

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true); // Replace class state with useState

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme); // Toggle theme
    };

    

    return (
        <ApolloProvider client={client}>
            <Router>
                <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
                <main
                    style={{
                        padding: '20px',
                        background: darkTheme ? '#282c34' : '#f5f5f5',
                        color: darkTheme ? 'white' : 'black',
                    }}
                >
                    <Pages />
                </main>
                <Footer darkTheme={darkTheme} />
            </Router>
        </ApolloProvider>
    );
}
