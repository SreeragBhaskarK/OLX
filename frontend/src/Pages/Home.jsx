import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function Home() {
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('/').then((response) => {
      if (response.data.success) {
        console.log(response.data.result);
        setItems(response.data.result)
      }
    })
      .catch((err) => {
        console.log(err);
        navigate('/login')
      })
  }, [])
  return (
    <div className="homeParentDiv">
      <Header />
      <Container>
        <Banner />
        <Posts item={items} />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;

