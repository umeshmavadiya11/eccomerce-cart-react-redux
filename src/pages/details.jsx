import React from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/ProductDetails/details'

const DetailsPage = (props) => {
   const params= useParams();
  return (
     <Details id={params.id}/> 
  )
}

export default DetailsPage