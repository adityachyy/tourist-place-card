import {useState} from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = ()=> {


const [tours , setTours]=useState(data);

function removeTour(id)
{
  const newTours=tours.filter(tour=>tour.id !== id);
  setTours(newTours);
}



if(tours.length===0)
{
  return( <div class Name="refresh">
      <h2>no Tour Left</h2>
      <button onclick={()=>setTours(data)}>Refresh</button>
    </div>
  );
}







   return (<div>
    <Tours tours={Tours}  removeTour={removeTour}></Tours>
    </div>
);
};

export default App ;
