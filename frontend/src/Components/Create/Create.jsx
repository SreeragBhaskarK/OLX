import React, { Fragment, useState } from 'react';
import './Create.css';
import { useNavigate } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import axios from '../../axios';
const Create = () => {
  const [image, setImage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    formData.image = image
    formData.price = Number(formData.price)
    axios.post('/add_post', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then((response) => {
      if (response.data.success) {
        navigate('/')
      }
    })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <header className='createPostHeader'>
        <div className='headerChild'>
          <div className='headerChild1'>

          </div>
        </div>
      </header>
      <main style={{ paddingTop: '68px' }}>
        <Container>
          <div style={{ margin: '0 0 68px' }}>
            <div style={{ margin: "0 auto 0 auto", width: 'fit-content' }}>
              <h1 style={{
                width: '100 %',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                <span>
                  POST YOUR AD
                </span>
              </h1>
              <div>
                <Card className='postCreateCard' >
                  <div className="centerDiv">
                    <form >
                      <label htmlFor="fname">Name</label>
                      <br />
                      <input
                        className="input"
                        type="text"
                        id="fname"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <br />
                      <label htmlFor="fname">Category</label>
                      <br />
                      <input
                        className="input"
                        type="text"
                        id="fname"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      />
                      <br />
                      <label htmlFor="fname">Price</label>
                      <br />
                      <input className="input" type="number" id="fname" name="price" value={formData.price} onChange={handleChange} />
                      <br />
                    </form>
                    <br />
                    <img alt="Posts" width="200px" height="200px" src={image && URL.createObjectURL(image)} ></img>
                    <form>
                      <br />
                      <input type="file" onChange={(e) => {
                        setImage(e.target.files[0])
                      }} />
                      <br />
                      <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
                    </form>
                  </div>

                </Card>
              </div>

            </div>
          </div>
        </Container>
      </main >
    </>
  );
};

export default Create;
