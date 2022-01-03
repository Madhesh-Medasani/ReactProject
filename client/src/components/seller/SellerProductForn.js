import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl } from '@material-ui/core'
import {Card} from '@mui/material'
import { Input,InputLabel } from '@material-ui/core'
import { Autocomplete } from '@mui/material'
import { TextField } from '@material-ui/core'
function SellerProductForn() {
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
    
    useEffect(() => {
        fetchdata()
        
        console.log(brandsinfo)
    },[])
    const {brand} = brandsinfo
    return (
            <div>        
            <Card sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <FormControl>
                <InputLabel htmlFor="productname">Product Name</InputLabel>
                <Input id="productname" /> 
            </FormControl>
            <FormControl>
            <Autocomplete
                
                id="brand-name"
                options={brand}
                getOptionLabel={option => option.Name}
                
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="brands" />}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="productprice">Product Price</InputLabel>
                <Input id="productprice"  /> 
            </FormControl>
            </Card>
            </div>

            
        
    )
}

export default SellerProductForn
