import { createTheme } from "@mui/material";
import { COLORS } from "../styles/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
        },
        secondary: {
            main: COLORS.secondary,
        },
        background: {
            main: COLORS.background,
        },
        text: {
            main: COLORS.text
        }
    },
});