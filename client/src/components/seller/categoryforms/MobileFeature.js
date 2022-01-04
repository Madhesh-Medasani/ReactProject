import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl } from '@material-ui/core'
import { Autocomplete } from '@mui/material'
import { TextField } from '@material-ui/core'
export default function MobileFeature() {
    const [feature, setFeature] = useState({
        feature: []
    })
    const cid =1
    const fetchFeature = ()=>{
        return fetch(`http://localhost:5000/categories/${cid}/features`).then((response)=>
            response.json()
        ).then((data)=>{
            console.log(data)
            setFeature({
                feature: data
            })
        })
    }
    useEffect(()=>{
        fetchFeature()
    },[])
    const {features}=feature
    return (
        <div>
            <FormControl>
            <Autocomplete
                
                id="mobilefeature"
                options={features?.set.RAM}
                getOptionLabel={option => option.Name}
                
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="features" />}
                />
            </FormControl>
           
        </div>
    )
}
