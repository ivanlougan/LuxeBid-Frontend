
import { useState, useEffect } from 'react';
import './App.css';

// import { authentication } from './utils/games/getGames';

function App() {

  // Global States
  const [gamesData, setGamesData] = useState([])
  // const [errorMsg, setErrorMsg ] = useState(null)
  // const [ user, setUser ] = useState({
  //   username: null,
  //   email: null,
  //   password: null
  // });

  useEffect(() => {
    const IGDBgames = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_DEPLOYED_URL}getGames`, {
              method: "POST",
              mode: "cors",
              headers: {
                  "Content-Type": "application/json",
              }
          });
          const data = await response.json();
          // const gameInfo = data.map()
          setGamesData(data);
          console.log("Test")
          console.log("IDGB get games response: ", data);
          // return data;
      } catch (error) {
          console.log(error);
      }
  };
  IGDBgames();
  }, [])

  // Navbar + Router here?

  return (
    <div className="App">
      <header className="App-header">
        <h1>API FETCH TEST</h1>
        {/* {errorMsg !== null && <h3>{errorMsg}</h3>} */}
      </header>

      <div>
        {gamesData.map((game, index) => {
          return (
            <div key={index}>
              <h3>{game.name}</h3>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default App;