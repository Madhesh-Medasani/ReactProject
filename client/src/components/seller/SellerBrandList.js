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
function SellerBrandList({brandname, sellername}) {
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
        console.log(cid)
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
    return (
        <div>

            <h1> {sellername}</h1>
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
            <SellerProductForm brandname={brandname} sellername={sellername}/>
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