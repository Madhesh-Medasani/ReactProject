import { Typography } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import SellerNavbar from "./SellerNavbar";
import SellerProductCard from "../../SellerProductCard";
const SellerProductList = ({sellername}) => {
    return (

        <Grid container direction="column" >
            <Grid item>
                <SellerNavbar />
            </Grid>
            <Grid item container>
            <Typography variant="h3" style={{margin:30,marginLeft:280,fontFamily:'"Kaushan Script", cursive'}}>Hi {sellername} you can see your products in this page.</Typography>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    
                <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
            <SellerProductCard />
        
        </Grid>
        <Grid item xs={12} sm={4}>
        <SellerProductCard />
      </Grid>
      <Grid item xs={12} sm={4}>
      <SellerProductCard />
        
      </Grid>
      <Grid item xs={12} sm={4}>
      <SellerProductCard />
        
      </Grid>
      <Grid item xs={12} sm={4}>
      <SellerProductCard />
       
      </Grid>
      <Grid item xs={12} sm={4}>
      <SellerProductCard />
       
      </Grid>

        {/* {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))} */}
        </Grid>
        </Grid>
                <Grid item xs={false} sm={2} />
        </Grid>
        </Grid>
    //     <div>
    //     <SellerNavbar />
    //     <Typography variant="h2">Hi {sellername} you can see your products in this page.</Typography>
    //     <br />
    //     <br />
    //     <Grid container spacing={2}>
    //     <Grid item xs={12} sm={4}>
    //         <SellerProductCard />
        
    //     </Grid>
    //     <Grid item xs={12} sm={4}>
    //     <SellerProductCard />
    //   </Grid>
    //   <Grid item xs={12} sm={4}>
    //   <SellerProductCard />
        
    //   </Grid>
    //   <Grid item xs={12} sm={4}>
    //   <SellerProductCard />
        
    //   </Grid>
    //   <Grid item xs={12} sm={4}>
    //   <SellerProductCard />
       
    //   </Grid>
    //   <Grid item xs={12} sm={4}>
    //   <SellerProductCard />
       
    //   </Grid>

    //     {/* {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))} */}
    //     </Grid>
    //     </div>
        
    );
}
 
export default SellerProductList;