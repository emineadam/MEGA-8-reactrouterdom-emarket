//import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";


function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_20shopping_20cart.png?format=jpg&quality=90&v=1689527835" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Alışveriş Sepetiniz
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                    
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout