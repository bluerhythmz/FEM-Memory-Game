import { Wrapper, MenuWrapper, Selection, SelectionText, SelectionButtons, Title } from '../styles/MainMenu.styled'
import Button from './Button'
import { useState } from 'react'

const MainMenu = () => {
    const [theme, setTheme] = useState("Numbers")
    const [players, setPlayers] = useState("1")
    const [gridSize, setGridSize] = useState("4x4")

    const handleThemeClick = (button) => {
        setTheme(button)
    }

    const handlePlayersClick = (button) => {
        setPlayers(button)
    }

    const handleGridSizeClick = (button) => {
        setGridSize(button)
    }

    return (
        <Wrapper>
            <Title>memory</Title>
            <MenuWrapper>
                <Selection>
                    <SelectionText>Select Theme</SelectionText>
                    <SelectionButtons>
                        <Button handleClick={handleThemeClick} state={theme} name="Numbers" />
                        <Button handleClick={handleThemeClick} state={theme} name="Icons" />
                    </SelectionButtons>
                </Selection>
                <Selection>
                    <SelectionText>Number of Players</SelectionText>
                    <SelectionButtons>
                        <Button handleClick={handlePlayersClick} state={players} name="1" />
                        <Button handleClick={handlePlayersClick} state={players} name="2" />
                        <Button handleClick={handlePlayersClick} state={players} name="3" />
                        <Button handleClick={handlePlayersClick} state={players} name="4" />
                    </SelectionButtons>
                </Selection>
                <Selection>
                    <SelectionText>Grid Size</SelectionText>
                    <SelectionButtons>
                        <Button handleClick={handleGridSizeClick} state={gridSize} name="4x4" />
                        <Button handleClick={handleGridSizeClick} state={gridSize} name="6x6" />
                    </SelectionButtons>
                </Selection>
                <Button primary={true} name="Start Game" />
            </MenuWrapper>
        </Wrapper>
    )
}

export default MainMenu
