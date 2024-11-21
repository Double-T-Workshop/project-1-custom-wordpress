// import { Component } from '@wordpress/element';
// import Header from './Header';
// import Footer from './Footer';
// import Posts from './Posts';
// import Pages from './Pages';

// export default class App extends Component {
//      state = {
//          darkTheme: true,
//      };

//      toggleTheme = () => {
//          this.setState(prevState => ({
//              darkTheme: !prevState.darkTheme,
//          }));
//      };

//      render() {
//          const { darkTheme } = this.state;
//          return (
//              <div>
//                  <Header darkTheme={darkTheme} toggleTheme={this.toggleTheme} />
//                  <main style={{ padding: '20px', background: darkTheme ? '#282c34' : '#f5f5f5', color: darkTheme ? 'white' : 'black' }}>
//                      {/* Main content goes here */}
//                      <Posts />
//                      <Pages />
//                  </main>
//                  <Footer darkTheme={darkTheme} />
//              </div>
//          );
//      }
//  }

import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Pages from './Pages';

export default class App extends Component {
    state = {
        darkTheme: true,
    };

    toggleTheme = () => {
        this.setState((prevState) => ({
            darkTheme: !prevState.darkTheme,
        }));
    };

    render() {
        const { darkTheme } = this.state;

        return (
            <ApolloProvider client={client}>
            <Router>
                <Header darkTheme={darkTheme} toggleTheme={this.toggleTheme} />
                <main
                    style={{
                        padding: '20px',
                        background: darkTheme ? '#282c34' : '#f5f5f5',
                        color: darkTheme ? 'white' : 'black',
                    }}
                >
                    <Pages slug="sample-page" />
                </main>
                <Footer darkTheme={darkTheme} />
            </Router>
            </ApolloProvider>
        );
    }
}

