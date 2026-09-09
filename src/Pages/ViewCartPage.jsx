import React from 'react'
import ViewCartPageHeader from '../SubSections/ViewCartPageSubScetions/ViewCartHeader'
import AllOrders from '../SubSections/ViewCartPageSubScetions/AllOrders'

const ViewCartPage = () => {
  return (
    <div className=' border-2 border-green-700 min-h-[200vh]'>
      <ViewCartPageHeader/>
      <AllOrders/>
    </div>
  )
}

export default ViewCartPage