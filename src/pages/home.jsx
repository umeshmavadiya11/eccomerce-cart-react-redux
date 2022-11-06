import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../components/common/loader'
import ProductsCard from '../components/productCard/productsCard'


const Home = () => {
 const {home,loading}=useSelector(state=>state.produtcs);
 
  return (
    loading ? <Loader height={200} width={200}/>:
    <>
    <main>
        <div className='home-main'>
        </div>
    </main>
    <div className='heading mt-5'>
        <h1 className='text-center'>Products</h1>
    </div>
    <ProductsCard data={home}/>
    
    <div className='text-center mb-5'>
        <Link to={'/products'} className='btn btn-success text-center' >View More</Link>
    </div>
    </>
  )
}

export default Home