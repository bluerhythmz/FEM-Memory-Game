import { StyledTokenWrapper, StyledFront, StyledBack, StyledInner } from "../styles/Token.styled"

const Token = ({ number, handleClick }) => {
    return (
        <StyledTokenWrapper>
            <StyledInner onClick={() => handleClick(number)}>
                <StyledFront></StyledFront>
                <StyledBack>{number}</StyledBack>
            </StyledInner>
        </StyledTokenWrapper>
    )
}

export default Token
