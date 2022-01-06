import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl } from '@material-ui/core'
import {Card} from '@mui/material'
import { Input,InputLabel } from '@material-ui/core'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MobileFeature from "./categoryforms/MobileFeature";
import LaptopFeature from "./categoryforms/LaptopFeatures";


function SellerProductForm({brandname, sellername, cid}) {
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const fdata = new FormData(event.currentTarget);
        console.log({
            sellername: fdata.get('sellername'),
            productname: fdata.get('productname'),
            produtbrand: fdata.get('productbrand'),
            productprice: fdata.get('productprice'),
            ram: fdata.get('ram'),
            storage: fdata.get('storage'),
            colour: fdata.get('colour') 
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
                
            <FormControl component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="sellername"
              label="Sellername"
              name="sellername"
              autoComplete="sellername"
              value={sellername}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="productname"
              label="productname"
              type="text"
              id="productname"
              autoComplete="productname"
            />
            {
                cid==1 && <MobileFeature />
            }
            {
                cid==2 && <LaptopFeature />
            }
            <TextField
              margin="normal"
              required
              fullWidth
              name="productbrand"
              label="productbrand"
              type="text"
              id="productbrand"
              autoComplete="productbrand"
              value={brandname}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="productprice"
              label="productprice"
              type="number"
              id="productprice"
              autoComplete="productprice"
            />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Submit
                </Button>
                
            </FormControl>
            
            </Card>
            </div>

            
        
    )
}

export default SellerProductForm;
