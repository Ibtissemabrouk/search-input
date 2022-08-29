import React, { useState } from "react";
import "./style.css";
 


function App(){
const list = [
  "Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
  const[filterList, setFilterList] = useState (list);
const handleSearch = (e) => {
  let input = e.target.value;
  // filtedValues est une fonction
  const filtedValues =
  //.trim() = elimine les espace
  //.tiLowerCase = transforme les chaine de caractaire en miniscule
  //.filter 
  list.filter((el)=> el.toLowerCase().indexOf(input.toLowerCase().trim())!== -1);

  setFilterList(filtedValues)
   
};
  return (
    <div className="app">
    <div >
    <label>Search : </label>
      <input type="text" placeholder="write a fuit name ..."
      onChange={handleSearch} />
      
    </div>
   { filterList.map((item,index) =>
     (<div className="list" key={index}>{item}
     </div> //display each item
     ))}
     </div>
  );

}



export default App;
