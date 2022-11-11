import React from 'react'
import { useSelector } from 'react-redux';
import ProductsCard from '../components/productCard/productsCard';

const Products = () => {
 const {data}=useSelector(state=>state.produtcs);

  return (
    <ProductsCard data={data}/>
  )
}

export default Products