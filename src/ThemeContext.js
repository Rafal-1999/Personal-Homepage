import {
    createContext,
    useContext,
    useState
} from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./themes";

const ThemeContextCreate = createContext();

export const useTheme = () => useContext(ThemeContextCreate);

export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem("theme");
        return localTheme || "light";
    });

    const setThemeMode = themeMode => {
        localStorage.setItem("theme", themeMode);
        setTheme(themeMode);
    };

    const toggleTheme = () => {
        theme === "light" ? setThemeMode("dark") : setThemeMode("light");
    };

    const currentTheme = theme === "light" ? light : dark;

    return (
        <ThemeContextCreate.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContextCreate.Provider>
    )
};
