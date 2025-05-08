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
        backgroundColor: "white", // Set background color to white
        "&:hover": { backgroundColor: "#f0f0f0" }, // Slightly darker on hover
        margin: "0 auto", // Center the search bar
        width: "20%", // Ensure the search bar occupies 20% of the header
        minWidth: "200px", // Set a minimum width for smaller screens
        display: "flex", // Align the icon and input properly
        alignItems: "center",
    },
    searchIcon: {
        padding: "0 8px", // Adjust padding for better alignment
        height: "100%",
        position: "relative", // Keep the icon relative to the container
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#888", // Add a subtle color to the icon
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: "8px 8px 8px 40px", // Add padding to leave space for the icon
        transition: "width 0.3s",
        width: "100%",
        color: "#000", // Ensure text is visible
        fontSize: "14px", // Adjust font size for better readability
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
});
