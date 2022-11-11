import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddToCart } from '../../redux/Actions/cart';
import './style.css'

function ProductsCard({data}) {
    const dispatch=useDispatch();
    const handleCart=(item)=>{
        dispatch(AddToCart(item))
    }
    return (
            <div className="container d-flex justify-content-center mt-100">
                <div className="row">
                    {data.map(item=><div className="col-md-3" key={item.id}>
                        <div className="product-wrapper mb-45 text-center">
                            <div className="product-img">
                                <Link to={`/products/${item.id}`}>
                                    <img width={150} className='avtar'  src={item.image} alt={item.title} />
                                </Link>
                                <span className="text-center">
                                    <i className="fa fa-rupee" /> {item.price}
                                </span>
                                <div className="product-action">
                                    <div className="product-action-style">
                                        <Link >
                                            <i className="fa fa-plus" />
                                        </Link>
                                        <Link >
                                            <i className="fa fa-heart" />
                                        </Link>
                                        <Link onClick={()=>handleCart(item)}>
                                            <i className="fa fa-shopping-cart" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2'>
                                <h5 className='p-0 m-0'>{item.title}</h5>
                                <div className="d-flex align-content-center justify-content-center"> <span className="fa fa-star fa-star-yellow" /> <span className="fa fa-star fa-star-yellow" /> <span className="fa fa-star fa-star-yellow" /> <span className="fa fa-star" /> <span className="fa fa-star" /> </div>
                            </div>
                        </div>
                    </div>)}
                    
                    
                </div>
            </div>
    )
}

export default ProductsCard