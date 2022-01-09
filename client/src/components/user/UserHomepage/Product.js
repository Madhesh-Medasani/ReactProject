import React from "react";
import {NavLink} from "react-router-dom"

function Product(props){
    return (
        // displaying single product
        <>
            <div className="single-product col">
                <div className="product-f-image">
                    <img src="" alt="" />      
                </div>
                                            
                <h2><NavLink to="single-product.html">Samsung Galaxy s5- 2015</NavLink></h2>
                                            
                <div className="product-carousel-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                </div> 
            </div>
        </>
    );
}

export default Product;