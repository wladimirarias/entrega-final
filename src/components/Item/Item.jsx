
import React, {useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Item.css";
import {useNavigate} from "react-router-dom";
import {Divider} from "@mui/material";
import useItemCount from "../../hooks/useItemCount";
import {CartContext} from "../../context/CartProvider";

const Item = ({id, title, description, image, price}) => {

    const {addCart} = useContext(CartContext);
    const navigate = useNavigate();
    const {count, handleSum, handleRest} = useItemCount();

    const shortTitle = title.length > 30 ? title.slice(0, 30) + '...' : title;
    const shortDescription = description.length > 200 ? description.slice(0, 200) + '...' : description;

    return (
        <Card sx={{maxWidth: 400}}>
            <CardMedia
                component="img"
                alt={title}
                height="300"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {shortTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {shortDescription}
                </Typography>
                <Typography className="imgMediaCard__price" variant="h4" color="text.secondary">
                    ${price}
                </Typography>
            </CardContent>
            <Divider/>
            <CardActions>
                <Button onClick={() => handleRest()} className="cardActions__restButton" color="secondary" disabled={count === 1}><ChevronLeftIcon/></Button>
                <span>{count}</span>
                <Button onClick={() => handleSum()} className="cardActions__sumButton" color="secondary"><ChevronRightIcon/></Button>

                <Button onClick={() => addCart({id, title, description, price, image, count})} href="#" size="small" startIcon={<ShoppingCartCheckoutIcon/>}>Agregar al Carro</Button>
                <Button onClick={() => navigate(`/item/${id}`)} size="small" > Ver más</Button>
            </CardActions>
        </Card>
    )

}

export default Item;
