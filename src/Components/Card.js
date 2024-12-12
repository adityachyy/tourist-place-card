import { useState } from "react";

function Card( {id, image,info , price , name },{removeTour})
{

  const[readmore, setReadmore]=useState(false);
  
  
  const description= readmore ? info :'${info.subString(0,200)}.....'

function readmoreHandler()
{
  setReadmore(!readmore);
}





  return(
<div className="Card"> 
<img src={image} class Name="image"></img>
<div class="Tour-info">
<div class Name="tour-details">
  <h4 className="tour-price">{price}</h4>
<h4 className="tour-name">{name}</h4>



</div>
<div className="description">
  {description}
  <span className="read-more" onclick={readmoreHandler}>
    {readmore ? 'show less': 'read more}'}
  </span>
</div>

</div>
<button className="btn-read" onclick={()=>removeTour(id)}>Not Interested</button>
</div>



  );


}
export default Card;