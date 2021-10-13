import { StyledTokenWrapper, StyledFront, StyledBack, StyledInner } from "../styles/Token.styled"

const Token = ({ number }) => {
    return (
        <StyledTokenWrapper>
            <StyledInner>
                <StyledFront></StyledFront>
                <StyledBack>{number}</StyledBack>
            </StyledInner>
        </StyledTokenWrapper>
    )
}

export default Token
