 
import React from 'react'
import { useState, useEffect } from 'react'

import { Autocomplete } from '@mui/material'
import { TextField } from '@material-ui/core'
export default function HeadphoneFeatures() {
    //For storing the features of category information based on data from url and updating in {feature: []}
    const [features, setFeatures] = useState({
        feature: []
    })
    const cid = "Ezvhh3P"// category id for Headphone
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
    const {feature}=features // obect in feature for dispaying the form 
    return (
        <div>
            {
                feature.map((f)=>
                <div>
                    <Autocomplete
                    disablePortal
                    id="Headphonecolor"
                    options={f.set.color} // contains the list of values [4,6,8,16] which displays as options
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="color"name="color"/>}
                    />
                    <Autocomplete
                    disablePortal
                    id="HeadphoneconnectorType"
                    options={f.set.connector_type} // contains the list of values of storage which displays as options
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="connectorType" name='connectorType'/>}
                    />
                    
                    
                </div>
                )
            }
           
        </div>
    )
}
