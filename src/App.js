import { useState } from 'react';

import Nav from './Nav/Nav';
import Recommended from './Recommended/Recommended';
import Products from './Product/Products';
import Sidebar from './Sidebar/Sidebar';
import products from './database/data';
import Card from './components/Card';
import './App.css';

function App() {

const[selectedCategory, SetSelectedCategory] = useState(null)

const[query, setQuery] = useState("")  

// input Filter
const handleInputChange = (event) =>{
setQuery(event.target.value)
}

// Radio Filter
const handleChange = (event) =>{
  SetSelectedCategory(event.target.value)
  }

  // Button Filter
  const handleClick= (event) =>{
    SetSelectedCategory(event.target.value)
    }

    // Querying
    const filteredItems = products.filter((product)=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1)

    function FilteredData (products, query, selected){
      let filteredproducts = products

      // filtering Input Items
      if(query){
        filteredproducts = filteredItems
      }

      // Selected Filter
      if(selected){
        filteredproducts = filteredproducts.filter(({category, color,company, title,newPrice}) => category === selected || color === selected || company ===selected || title ===selected || newPrice === selected)
      }
      
      return filteredproducts.map(
        ({
img, title, star, reviews, prevPrice, newPrice
      }) =>(
        <Card 
        key={Math.random()}
        img ={img}
        title ={title}
        reviews={reviews}
        prevPrice ={prevPrice}
        newPrice={newPrice}
        star ={star}
        
        />
      ))
    }

    const results =FilteredData(products,query, selectedCategory)
  return (
    <>
    <Sidebar handleChange={handleChange} />
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick} />
    <Products results = {results} />
    </>
  );
}

export default App;
