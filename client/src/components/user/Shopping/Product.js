import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from "@material-ui/styles";
import useStyles from "./Styles";

const Product = ({product}) => {
    const classes =useStyles();
    return (
        <Card className ={classes.root}>
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
                    {product.productbrand} brand,
                    {product.ram} ram,
                    {product.colour},
                    {product.storage} storage

                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>

        </Card>
        
        

    );

    };
export default Product;