import { makeStyles } from "@mui/styles";

export default makeStyles({
    formControl: {
        margin: "8px !important", // theme.spacing(1) = 8px
        minWidth: 120,
        marginBottom: "30px",
    },
    selectEmpty: {
        marginTop: "16px", // theme.spacing(2) = 16px
    },
    loading: {
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: "25px",
    },
    marginBottom: {
        marginBottom: "30px",
    },
    list: {
        marginTop: "20px !important",
        height: "75vh",
        overflow: "auto !important",
    },
});
