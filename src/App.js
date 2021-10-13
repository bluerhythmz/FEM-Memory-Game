import GlobalStyles from "./styles/Global";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(true);
  const [theme, setTheme] = useState("Numbers");
  const [players, setPlayers] = useState(1);
  const [gridSize, setGridSize] = useState("4x4");

  const handleThemeClick = (button) => {
    setTheme(button);
  };

  const handlePlayersClick = (button) => {
    setPlayers(Number(button));
  };

  const handleGridSizeClick = (button) => {
    setGridSize(button);
  };
  const handleGameStart = () => {
    setGameStart((prev) => !prev);
  };

  return (
    <>
      <GlobalStyles />
      {gameStart ? (
        <Game players={players} gridSize={gridSize} />
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
