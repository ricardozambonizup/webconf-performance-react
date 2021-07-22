import { HeaderContainer } from './styles';

export const Header = ({theme, toggleTheme}) => {

    function handleThemeChange() {
        toggleTheme();
    }

    return (
        <HeaderContainer style={{backgroundColor: theme}} >
            <label 
                className="switch"
                type="checkbox"
                onChange={handleThemeChange}     
            >
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </HeaderContainer>
    )
}