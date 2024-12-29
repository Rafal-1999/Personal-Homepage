import { useTheme } from "../../ThemeContext";
import { Box, Text, StyledThemeToggle } from "./styled";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Box>
            <Text>Dark mode {theme === "light" ? "off" : "on"}</Text>
            <StyledThemeToggle
                $currentTheme={theme}
                type="button"
                aria-label={`Przełącz motyw na ${theme === "light" ? "ciemny" : "jasny"}`}
                onClick={toggleTheme}
            />
        </Box>
    )
};

export default ThemeToggle;
