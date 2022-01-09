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

import Home from './components/user/HomeStart/Home'
import Homepage from './components/user/UserHomepage/Homepage';
import UserSignUp from './components/user/Authentication/UserSignUp'
import UserSignIn from './components/user/Authentication/UserSignIn';
import Orders from './components/user/Order/Orders'
import Products from './components/user/Shopping/Products';


function App({sellername,username}) {
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
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/user/home' element={<Homepage username={username} />} />
        <Route exact path='/user/signup' element={<UserSignUp/>} />
        <Route exact path='/user/signin' element={<UserSignIn/>} />
        <Route exact path='/user/orders' element={<Orders username={username}/>} />
        <Route exact path='/user/products/:value' element={<Products username={username}/>} />





      </Routes>


      </div>
    </Router>
  )

  
}


const mapStateToProps= (state)=>{
  console.log(state.sellerReducer.sellername)
  console.log(state.userReducer.username)

  
  return {
      sellername: state.sellerReducer.sellername,
      username: state.userReducer.username
  }
}
export default connect(mapStateToProps)(App)