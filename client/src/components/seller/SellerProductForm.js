import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl } from '@material-ui/core'
import {Card} from '@mui/material'
import { Input,InputLabel } from '@material-ui/core'
import { Autocomplete } from '@mui/material'
import { TextField } from '@material-ui/core'
import {connect} from "react-redux"
function SellerProductForm({brandname, sellername}) {
    const [brandsinfo,setBrandsinfo] = useState({
        brand: []
    })
    const fetchdata = ()=>{
       return fetch("http://localhost:5000/brands").then((response)=>
        response.json()).then((data)=>{
            console.log(data)
            setBrandsinfo({
            brand: data
        })
       
        
    })
    }
    const seller=brandname
    useEffect(() => {
        fetchdata()
        
        console.log(seller)
    },[])
    const {brand} = brandsinfo
    return (
            <div>        
            <Card sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                
            <FormControl>
                <InputLabel htmlFor="sellername">Seller Name</InputLabel>
                <Input id="sellername" value={sellername} /> 
            </FormControl>
                
            <FormControl>
                <InputLabel htmlFor="productname">Product Name</InputLabel>
                <Input id="productname" /> 
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="productbrand">Product Brand</InputLabel>
                <Input id="productbrand" value={seller}/> 
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="productprice">Product Price</InputLabel>
                <Input id="productprice"  /> 
            </FormControl>
            </Card>
            </div>

            
        
    )
}

export default SellerProductForm;
