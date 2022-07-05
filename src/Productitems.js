import React from 'react';

function Productitems(props) {
    return(
 <div class="card" style={{width:"200px",height:"80px"}}>
 <img src={props.data.image} style={{width:"200px",height:"170px"}}class="card-img-top" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">{props.data.title}</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Add to Cart</a>
 </div>
</div>
  )
}

export default Productitems;