import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl, Input } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MobileFeature from "./categoryforms/MobileFeature";
import LaptopFeature from "./categoryforms/LaptopFeatures";
import axios from "axios";


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
    const handleSubmit = async(event) => {
        event.preventDefault();
        const fdata = new FormData(event.currentTarget);
        const obj={}
        //console.log(fdata.entries())
        for (var pair of fdata.entries()) {
            obj[pair[0]]=pair[1]
        //    console.log(pair)
        //     console.log(pair[0] + ': ' + pair[1]);
        }
        obj["cid"]=cid;
        await axios.post("/sellerproduct",obj);
        console.log(obj);
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
              
            
                
            <FormControl component="form" onSubmit={handleSubmit} style={{width:'20vw'}}>
            <Input
            placeholder='Seller name'
              margin="dense"
              required
              fullWidth
              id="sellername"
              label="Sellername"
              name="sellername"
              autoComplete="sellername"
              value={sellername}
             // autoFocus
            />
            <Input
             placeholder='Product Name'
            required
            fullWidth
              name="productname"
              label="productname"
              type="text"
              id="productname"
              autoComplete="productname"
            />
           
            <Input sx={{borderRadius:20}}
            placeholder='Product Brand'
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
            
            <Input
            placeholder='Product Price'
              margin="normal"
              required
              fullWidth
              name="productprice"
              label="productprice"
              type="number"
              id="productprice"
              autoComplete="productprice"
            />

            {
                cid==1 && <MobileFeature />
            }
            {
                cid==2 && <LaptopFeature />
            }
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Submit
                </Button>
                
            </FormControl>
            
           
          

            
        
    )
}

export default SellerProductForm;
