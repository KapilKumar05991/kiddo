import { useContext } from "react"
import { ThemeContext } from "@/sdui/theme-context"

export default function useTheme() {
    const context = useContext(ThemeContext)
    if(!context) {
        throw Error("Theme Error")
    }
    return context
}