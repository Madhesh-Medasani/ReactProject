import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MobileFeature from './components/seller/categoryforms/MobileFeature';
import {connect} from 'react-redux';
import SellerBrandList from './components/seller/SellerBrandList';
import SellerLogin from './components/seller/SellerLogin';
import SellerProductForm from './components/seller/SellerProductForm';
import SellerSignup from './components/seller/SellerSignup';
import SellerProductList from './components/seller/SellerProductList';

import LaptopFeatures from './components/seller/categoryforms/LaptopFeatures';
import SellerHomepage from './components/seller/SellerHomepage';
function App({sellername}) {
  return (
    
    <Router>
      <div className='App'>

      <Routes>
        <Route exact path='/seller/login' element={<SellerLogin/>} />
        <Route exact path='/seller/signup' element={<SellerSignup/>} />
        <Route exact path="/seller/home" element={<SellerHomepage sellername={sellername}/>} />
        <Route exact path='/seller/productList' element={<SellerProductList sellername={sellername}/>} />
        <Route exact path='/seller/createproduct' element={<LaptopFeatures/>}/>
        <Route exact path='/seller/brands' element={<SellerBrandList sellername={sellername}/>} />
      </Routes>


      </div>
    </Router>
  )

  
}


const mapStateToProps= (state)=>{
  console.log(state.sellerReducer.sellername)
  
  return {
      sellername: state.sellerReducer.sellername
  }
}
export default connect(mapStateToProps)(App)