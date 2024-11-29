import React, { useEffect, useState } from 'react'
import './Home.css' 

const Home = () => {
   const [data , setdata] = useState([])
   const [allData , setAlldata] =useState([])

   useEffect(()=>{
      fetch('https://api.jsonbin.io/v3/b/6747149aad19ca34f8d1539d')
      .then(response => response.json())
      .then(json =>{ setdata(json.record), setAlldata(json.record)})

   },[])
   
   console.log(data)


   const handelCat =(buttonData)=>{
    const filterData= data.filter((item)=>{
      return item.category == buttonData
    })
    setAlldata(filterData)
   }
  return (
    <>
    
 <div className="cards-main">
   <div className="container">

   <div className="but">
      <button>ALL SHOE</button>
      <button onClick={()=>handelCat("Nike")}>NIKE</button>
      <button onClick={()=>handelCat("New Balance")}>NEW BALANCE</button>
      <button onClick={()=>handelCat("Puma")}>PUMA</button>
      <button onClick={()=>handelCat("Adidas")}>ADIDAS</button>
      <button onClick={()=>handelCat("Converse")}>Converse</button>
    </div>

<div className="shoe_card">
{
   allData.map((item)=>(
      <div key={item.id} className="shoe">
      <div className="shoe_images">
<img src= {item.images} alt="shoe" />
      </div>
      <div className="shoe_text">
         <h2>Brand : {item.brand} </h2>
         <h3>Model : {item.model} </h3>
         <h3>Price : {item.price} </h3>
         <h3>Discount : {item.discount} </h3>
         <h3>Type : {item.category}</h3>

      </div>
   </div>
   ))
}

  
</div>

   </div>
 </div>

    </>
  )
}

export default Home