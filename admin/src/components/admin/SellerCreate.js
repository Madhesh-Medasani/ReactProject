import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'


const SellerCreate = (props) => {
  return (
    <Create title='Create a Seller' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source="gst" />
        <TextInput source='email' />
        <TextInput source='password' />
      </SimpleForm>
    </Create>
  )
}

export default SellerCreate
