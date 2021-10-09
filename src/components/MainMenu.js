import { Wrapper, MenuWrapper, Selection, SelectionText, SelectionButtons, Title } from '../styles/MainMenu.styled'
import Button from './Button'
import { useState } from 'react'

const MainMenu = () => {
    const [theme, setTheme] = useState("Numbers")
    const [players, setPlayers] = useState("1")
    const [gridSize, setGridSize] = useState("4x4")

    return (
        <Wrapper>
            <Title>memory</Title>
            <MenuWrapper>
                <Selection>
                    <SelectionText>Select Theme</SelectionText>
                    <SelectionButtons>
                        <Button state={theme} name="Numbers" />
                        <Button state={theme} name="Icons" />
                    </SelectionButtons>
                </Selection>
                <Selection>
                    <SelectionText>Number of Players</SelectionText>
                    <SelectionButtons>
                        <Button state={players} name="1" />
                        <Button state={players} name="2" />
                        <Button state={players} name="3" />
                        <Button state={players} name="4" />
                    </SelectionButtons>
                </Selection>
                <Selection>
                    <SelectionText>Grid Size</SelectionText>
                    <SelectionButtons>
                        <Button state={gridSize} name="4x4" />
                        <Button state={gridSize} name="6x6" />
                    </SelectionButtons>
                </Selection>
                <Button name="Start Game" />
            </MenuWrapper>
        </Wrapper>
    )
}

export default MainMenu
