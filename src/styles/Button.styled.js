import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem 0;
    font-size: 1.6rem;
    line-height: 1.2em;
    border: none;
    color: #FCFCFC;
    border-radius: 2.6rem;
    background-color: ${(props) => props.nameEqualsState ? `#304859` : `#BCCED9`};
    width: 100%;
    font-weight: 700;
`

export const StyledPrimaryButton = styled(StyledButton)`
    background-color: #FDA214;
`