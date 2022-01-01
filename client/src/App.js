import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CategoryList from './components/CategoryList'
import CategoryCreate from './components/CategoryCreate'
import CategoryEdit from './components/CategoryEdit';
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit';
import BrandList from './components/BrandList';
import BrandCreate from './components/BrandCreate';
import BrandEdit from './components/BrandEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='categories'
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
      <Resource
        name='brands'
        list={BrandList}
        create={BrandCreate}
        edit={BrandEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  )
}

export default App
