import { makeStyles } from "@mui/styles";

export default makeStyles({
    title: {
        display: "none",
        "@media (min-width:600px)": {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.15)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
        marginRight: 16,
        marginLeft: 0,
        width: "100%",
        "@media (min-width:600px)": {
            marginLeft: 24,
            width: "auto",
        },
    },
    searchIcon: {
        padding: "0 16px",
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: "8px 8px 8px 0",
        paddingLeft: `calc(1em + 32px)`,
        transition: "width 0.3s",
        width: "100%",
        "@media (min-width:960px)": {
            width: "20ch",
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
});
