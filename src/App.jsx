
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Rasturants from './components/Restaurants';
import userInfo from "./data/userInfo.json";

import offers from "./data/offers.json";
import restaurants from "./data/restaurants.json";
import { useState } from 'react';

const filters = {
       1:"Cost High to Lost",
       2:"Cost Lost to High",
       3:"Ratings",
       4:"Delivery Time",
       5:"Relevance"
}


function App() {

  const [filterBy, setFilterBy] = useState('');
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) => {
    // console.log(newFilter);
    switch (newFilter) {
      case "1":{
        setFilterBy(1);
        // let newSortedBalues = data.sort((a,b)=> b.costForTwo - a.costForTwo );
        // setData(newSortedBalues);
        data.sort((a,b) => b.costForTwo - a.costForTwo);
        setData([...data]);
        break;
      } 
      case "2":{
        setFilterBy(2);        
        // let newSortedBalues = data.sort((a,b)=> a.costForTwo - b.costForTwo );
        // setData(newSortedBalues);
        data.sort((a,b)=> a.costForTwo - b.costForTwo);
        setData([...data]);
        break;
      }      
           
      default:setData(restaurants)
        break;
    }
    
    
  }


  return (
    <div >
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      <section className='near-you'/>
     <Filters filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
     <Rasturants restaurants={data}/>
    </div>
  );
}

export default App;
