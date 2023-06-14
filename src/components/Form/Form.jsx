import React, {useContext, useEffect, useState} from 'react'
import Button from "@mui/material/Button";
import {InputAdornment, TextField} from "@mui/material";
import {LoaderContext} from "../../context/LoaderProvider";
import Loader from "../Loader/Loader";
import {ProductContext} from "../../context/ProductProvider";
import {CartContext} from "../../context/CartProvider";
import './Form.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography";

const Form = () => {

    const {handleSubmit} = useContext(ProductContext);
    const {cart, getTotalPaymentFromCart, removeAllItemsFromCart} = useContext(CartContext);
    const {isLoading, stopLoader} = useContext(LoaderContext);
    const [order, setOrder] = useState(null);

    const [form, setForm] = useState({
        buyer: {
            email: '',
            name: '',
            lastName: '',
            phone: ''
        },
        total: getTotalPaymentFromCart(),
        items: cart
    });

    useEffect(() => {
        stopLoader();
    }, );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            }
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setOrder(handleSubmit(form));
        removeAllItemsFromCart();
    }

    if (isLoading) {
        return (
            <Loader showLoader={isLoading}/>
        )
    }

    if (order) {
        return (
            <div>
                <h1>Gracias por su Compra</h1>
            </div>
        )
    }

    return (
        <>
            <Typography variant="h5" gutterBottom color="text.secondary">
                Información Personal
            </Typography>

            <form className="order_form" onSubmit={handleSubmitForm} action="">
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Requerido"
                    type="text"
                    name="name"
                    placeholder="Nombres"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Requerido"
                    type="text"
                    name="lastName"
                    placeholder="Apellidos"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Requerido"
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AlternateEmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Requerido"
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneAndroidIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button disabled={cart.length === 0} type="submit" variant="contained" >Comprar</Button>
            </form>
        </>
    )
}
export default Form;
