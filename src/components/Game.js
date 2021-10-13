import Button from "./Button";
import {
  StyledMain,
  StyledHeader,
  StyledGameGrid,
  StyledScoreContainer,
  StyledImg,
  StyledButtonWrapper,
} from "../styles/Game.styled";
import Logo from "../assets/logo.svg";
import Score from "./Score";
import Token from "./Token";
import { generateArr } from "../utils/generateArray";
import { shuffleArray } from "../utils/shuffleArray";

const Game = ({ players, gridSize }) => {
  const arrayFromPlayers = Array.from(Array(players).keys());
  let gridAmount = gridSize === "4x4" ? 8 : 16

  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt="logo" />
        <StyledButtonWrapper>
          <Button primary={true} name="Menu" />
        </StyledButtonWrapper>
      </StyledHeader>
      <StyledGameGrid>
        {shuffleArray(generateArr(gridAmount)).map((num, index) => (
          <Token key={index} number={num.back} />
        ))}
      </StyledGameGrid>
      <StyledScoreContainer>
        {players === 1 ? (
          <>
            <Score players={players} title="Time" />
            <Score title="Moves" />
          </>
        ) : (
          <>
            {arrayFromPlayers.map((player) => (
              <Score key={player} title={`P${player + 1}`} />
            ))}
          </>
        )}
      </StyledScoreContainer>
    </StyledMain>
  );
};

export default Game;
