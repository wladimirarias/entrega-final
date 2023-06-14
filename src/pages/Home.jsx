import React, {useContext, useEffect} from 'react'
import {ProductContext} from "../context/ProductProvider";
import {useParams} from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader/Loader";
import {LoaderContext} from "../context/LoaderProvider";

const Home = () => {

    const {products, getProducts, getProductsByCategoryId} = useContext(ProductContext);
    const {isLoading} = useContext(LoaderContext);
    const {categoryId} = useParams();

    useEffect(() => {
        categoryId ? getProductsByCategoryId(categoryId) : getProducts();
    }, [categoryId]);

    if (isLoading) {
        return (
            <Loader showLoader={isLoading} />
        )
    }

    if (products) {
        return (
            <>
                <Box>
                    <Typography variant="h3" gutterBottom color="text.secondary">
                        Listado de Productos
                    </Typography>
                </Box>
                <ItemList products={products} categoryId={categoryId} />
            </>
        )
    } else {
        return (
            <Typography variant="h4" gutterBottom color="text.secondary">
                No hay Productos en el carro
            </Typography>
        )
    }

}
export default Home;
