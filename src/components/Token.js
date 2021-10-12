import { StyledTokenWrapper, StyledFront, StyledBack, StyledInner } from "../styles/Token.styled"

const Token = () => {
    return (
        <StyledTokenWrapper>
            <StyledInner>
                <StyledFront></StyledFront>
                <StyledBack>40</StyledBack>
            </StyledInner>
        </StyledTokenWrapper>
    )
}

export default Token
