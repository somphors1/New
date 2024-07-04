import React, {useState}from 'react'
import './Home.css'
import Headerpage from '../../components/Header/Header'
import ExploreMenuList from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';



const Home = () => {

    const [category,setCategory] = useState("All"); 

  return (
    <div>
      <Headerpage/>
      <ExploreMenuList category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
