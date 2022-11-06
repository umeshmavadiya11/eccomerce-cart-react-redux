import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  const {cartsData}=useSelector(state=>state.cart);

    
  return (
    <header>
    <div className="container1">
        <Link to={'/'} className={'h1'} >
        Ecommerce
      <strong className="logo">
        <i className="fa fa-shopping-cart" />
      </strong>
      </Link>
      <label className="open-search" htmlFor="open-search">
        <i className="fa fa-search" />
        <input
          className="input-open-search"
          id="open-search"
          type="checkbox"
          name="menu"
        />
        <div className="search">
          <button className="button-search">
            <i className="fa fa-search" />
          </button>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="input-search"
          />
        </div>
      </label>
      <nav className="nav-content">
        <ul className="nav-content-list m-0">
          <li className="nav-content-item account-login">
            <label
              className="open-menu-login-account"
              htmlFor="open-menu-login-account"
            >
              <input
                className="input-menu"
                id="open-menu-login-account"
                type="checkbox"
                name="menu"
              />
              <i className="fa fa-user-circle" />
              <span className="login-text">
                Hello, Sign in <strong>Create Account</strong>
              </span>
              <span className="item-arrow" />
              <ul className="login-list">
                <li className="login-list-item">
                  <a href="https://www.cupcom.com.br/">My account</a>
                </li>
                <li className="login-list-item">
                  <a href="https://www.cupcom.com.br/">Create account</a>
                </li>
                <li className="login-list-item">
                  <a href="https://www.cupcom.com.br/">logout</a>
                </li>
              </ul>
            </label>
          </li>
          <li className="nav-content-item">
            <a className="nav-content-link" href="https://www.cupcom.com.br/">
              <i className="fa fa-heart" />
            </a>
          </li>
          <li className="nav-content-item">
            <Link to={'/cart'} className="nav-content-link" >
              <i className="fa fa-shopping-cart" /> {cartsData?.length>0 &&<span className='cart-number'>{cartsData.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>  
  )
}

export default Navbar