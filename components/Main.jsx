import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from "axios";
import { setFunction } from './Icons';

function Main() {
    const[city, setCity] = useState(null);
    const [search, setSearch] = useState("Bengaluru");
    const [icon, setIcon] = useState(null);
   
    useEffect(() => {
        async function getData(){
            let api =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=98ed41ff26ca1bfa8953af9df24c41ea`;
        try{
            let response = await fetch(api);
            let data = await response.json();
            console.log(data);
            setCity(data);
            if(data?.name){
                setIcon(data.weather[0].icon)
            }
            
        } catch (error) {
            console.log(error.response.data.message);
        }
    }getData()
    },[search]);
    console.log(city);
        
  return (
    <div>
        <div className='search'>
            <input type="search" placeholder='Search city' onChange={(e) => setSearch(e.target.value)} />
        </div>
        {
            city?.name ?
            ( <Card search={search} city={city} url={setFunction(icon)}/> ) 
            : <div> <h1>City not found</h1> </div>
        }
    
    </div>
   
  )
}

export default Main