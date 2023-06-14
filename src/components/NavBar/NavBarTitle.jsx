import React from 'react'
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";

const NavBarTitle = ({title,logoImage}) => {

    return (
        <React.Fragment>
            <NavLink to={'/'}>
                <img className="navbar__logo" alt={title} src={logoImage} />
            </NavLink>
            <Typography className="site_title" variant="h1">
                {title}
            </Typography>
        </React.Fragment>
    )
}
export default NavBarTitle
