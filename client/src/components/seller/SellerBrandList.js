import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import { Card, CardActions } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import sellerstore from './sellerstore'
import {connect} from "react-redux"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import SellerProductForm from './SellerProductForm'
import MobileFeature from "./categoryforms/MobileFeature";
import LaptopFeature from "./categoryforms/LaptopFeatures";
function SellerBrandList({brandname, sellername}) {
    const [categoryId,setCategoryId] = useState("");
    const [brandinfo,setBrandinfo] = useState({
        brand: []
    })
    const [cat,setCat] = useState({
        category: []
    })
    
    const fetchdata = (cid)=>{
       return fetch(`http://localhost:5000/categories/${cid}/brands`).then((response)=>
        response.json()).then((data)=>{
            console.log(data)
            setBrandinfo({
            brand: data
        })
       
        
    })
    }

    const fetchcategories=()=>{
        return fetch("http://localhost:5000/categories").then((response)=>
        response.json()).then((data)=>{
            
            setCat({
            category: data})
        }
            )
    }
    const handleid=(cid)=>{
        sellerstore.dispatch({type: "sendCategoryid",payload: {cid: cid}});
        fetchdata(cid)
        setCategoryId(cid);
        console.log(cid);
    }
    const handleClick= (b1)=>{
        sellerstore.dispatch({type: "sendBrand",payload: {brand: b1}});
        
        console.log(b1)
    }    
    useEffect(() => {
        
        fetchcategories()
        
    },[])
    const {brand} = brandinfo
    const {category} = cat

    const handleSubmit=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);

    }
    return (
        <div>
        

            <h1> {sellername}</h1>
            {/* <Grid component="form" onSubmit={handleSubmit} noValidate>
            
            <Grid container columnspacing={12}> */}

            <Grid component="form" onSubmit={handleSubmit} noValidate>
            { brand.length >0 &&  brand.map((b)=>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {b.Name}
                    
                  </Typography>
                  <CardActions>
                      <Button onClick={()=>{
                          handleClick(b.Name)
                      }}>select</Button>
                  </CardActions>
                </CardContent>
              </Card>)
            }
            { brand.length===0 && 
                category.map((c)=>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {c.Name}
                    
                  </Typography>
                  <CardActions>
                      <Button onClick={()=>{
                          handleid(c.id);
                      }}>select</Button>
                  </CardActions>
                </CardContent>
              </Card>)
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm
            </Button>
            </Grid>

            {
                categoryId==1 && <MobileFeature />
            }
            {
                categoryId==2 && <LaptopFeature />
            }
            <Grid xs={3}>

            </Grid>
            <Grid xs={6}>
            <SellerProductForm brandname={brandname} sellername={sellername}/>
            </Grid>
            
            {/* <Grid xs={6}>
            <SellerProductForm brandname={brandname} sellername={sellername}/>
            </Grid> */}

            {/* </Grid>
            </Grid> */}
        </div>
    )
}
const mapStateToProps= (state)=>{
    console.log(state.brandReducer.brand)
    
    return {
        brandname: state.brandReducer.brand
    }
}
export default connect(mapStateToProps)(SellerBrandList)