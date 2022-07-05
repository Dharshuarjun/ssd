import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Productitems from "./Productitems";
function Product(props){
    const [products,SetProduct]=useState([
        {
          title:"Samsung",
          image:"https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-fold3-f926-5g-sm-f926bzkginu-thumb-474118729?$264_264_PNG$"
        },
        {
          title:"iphone",
          image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg"
        },
        
        {
          title:"oneplus",
          image:"https://www.androidauthority.com/wp-content/uploads/2018/11/OnePlus-6T-Thunder-Purple-9.jpg"
        },
        
        {
          title:"Xiami",
          image:"https://images.fonearena.com/blog/wp-content/uploads/2017/09/Xiaomi-Redmi-Note-4-Lake-Blue-1024x918.jpg"
        }
        
        
     ]);
  return (
    
        <div className="col-lg-8">
         <div className="row">
        {
          products.map((product)=>{
            return <Productitems data={product}/>
          })
         
        }
        </div>
        </div>

  );
   
}


export default Product;