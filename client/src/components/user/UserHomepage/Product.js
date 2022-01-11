import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from "@material-ui/styles";
import useStyles from "../Shopping/Styles";
import sellerstore from "../../seller/sellerstore";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux"

// displaying the product with its features

const Product = ({product,username,cart}) => {
    const classes =useStyles();

    const addToCart = (product,username,cart) =>{  // Add to cart functionality
        console.log(username)
        let flag = 0
        for(let c of cart){
            if(c.id === product.id){
                if(c.qty < product.productquantity){    // checking if stock of product is available
                    flag =1
                    sellerstore.dispatch({type : "ADD_TO_CART", payload : {item : product, username : username }})
                }
                else{
                    flag = 1
                    alert('No stock left to order') // No stock left
                }
            }
            
        }
        if(flag === 0){
            
                sellerstore.dispatch({type : "ADD_TO_CART", payload : {item : product, username : username }})
        }
    }


    return (
        <Card className ={classes.root} style={{width : 300}}>
            <CardMedia className ={classes.media} image="https://images.samsung.com/is/image/samsung/assets/in/smartphones/mobiles-by-camera/sm-m022gzadins.png?$720_N(384)_JPG$" title={Product.productname} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.productname}

                    </Typography>
                    <Typography variant ="h5">
                        {product.productprice}/-

                    </Typography>

                </div>
                <Typography variant ="body2" color="textSecondary">
                    {/* {product.productbrand} brand,
                    {product.ram} ram,
                    {product.colour},
                    {product.storage} storage */}

                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            <div className='mt-3'>
           
            <button onClick={(e) => addToCart(product,username,cart)}
                    className="btn cart-btn">Add To Cart</button>
                    
   
            <IconButton aria-label="Add to Cart"  />
                    
            </div>

            <AddShoppingCart/>
            </CardActions>

            

        </Card>
        
        

    );

    };


    const mapStateToProps = (state) => {
        return {
          username: state.userReducer.username,
          cart : state.cartReducer.cart
        };
      };
export default connect(mapStateToProps)(Product);