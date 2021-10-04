import { Wrapper, Img, MenuWrapper, SelectionText, SelectionButtons } from '../styles/MainMenu.styled'
import Logo from '../assets/logo.svg'
import Button from './Button'

const MainMenu = () => {
    return (
        <Wrapper>
            <Img src={Logo} alt="" />
            <MenuWrapper>
                <div className="selection">
                    <SelectionText>Select Theme</SelectionText>
                    <SelectionButtons>
                        <Button name="Numbers" />
                        <Button name="Icons" />
                    </SelectionButtons>
                </div>
                <div className="selection">
                    <SelectionText>Number of Players</SelectionText>
                    <SelectionButtons>
                        <Button name="1" />
                        <Button name="2" />
                        <Button name="3" />
                        <Button name="4" />
                    </SelectionButtons>
                </div>
                <div className="selection">
                    <SelectionText>Grid Size</SelectionText>
                    <SelectionButtons>
                        <Button name="4x4" />
                        <Button name="6x6" />
                    </SelectionButtons>
                </div>
                <Button name="Start Game" />
            </MenuWrapper>
        </Wrapper>
    )
}

export default MainMenu
