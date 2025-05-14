import styled, { keyframes } from 'styled-components';

export const ProjectModalCss: ReactModal.Styles = {
    overlay: {
        width: "100%",
        zIndex: "12345",
        top: "0",
        left: "0",
    },
    content: {
        width: "1200px",
        height: "900px",
        zIndex: "99999999",
        position: "absolute",
        top: "500px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        overflow: "auto",
        padding: "0px",
        border: "",
        marginTop : "-20px"
    },
};