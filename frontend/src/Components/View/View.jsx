import React from 'react';

import './View.css';
function View({item}) {
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={item.image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {item.price} </p>
          <span>{item.name}</span>
          <p>{item.category}</p>
          <span>{new Date(item.createdAt).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' })}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
