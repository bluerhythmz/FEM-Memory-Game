import GlobalStyles from "./styles/Global";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(true);
  const [theme, setTheme] = useState("Numbers");
  const [players, setPlayers] = useState("1");
  const [gridSize, setGridSize] = useState("4x4");

  const handleThemeClick = (button) => {
    setTheme(button);
  };

  const handlePlayersClick = (button) => {
    setPlayers(button);
  };

  const handleGridSizeClick = (button) => {
    setGridSize(button);
  };
  const handleGameStart = () => {
    setGameStart((prev) => !prev);
  };

  /* function generateArr(num) {
    const arr = []
    let randomNum = Math.floor(Math.random() * 20)
    for (let i = 0; i < num; i++) {
      while (arr.some(item => item.back === randomNum)) {
        randomNum = Math.floor(Math.random() * 20)
      }
      arr.push({back: randomNum, flipped: false})
      arr.push({back: randomNum, flipped: false})
      randomNum = Math.floor(Math.random() * 20)
    }
    return arr
  }

  function shuffleArr(arr) {
    let currentIndex = arr.length, randomIndex
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr
  } */

  return (
    <>
      <GlobalStyles />
      {gameStart ? (
        <Game />
      ) : (
        <MainMenu
          handleThemeClick={handleThemeClick}
          handlePlayersClick={handlePlayersClick}
          handleGridSizeClick={handleGridSizeClick}
          handleGameStart={handleGameStart}
          theme={theme}
          players={players}
          gridSize={gridSize}
        />
      )}
    </>
  );
}

export default App;
