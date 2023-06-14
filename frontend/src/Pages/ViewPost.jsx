import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../axios'
import Header from '../Components/Header/Header'
import View from '../Components/View/View'

function ViewPost() {
    const {id} = useParams()
    const [item, setItem] = useState({})
    useEffect(()=>{
        axios.get(`/item/${id}`).then((response)=>{
            setItem(response.data.result)
        })
    },[])
    return (
        <div>
            <Header />
            <View item={item}/>
        </div>
    )
}

export default ViewPost
