import React from 'react';
import {Grid} from '@material-ui/core';
import Product from "./Product";
import useStyles from "./Styles";
import Header from '../UserHomepage/Header';
import {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';



// fetching seller products
const Products = (props) => {
    const classes = useStyles();

    const [productinfo,setProductinfo] = useState({
        products: []
    })

    const l1 = useLocation();



    const fetchdata = ()=>{
        return fetch("http://localhost:5000/sellerproduct").then((response)=>
         response.json()).then((data)=>{
             console.log(data)
             setProductinfo({
             products: data
         })
        
         
     })
     }

// fetching categories 
     const [brandinfo,setBrandinfo] = useState({
        brands: []
    })

     const fetchdata1 = (categoryId)=>{

        let url ="http://localhost:5000/categories/" + categoryId + "/brands"

        return fetch(url).then((response)=>
         response.json()).then((data)=>{
             console.log(data)
             setBrandinfo({
             brands: data
         })
        
         
     })
     }


    useEffect(() => {
        fetchdata()
        fetchdata1(cat)
        
    },[])
    const {products} = productinfo
    const {brands} = brandinfo


    const getCategory = (pathname) => {
        let str = pathname.split("/")
        return str[str.length - 1]
    }

    let cat = getCategory(l1.pathname)

    
    let pro =[];
// checking product category id with categries
    for (let i=0; i< products.length; i++){
        if(products[i].cid === cat){
            
            pro.push(products[i])
        }
    }

 

    return (
        <div>
            <Header username={props.username}/>

            

            <main className={classes.content}>

            

            
                
                <div className={classes.toolbar}/>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={brands}
                getOptionLabel={option => option.Name}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Brands" />}
                />

            <Grid container justify="center" spacing={4}>
                {pro.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
                </Grid> 
            </main>
        </div>
    )
}






export default Products;