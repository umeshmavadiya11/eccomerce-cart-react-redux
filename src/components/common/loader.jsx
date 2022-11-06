import React from 'react';
import './style.css';

const Loader = ({width,height}) => {
  return (
    <div className='main-laodin'>
         <div className="spinner" style={{width:width,height:height}}></div>
    </div>
  )
}

export default Loader