import { StyledButton, StyledPrimaryButton } from "../styles/Button.styled";

const Button = ({ name, state, primary, handleClick }) => {
  let nameEqualsState = name === state;

  return (
    <>
      {primary ? (
        <StyledPrimaryButton  nameEqualsState={nameEqualsState}>
          {name}
        </StyledPrimaryButton>
      ) : (
        <StyledButton onClick={() => handleClick(name)} nameEqualsState={nameEqualsState}>{name}</StyledButton>
      )}
    </>
  );
};

export default Button;
