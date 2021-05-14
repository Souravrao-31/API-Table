import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
   
   const [product, setProduct] = useState([])
   const [search, setsearch] = useState()

   const getProductdata =async () =>{

    try{
       const data = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
       console.log(data.data);
      setProduct(data.data);
    }
    catch(e){
     console.log(e)
    }

  };

  useEffect( () =>{
    getProductdata();
  }
  ,[])


  return (
    <div className="App">

     <h1>Table</h1>

   <input
    type = "text"
    placeholder = "Search here"
    onChange= { (e) => {
      setsearch(e.target.value)
    }}
   />
   
    {
      product.filter(item => {
        if(search == ""){
            return item;
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase()) ){
              return item;
        }
      })
      .map(item => {
          return 
         (
            <p> 
            {item.name} 
            </p>
         );
      })
    }


    </div>
  );
}

export default App;
