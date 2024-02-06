import React,{useState,useEffect} from 'react';
import './items.css'



const Items = () => {
  const [products,setProducts]=useState([]);

  const API="https://fakestoreapi.com"

  const imageStyle = {
    width: '100px', // Set your desired width
    height: 'auto', // Maintain aspect ratio
    borderRadius: '5px', // Add any other styles you want
  };

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch(`${API}/products`);
        if(!res.ok){
          throw new Error ('Network issue')
        }
        const productsData=await res.json();
        setProducts(productsData)
      }catch(err){
        console.error(err)
      }

    };
    fetchData();
  },[]);
  return (
    <div>
    <h1>Product List</h1>
    <ul>
      <div className='main-container'>
      {products.map(product => (
        <div className="products-container" key={product.id}>
          {product.title}<br></br>
          <img style={imageStyle} src={product.image}/><br></br>
          {product.price}
        </div>
      ))}
      </div>
    </ul>
  </div>
  )
}

export default Items
