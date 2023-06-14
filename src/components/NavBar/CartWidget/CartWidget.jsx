import React, {useContext} from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import {CartContext} from "../../../context/CartProvider";
import {styled, Zoom} from "@mui/material";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import CartTooltip from "../CartTooltip/CartTooltip";
import {useLocation, useNavigate} from "react-router-dom";

const CartWidget = () => {

    const {cart} = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();
    const isOnCartPage = location.pathname === '/cart';

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'transparent',
            maxWidth: 250,
            fontSize: theme.typography.pxToRem(14),
            border: '0',
        },
    }));

    return (
        <React.Fragment>
            <IconButton onClick={()=>navigate(`/cart`)} aria-label="shopping cart button">
                { isOnCartPage ?
                    <Badge className="shopping-cart__badge" badgeContent={cart.length} max={999}>
                        <ShoppingCartIcon className="shopping-cart__icon" />
                    </Badge>
                :
                    <HtmlTooltip
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 600 }}
                        title={
                            (cart.length > 0) &&
                            <React.Fragment>
                                <CartTooltip />
                            </React.Fragment>
                        }
                    >
                        <Badge className="shopping-cart__badge" badgeContent={cart.length} max={999}>
                            <ShoppingCartIcon className="shopping-cart__icon" />
                        </Badge>
                    </HtmlTooltip>
                }
            </IconButton>
        </React.Fragment>
    )
}

export default CartWidget;
