import React from 'react';
import SiteRoutes from "./routes/SiteRoutes";
import CartProvider from "./context/CartProvider";
import ProductProvider from "./context/ProductProvider";
import LoaderProvider from "./context/LoaderProvider";

function App() {
    return (
        <React.Fragment>
            <LoaderProvider>
                <ProductProvider>
                    <CartProvider>
                        <SiteRoutes/>
                    </CartProvider>
                </ProductProvider>
            </LoaderProvider>
        </React.Fragment>
    )
}

export default App;
