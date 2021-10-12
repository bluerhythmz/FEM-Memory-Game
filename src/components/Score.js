import { StyledWrapper, StyledTitle, StyledNumber } from "../styles/Score.styled"
import Timer from "./Timer"

const Score = () => {
    return (
        <StyledWrapper>
            <StyledTitle>P1</StyledTitle>
            <StyledNumber>
                <Timer />
            </StyledNumber>
        </StyledWrapper>
    )
}

export default Score
