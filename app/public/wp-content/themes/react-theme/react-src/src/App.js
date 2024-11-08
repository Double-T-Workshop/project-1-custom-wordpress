import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const App =() => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:10022//wp-json/wp/v2/posts')
    .then((response) => response.json())
  })
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
