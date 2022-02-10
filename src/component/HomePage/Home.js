import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import './Home.css'
const Home = () => {
    const [foods,setFoods]=useState([])
useEffect(()=>{
    fetch('http://localhost:5000/food')
    .then(res=>res.json())
    .then(data=>setFoods(data))
},[foods])

    return (
        <div>
            <table>
                <tr>
                <th>Name</th>
                <th>Price</th>
                </tr>
                {
                        foods.map(food=><tr>

                            <td>{food.foodName}</td>
                            <td>{food.price}</td>
                        </tr>)
                }

            </table>
            
        </div>
    );
};

export default Home;