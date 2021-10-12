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

const Game = ({ players }) => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt="logo" />
        <StyledButtonWrapper>
          <Button primary={true} name="Menu" />
        </StyledButtonWrapper>
      </StyledHeader>
      <StyledGameGrid>
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
          <Token />
      </StyledGameGrid>
      <StyledScoreContainer>
        {
          players === 1 ? 
          (
            <>
            <Score players={players} title="Time" />
          <Score title="Moves"/>
          </>
          )
          :
          (<Score />)
        }
          
      </StyledScoreContainer>
    </StyledMain>
  );
};

export default Game;
