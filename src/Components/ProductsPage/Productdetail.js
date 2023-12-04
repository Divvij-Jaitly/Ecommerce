import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {

    const {id} =useParams()
    console.log("id",id)

    const [prod,setprod] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products?skip=0&limit=150//$(id').then((response)=>{
            setprod(reponse.data)
        })
    },[])
    console.log("prod", prod)

  return (
    <div>
        <p>{prod.title}</p>
        <p>{prod.description}</p>
        <p>{prod.price}</p>
        <p>{prod.discountPercentage}</p>
        <p>{prod.rating}</p>
        <p>{prod.stock}</p>
        <p>{prod.brand}</p>
        <p>{prod.category}</p>
        <p>{prod.thumbnail}</p>
        <p>{prod.images}</p>
    </div>
  )
}

export default Productdetail