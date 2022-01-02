import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const SellerEdit = (props) => {
  return (
    <Edit title='Edit Seller' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default SellerEdit
