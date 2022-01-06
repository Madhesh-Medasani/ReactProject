import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl } from '@material-ui/core'
import { Autocomplete } from '@mui/material'
import { TextField } from '@material-ui/core'
export default function MobileFeature() {
    const [features, setFeatures] = useState({
        feature: []
    })
    const cid =1
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
                <div>
                    <Autocomplete
                    disablePortal
                    id="mobileram"
                    name="ram"
                    options={f.set.RAM}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="RAM" name='ram'/>}
                    />
                    <Autocomplete
                    disablePortal
                    id="mobilestorage"
                    name="storage"
                    options={f.set.Storage}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Storage" name="storage"/>}
                    />
                    <Autocomplete
                    disablePortal
                    id="mobilecolor"
                    name="clour"
                    options={f.set.color}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Colour" name="colour"/>}
                    />
                    
                </div>
                )
            }
           
        </div>
    )
}
