import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    paper: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100px",
    },
    mapContainer: {
        height: "80vh",
        width: "100%",
        backgroundColor: "ligntgray",
    },
    markerContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        "&:hover": { zIndex: 2 },
    },
    pointer: {
        cursor: "pointer",
    },
}));

