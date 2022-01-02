import React from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container'
import { Card, Grid } from '@material-ui/core';
export default function SellerBrandList() {
    const [brands,setBrands]=useState([]);
    useEffect(() => {
        const brandinfo=[]
        axios.get('https://localhost:5000/brands',brandinfo)
        setBrands(brandinfo)
    })

    const {b} = brands 
    return (
        <div>
            {b.map((brand) => <Container maxWidth="xs">
              <Card raised="true">
                  brand.name
              </Card>

            </Container>
            )}
        </div>
    )
}
