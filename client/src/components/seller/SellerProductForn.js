import React from 'react'
import { FormControl } from '@material-ui/core'
import { Input,InputLabel } from '@material-ui/core'
function SellerProductForn() {
    const [brands,setBrands]=useState([])

    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="productname">Product Name</InputLabel>
                <Input id="productname"  />
                <InputLabel htmlFor="productbrand">Product brand</InputLabel>
                <Input id="productbrand" />
                <InputLabel htmlFor="productfeatures" />
                <Input id="productfeatures" />
                <InputLabel htmlFor="productprice" />
                <Input id="productprice" />
                
                
            </FormControl>
            
        </div>
    )
}

export default SellerProductForn
