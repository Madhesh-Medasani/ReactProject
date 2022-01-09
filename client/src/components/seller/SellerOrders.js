import React from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SellerNavbar from "./SellerNavbar";
import SellerProductCard from "../../SellerProductCard";
import { useState, useEffect } from "react";
const SellerOrders = ({sellername})=>{
    const [orderinfo,setOrderinfo] = useState({
        orders: []
    })
    // fetch the data of brands and set the data into {brand : []}
    const fetchdata = ()=>{
       return fetch(`http://localhost:5000/cart?sellername=${sellername}`).then((response)=>
        response.json()).then((data)=>{
            console.log(data)
            setOrderinfo({
            orders: data
        })
       
        
    })
    }
    


    useEffect(()=>{
        fetchdata();

    },[])
    
    const {orders} = orderinfo;
    return(
        <Grid container direction="column" >
            <Grid item>
                <SellerNavbar />
            </Grid>
            <Grid item container>
            <Typography variant="h3" style={{margin:30,marginLeft:280,fontFamily:'"Kaushan Script", cursive'}}>Hi {sellername} you can see your orders in this page.</Typography>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    
                <Grid container spacing={2}>
                {orders.map((p) => {
                    return (
                        <Grid item xs={12} sm={4}>
                        <SellerProductCard product= {p} />
                        </Grid>
                    )
                })}
        

        {/* {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))} */}
        </Grid>
        </Grid>
                <Grid item xs={false} sm={2} />
        </Grid>
        </Grid>
        
    );
}

export default SellerOrders;