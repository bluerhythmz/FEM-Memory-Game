import Logo from '../assets/logo.svg'

const MainMenu = () => {
    return (
        <div>
            <img src={Logo} alt="" />
            <div className="menu-wrapper">
                <div className="selection">
                    <p>Select Theme</p>
                    
                </div>
            </div>
        </div>
    )
}

export default MainMenu
