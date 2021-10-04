import { Wrapper, Img, MenuWrapper, SelectionText } from '../styles/MainMenu.styled'
import Logo from '../assets/logo.svg'
import Button from './Button'

const MainMenu = () => {
    return (
        <Wrapper>
            <Img src={Logo} alt="" />
            <MenuWrapper>
                <div className="selection">
                    <SelectionText>Select Theme</SelectionText>
                    <div className="selection__buttons">
                        <Button name="Numbers" />
                        <Button name="Icons" />
                    </div>
                </div>
                <div className="selection">
                    <SelectionText>Number of Players</SelectionText>
                    <div className="selection__buttons">
                        <Button name="1" />
                        <Button name="2" />
                        <Button name="3" />
                        <Button name="4" />
                    </div>
                </div>
                <div className="selection">
                    <SelectionText>Grid Size</SelectionText>
                    <div className="selection__buttons">
                        <Button name="4x4" />
                        <Button name="6x6" />
                    </div>
                </div>
                <Button name="Start Game" />
            </MenuWrapper>
        </Wrapper>
    )
}

export default MainMenu
