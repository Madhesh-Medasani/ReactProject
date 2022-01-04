import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { Card, CardActions } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import sellerstore from './sellerstore'
import {connect} from "react-redux"
import SellerProductForm from './SellerProductForm'
function SellerBrandList({brandname}) {
    const [brandinfo,setBrandinfo] = useState({
        brand: []
    })
    const fetchdata = ()=>{
       return fetch("http://localhost:5000/brands").then((response)=>
        response.json()).then((data)=>{
            
            setBrandinfo({
            brand: data
        })
       
        
    })
    }
    const handleClick= (b1)=>{
        sellerstore.dispatch({type: "sendBrand",payload: {brand: b1}});
        console.log(b1)
    }    
    useEffect(() => {
        fetchdata()
        
        
    },[])
    const {brand} = brandinfo
    
    return (
        <div>
            {   brand.map((b)=>
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
            <SellerProductForm brandname={brandname}/>
        </div>
    )
}
const mapStateToProps= (state)=>{
    console.log(state.brandReducer.brand)
    return {
        brandname: state.brandReducer.brand
    }
}
export default connect(mapStateToProps)(SellerBrandList);