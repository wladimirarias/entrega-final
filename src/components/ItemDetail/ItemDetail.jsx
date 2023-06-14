import React, {useContext} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {Divider, Paper} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "./ItemDetail.css";
import {useNavigate} from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useItemCount from "../../hooks/useItemCount";
import {CartContext} from "../../context/CartProvider";

const ItemDetail = ({product}) => {

    const {addCart} = useContext(CartContext);
    const navigate = useNavigate();
    const {count, handleSum, handleRest} = useItemCount();
    const {id, title, price, image, description} = product;

    return (
        <>
            <Grid className="itemDetailContainer__header" container spacing={2}>
                <Grid xs={8}>
                    <Typography className="itemDetailContainer__title" variant="h3" color="text.secondary">
                        {title}
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography className="itemDetailContainer__price" variant="h3" color="text.secondary">
                        ${price}
                    </Typography>
                </Grid>
            </Grid>
            <Paper elevation={3}>
                <CardMedia
                    component="img"
                    alt={title}
                    height="500"
                    image={image}
                />
                <Typography className="itemDetailContainer__description" variant="body1" gutterBottom color="text.secondary" paragraph={true}>
                    {description}
                </Typography>
                <Divider />
                <Grid className="itemDetailContainer__footer" container spacing={2}>
                    <Grid xs={8}>
                        <Button className="itemDetailContainer__goback" onClick={()=>navigate(-1)} size="small" >Volver Atrás</Button>
                    </Grid>
                    <Grid className="itemDetailContainer__gridCartButton" xs={4}>
                        <Button className="cardActions__restButton" color="secondary" onClick={() => handleRest()}
                                disabled={count === 1}><ChevronLeftIcon/></Button>
                        <span>{count}</span>
                        <Button className="cardActions__sumButton" color="secondary"
                                onClick={() => handleSum()}><ChevronRightIcon/></Button>
                        <Button onClick={() => addCart({id, title, description, price, image, count})} href="#" size="small" startIcon={<ShoppingCartCheckoutIcon />}>Agregar al Carro</Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
export default ItemDetail
