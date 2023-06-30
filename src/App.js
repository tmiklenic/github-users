import './App.css';
import Results from './components/Results';
import Search from './components/Search';
import { useState, useEffect } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [ resultUser, setResultUser] = useState({});
  const [ resultRepos, setResultRepos ] = useState([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/'+input)
  .then(response => response.json())
  .then(userData => setResultUser(userData));

  fetch('https://api.github.com/users/'+input+'/repos')
  .then(response => response.json())
  .then(repoData => setResultRepos(repoData));
  }, [input]);


  const searchHandler = (searchString) => {
    setInput(searchString);

    console.log(input);
    console.log(resultUser);
    console.log(resultRepos);
  };

  const resetHandler = () => {
    setInput('');
    setResultUser({});
    setResultRepos([]);
  }

  return (
    <div className="App">
      <Search onResultReceived={searchHandler} resetHandler={resetHandler}/>
      <Results userData={resultUser} repoData={resultRepos} />
    </div>
  );
}

export default App;
