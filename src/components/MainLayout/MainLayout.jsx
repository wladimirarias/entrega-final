import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Outlet} from 'react-router-dom';
import {StyledEngineProvider, ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import imgLogo from '../NavBar/images/logo.png';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import './MainLayout.css';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';

const siteTheme = createTheme({
    palette: {
        mode: 'light',
    }
});

const siteInfo = {
    "name": "Comercial Los Acantos",
    "logo": [imgLogo]
};

const menuItems = [
    {
        name: 'Inicio',
        path: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Tablet',
        path: '/category/1',
        icon: <CategoryIcon />
    },
    {
        name: 'Notebook',
        path: '/category/2',
        icon: <CategoryIcon />
    }
];

const MainLayout = () => {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={siteTheme}>
                <CssBaseline />
                <header>
                    <NavBar
                        title={siteInfo.name}
                        logo={siteInfo.logo}
                        menuItems={menuItems}
                    />
                </header>
                <Container className="main_container" maxWidth="xl">
                    <Outlet />
                </Container>
                <Footer menuItems={menuItems} />
            </ThemeProvider>
        </StyledEngineProvider>
    )

}
export default MainLayout
