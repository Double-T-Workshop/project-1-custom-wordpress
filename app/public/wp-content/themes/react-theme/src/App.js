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



import { Component } from '@wordpress/element';
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
            <Router>
                <div>
                    <Header darkTheme={darkTheme} toggleTheme={this.toggleTheme} />
                    <main
                        style={{
                            padding: '20px',
                            background: darkTheme ? '#282c34' : '#f5f5f5',
                            color: darkTheme ? 'white' : 'black',
                        }}
                    >

                        <Routes>
                            <Route path="/sample-page" element={<Pages />} />
                            <Route path="/new-page" element={<Pages />} />
                            <Route path="/hi-this-is-a-second-test-page" element={<Pages />} />
                            <Route path="/privacy-policy" element={<Pages />} />
                        </Routes>
                    </main>
                    <Footer darkTheme={darkTheme} />
                </div>
            </Router>
        );
    }
}
