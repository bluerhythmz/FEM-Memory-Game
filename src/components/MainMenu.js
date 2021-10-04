import { Wrapper, MenuWrapper, Selection, SelectionText, SelectionButtons, Title } from '../styles/MainMenu.styled'
import Button from './Button'

const MainMenu = () => {
    return (
        <Wrapper>
            <Title>memory</Title>
            <MenuWrapper>
                <Selection>
                    <SelectionText>Select Theme</SelectionText>
                    <SelectionButtons>
                        <Button name="Numbers" />
                        <Button name="Icons" />
                    </SelectionButtons>
                </Selection>
                <Selection>
                    <SelectionText>Number of Players</SelectionText>
                    <SelectionButtons>
                        <Button name="1" />
                        <Button name="2" />
                        <Button name="3" />
                        <Button name="4" />
                    </SelectionButtons>
                </Selection>
                <Selection>
                    <SelectionText>Grid Size</SelectionText>
                    <SelectionButtons>
                        <Button name="4x4" />
                        <Button name="6x6" />
                    </SelectionButtons>
                </Selection>
                <Button name="Start Game" />
            </MenuWrapper>
        </Wrapper>
    )
}

export default MainMenu
