import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import {  DecreaseInCart, IncreaseInCart, RemoveToCart } from '../../redux/Actions/cart';


const Cart = (props) => {
    const {cartsData}=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const handleDeleteCartItem=(id)=>{
        dispatch(RemoveToCart(id))
    }
    const handleCardAddOrRemove=(type,id)=>{
        if(type === "-"){
            dispatch(DecreaseInCart(id))
        }else{
            dispatch(IncreaseInCart(id))

        }
       
    }
  return (
    <div className="container">
  <table id="cart" className="table table-hover table-condensed">
    <thead>
      <tr>
        <th style={{ width: "50%" }}>Product</th>
        <th style={{ width: "10%" }}>Price</th>
        <th style={{ width: "15%" }}>Quantity</th>
        <th style={{ width: "22%" }} className="text-center">
          Subtotal
        </th>
        <th style={{ width: "10%" }} />
      </tr>
    </thead>
    <tbody>
        {cartsData&&cartsData?.map(item=><tr key={item.id}>
        <td data-th="Product">
          <div className="row">
            <div className="col-sm-2 hidden-xs">
              <img
                src={item?.image}
                alt="..."
                className="img-responsive"
                width={"100%"}
              />
            </div>
            <div className="col-sm-10">
              <h4 className="nomargin">{item.name}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </td>
        <td data-th="Price"><i className="fa fa-rupee" />{item?.price}</td>
        <td data-th="Quantity">
            <div className='d-flex'>      
            <div className="qtyminus" onClick={()=>{
                if(item.quantity <=1){
                    dispatch(RemoveToCart(item.id))
                }else{
                    handleCardAddOrRemove("-",item.id)
                }
            }}>-</div> 
          <input
            type="number"
            min={0}
            className="form-control text-center w-75"
            disabled
           
            value={item.quantity}
          />
           <div className="qtyminus" onClick={()=>handleCardAddOrRemove("+",item.id)}>+</div>
          </div>

        </td>
        <td data-th="Subtotal" className="text-center">
        <i className="fa fa-rupee" /> {item?.totalAmout}
        </td>
        <td className="actions" data-th="">
          
          <button className="btn btn-danger btn-sm" onClick={()=>handleDeleteCartItem(item.id)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>)}
      
    </tbody>
    <tfoot>
     
      <tr>
        <td>
          <Link className="btn btn-warning"to={'/'}>
            <i className="fa fa-angle-left" /> Continue Shopping
          </Link>
        </td>
        <td colSpan={2} className="hidden-xs" />
        <td className="hidden-xs text-center">
        {cartsData &&  <strong>Total <i className="fa fa-rupee" /> {cartsData?.map(i=>parseFloat(i.totalAmout)).reduce((a, b) => a + b, 0).toFixed(2)}</strong>}
        </td>
        <td>
          <Link className="btn btn-success btn-block">
            Checkout <i className="fa fa-angle-right" />
          </Link>
        </td>
      </tr>
    </tfoot>
  </table>
</div>

  )
}

export default Cart