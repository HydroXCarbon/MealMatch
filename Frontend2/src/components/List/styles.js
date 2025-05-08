import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        padding: "15px",
        maxHeight: "calc(100vh - 64px)", // Adjust height to fit within the screen
        overflowY: "auto", // Enable scrolling for overflow content
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        marginBottom: "20px", // Space below the title
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        "@media (min-width:600px)": {
            textAlign: "left",
        },
    },
    filters: {
        display: "flex",
        flexDirection: "column",
        gap: "15px", // Space between filter fields
        marginBottom: "20px",
        "@media (min-width:600px)": {
            flexDirection: "row",
            justifyContent: "space-between",
        },
    },
    formControl: {
        minWidth: 120,
        flex: 1,
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        gap: "15px", // Space between cards
        justifyContent: "center",
    },
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%", // Ensure consistent card height
    },
}));
