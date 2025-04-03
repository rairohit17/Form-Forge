import React from 'react'
import { Form, getUserForms } from '@/app/actions/form'
import AddForm from './AddForm'
import { FormCard } from './FormCard'
const UserForms =async() => {
    const forms : Form[] = await getUserForms()

  return (

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-6 p-4 justify-center'>
      <AddForm ></AddForm>{forms.map((individualForm : Form  , key  )=><FormCard key={key} loading = {false} form={individualForm as Form }></FormCard>)}</div>
  )
}

 
export default UserForms