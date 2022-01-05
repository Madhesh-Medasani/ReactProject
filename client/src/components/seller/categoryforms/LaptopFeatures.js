import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl } from '@material-ui/core'
import { Autocomplete } from '@mui/material'
import { TextField } from '@material-ui/core'
export default function LaptopFeatures() {
    const [features, setFeatures] = useState({
        feature: []
    })
    const cid =2
    const fetchFeature = ()=>{
        return fetch(`http://localhost:5000/categories/${cid}/features`).then((response)=>
            response.json()
        ).then((data)=>{
            console.log(data)
            setFeatures({
                feature: data
            })
        })
    }
    
    useEffect(()=>{
        fetchFeature()
        
    },[])
    const {feature}=features
    return (
        <div>
            {
                feature.map((f)=>
                <FormControl>
                    <Autocomplete
                    disablePortal
                    id="Laptopram"
                    options={f.set.RAM}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="RAM" />}
                    />
                    <Autocomplete
                    disablePortal
                    id="laptopstorage"
                    options={f.set.Storage}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Storage" />}
                    />
                    
                    
                </FormControl>
                )
            }
           
        </div>
    )
}
