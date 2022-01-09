import React from "react";
import img1 from "./Images/product-1.jpg"
import img2 from "./Images/product-2.jpg"
import img3 from "./Images/product-3.jpg"
import img4 from "./Images/product-4.jpg"
import img5 from "./Images/product-5.jpg"
import img6 from "./Images/product-6.jpg"
import {NavLink} from "react-router-dom"
import "./CSS/responsive.css"

function Products(){
    return (
        <>
            
            <div className="maincontent-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title">Latest Products</h2>
                                <div className="container">
                                    <div className="product-carousel row">
                                        <div className="single-product col">
                                            <div className="product-f-image">
                                                <img src={img1} alt="" />
                                                
                                            </div>
                                            
                                            <h2><NavLink to="single-product.html">Samsung Galaxy s5- 2015</NavLink></h2>
                                            
                                            <div className="product-carousel-price">
                                                <ins>$700.00</ins> <del>$100.00</del>
                                            </div> 
                                        </div>
                                        <div className="single-product col">
                                            <div className="product-f-image">
                                                <img src={img2} alt="" />
                                                
                                            </div>
                                            
                                            <h2><NavLink to="single-product.html">Nokia Lumia 1320</NavLink></h2>
                                            <div className="product-carousel-price">
                                                <ins>$899.00</ins> <del>$999.00</del>
                                            </div> 
                                        </div>
                                        <div className="single-product col">
                                            <div className="product-f-image">
                                                <img src={img3} alt="" />
                                                
                                            </div>
                                            
                                            <h2><NavLink to="single-product.html">LG Leon 2015</NavLink></h2>

                                            <div className="product-carousel-price">
                                                <ins>$400.00</ins> <del>$425.00</del>
                                            </div>                                 
                                        </div>
                                        <div className="single-product col">
                                            <div className="product-f-image">
                                                <img src={img4} alt="" />
                                                
                                            </div>
                                            
                                            <h2><NavLink to="single-product.html">Sony microsoft</NavLink></h2>

                                            <div className="product-carousel-price">
                                                <ins>$200.00</ins> <del>$225.00</del>
                                            </div>                            
                                        </div>
                                        <br />
                                        <div className="single-product col">
                                            <div className="product-f-image">
                                                <img src={img5} alt="" />
                                                
                                            </div>
                                            
                                            <h2><NavLink to="single-product.html">iPhone 6</NavLink></h2>

                                            <div className="product-carousel-price">
                                                <ins>$1200.00</ins> <del>$1355.00</del>
                                            </div>                                 
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;