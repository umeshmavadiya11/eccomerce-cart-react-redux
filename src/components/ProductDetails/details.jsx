import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../redux/Actions/cart';
import Loader from '../common/loader';
import './style.css'

 const Details = ({id}) => {
    const dispatch=useDispatch();
    const {data,loading}=useSelector(state=>state.produtcs);
    const [productDetails,setProductDetails]=useState({})
    useEffect(() => {
      if(data){
        setProductDetails(data.find(item=>parseInt(item.id) === parseInt(id)))
      }
    }, [data,id])
    
    const handleCart=()=>{
        dispatch(AddToCart(productDetails))
    }
  return (
    loading && !productDetails?.image?<Loader height={200} width={200}/>:
    <div className="container">
    <div className="heading-section">
      <h2>Product Details</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
            <img width={"100%"}  src={productDetails?.image} alt={"product_image"} />
      </div>
      <div className="col-md-6">
        <div className="product-dtl">
          <div className="product-info">
            <div className="product-name">{productDetails?.title}</div>
            <div className="reviews-counter">
              <div className="rate">
                <input type="radio" id="star5" name="rate" defaultValue={5} defaultChecked />
                <label htmlFor="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" defaultValue={4} defaultChecked />
                <label htmlFor="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" defaultValue={3} defaultChecked />
                <label htmlFor="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" defaultValue={2} />
                <label htmlFor="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" defaultValue={1} />
                <label htmlFor="star1" title="text">1 star</label>
              </div>
              <span>3 Reviews</span>
            </div>
            <div className="product-price-discount"><span><i className="fa fa-rupee" /> {productDetails?.price}</span></div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="size">Size</label>
              <select id="size" name="size" className="form-control">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="color">Color</label>
              <select id="color" name="color" className="form-control">
                <option>Black</option>
                <option>White</option>
                <option>Grey</option>
              </select>
            </div>
          </div>
          <div className="product-count">
           
            <Link to={'/cart'}  className="round-black-btn" onClick={()=>{
                handleCart();
            }}>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="product-info-tabs">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </div>
        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
          <div className="review-heading">REVIEWS</div>
          <p className="mb-20">There are no reviews yet.</p>
          <form className="review-form">
            <div className="form-group">
              <label>Your rating</label>
              <div className="reviews-counter">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">1 star</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Your message</label>
              <textarea className="form-control" rows={10} defaultValue={""} />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text"  className="form-control" placeholder="Name*" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text"  className="form-control" placeholder="Email Id*" />
                </div>
              </div>
            </div>
            <button className="round-black-btn">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details;
