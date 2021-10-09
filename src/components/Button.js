import { StyledButton } from '../styles/Button.styled'

const Button = ({ name, state }) => {
    let nameEqualsState = name === state

    return (
        <StyledButton nameEqualsState={nameEqualsState}>
            {name}
        </StyledButton>
    )
}

export default Button
