import { useContext } from "react";
import SettingsContext from "../context/Settings/SettingsContext";

export function useSettings(){
    return useContext(SettingsContext)
}