import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MobileFeature from './components/seller/categoryforms/MobileFeature';
import {connect} from 'react-redux';
import SellerBrandList from './components/seller/SellerBrandList';
import SellerLogin from './components/seller/SellerLogin';

import SellerSignup from './components/seller/SellerSignup';
import SellerProductList from './components/seller/SellerProductList';


import SellerHomepage from './components/seller/SellerHomepage';
import SellerProfile from './components/seller/SellerProfile';
function App({sellername}) {
  //Routing to the urls and the components  are rendered based on url 
  //Sending sellername to all components dispalyed after login for seller component inteface
  return (
    
    <Router>
      <div className='App'>

      <Routes>
        <Route exact path='/seller/login' element={<SellerLogin/>} />
        <Route exact path='/seller/signup' element={<SellerSignup/>} />
        <Route exact path="/seller/home" element={<SellerHomepage sellername={sellername}/>} />
        <Route exact path='/seller/productList' element={<SellerProductList sellername={sellername}/>} />
        <Route exact path='/seller/profile' element={<SellerProfile sellername={sellername}/>}/>
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