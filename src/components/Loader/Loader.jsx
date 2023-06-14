import React from 'react'
import {CircularProgress} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Loader.css";

const Loader = ({showLoader}) => {

    return (
        <>
            <Container maxWidth="xs" >
                <Box component="div" className="loader_container" >
                    { showLoader && <CircularProgress color="secondary" /> }
                </Box>
            </Container>
        </>
    )
}
export default Loader;
