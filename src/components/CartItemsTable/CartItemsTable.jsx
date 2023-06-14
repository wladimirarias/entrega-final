import React, {useContext} from 'react'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import {CartContext} from "../../context/CartProvider";
import './CartItemTable.css';

const CartItemsTable = () => {

    const {cart, getTotalPaymentFromCart, removeItemFromCart} = useContext(CartContext);

    return (
        <>
            <Typography variant="h5" gutterBottom color="text.secondary">
                Productos en el Carro:
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Producto</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Precio&nbsp;($)</TableCell>
                            <TableCell align="right">Borrar del Carro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map(item =>
                            <React.Fragment key={item.id}>
                                <TableRow>
                                    <TableCell className="cell_product">
                                        <img className="cell_product_image" src={item.image} alt={item.title} width="50" height="50" />
                                        <Typography className="cell_product_title" variant="h6" gutterBottom color="text.secondary">
                                            {item.title}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.count}
                                    </TableCell>
                                    <TableCell align="right">
                                        ${item.price * item.count}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button color="error" onClick={() => removeItemFromCart(item.id)}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography className="total_payment" variant="h5" gutterBottom color="text.secondary">
                Precio Total: ${getTotalPaymentFromCart()}
            </Typography>
        </>
    )
}
export default CartItemsTable
