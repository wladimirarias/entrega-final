import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ItemList.css";
import Item from "../Item/Item";
import {useNavigate} from "react-router-dom";

const ItemList = ({products, categoryId}) => {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            {categoryId &&
                <Grid className="itemListContainer__category" xs={12}>
                    <Button className="itemDetailContainer__goback" onClick={() => navigate(-1)} size="small" startIcon={<ArrowBackIosIcon />}>Volver Atrás</Button>
                </Grid>
            }
            <Grid container spacing={3}>
                {products.map(({id, title, description, image, price}) => (
                    <Grid key={id}>
                        <Item id={id} title={title} description={description} image={image} price={price} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default ItemList;
