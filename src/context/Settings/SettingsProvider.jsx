import { useState } from "react";
import SettingsContext from "./SettingsContext";

function SettingsProvider({children}) {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en")
    return (
        <SettingsContext.Provider value={{
            theme,
            setTheme,

            language, 
            setLanguage
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider
