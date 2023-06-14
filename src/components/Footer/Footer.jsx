import React from 'react'
import './Footer.css'
import Container from "@mui/material/Container";
import {Paper} from "@mui/material";

const Footer = () => {


    return (
        <React.Fragment>
            <Container className="footer_container" disableGutters={true} maxWidth={false}>
                <Paper className="footer_content" elevation={5}>
                    <div className="footer_content__text">Copyright &copy; Comercial Los Acantos 2023</div>

                </Paper>
            </Container>
        </React.Fragment>
    )
}
export default Footer
