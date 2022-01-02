import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CategoryList from './components/admin/CategoryList'
import CategoryCreate from './components/admin/CategoryCreate'
import CategoryEdit from './components/admin/CategoryEdit';
import UserList from './components/admin/UserList'
import UserCreate from './components/admin/UserCreate'
import UserEdit from './components/admin/UserEdit';
import BrandList from './components/admin/BrandList';
import BrandCreate from './components/admin/BrandCreate';
import BrandEdit from './components/admin/BrandEdit';
import SellerList from './components/admin/SellerList';
import SellerCreate from './components/admin/SellerCreate';
import SellerEdit from './components/admin/SellerEdit';
import SellerBrandList from './components/seller/SellerBrandList'
function App() {
  return (
    // <Admin dataProvider={restProvider('http://localhost:3000')}>
    //   <Resource
    //     name='categories'
    //     list={CategoryList}
    //     create={CategoryCreate}
    //     edit={CategoryEdit}
    //   />
    //   <Resource
    //     name='brands'
    //     list={BrandList}
    //     create={BrandCreate}
    //     edit={BrandEdit}
    //   />
    //   <Resource
    //     name='users'
    //     list={UserList}
    //     create={UserCreate}
    //     edit={UserEdit}
    //   />
    //   <Resource
    //     name="sellers"
    //     list={SellerList}
    //     create={SellerCreate}
    //     edit={SellerEdit}
    //   />
    // </Admin>
    
      <div className='App'>

      <Routes>
        <Route exact path='/seller/brands' element={<SellerBrandList/>} />
      </Routes>


      </div>

  )

  
}

export default App
