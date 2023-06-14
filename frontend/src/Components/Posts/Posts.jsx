
import React from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Link } from 'react-router-dom'
import { Placeholder } from 'react-bootstrap'

function Posts({ item }) {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {item && item.map((obj, index) => {
            return (
              <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>

                <Link style={{
                  textDecoration: "none",
                  color: "inherit",
                  outline: "none"
                }} key={index} to={`/item/${obj._id}`}>
                  <div className="image">
                    <img src={obj.image[0]} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; 250000</p>
                    <span className="kilometer">{obj.category}</span>
                    <p className="name">{obj.name}</p>
                  </div>
                  <div className="date">
                    <span>{new Date(obj.createdAt).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' })}</span>

                  </div>
                </Link>
              </div>

            )
          })}


        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Posts;
