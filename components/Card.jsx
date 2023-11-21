import React from 'react'

function Card({city,search,url}) {
  return (
    <main className='card'>
    <div className='card-body'>
    
    <header>
            <h1>{search}</h1>
        </header>

    <div className='sub-block'>
        <div>
            <img src={url} alt='' width={120} height={90}/>
        </div>

        <div>
            <h2> {city?.main?.temp + '\xB0'}C</h2>
            <p>(Feels like {city?.main?.feels_like +'\xB0'} C)</p>
            <h3>{city?.weather[0].main}</h3>

            <div className='sub'>
                <span> Max temp :{city?.main?.temp_max +'\xB0'}C</span>
                <span> Min temp :{city?.main?.temp_min +'\xB0'}C</span>
            </div>

                <p>Humidity : {city?.main?.humidity}</p>
         </div>
    </div>               
    </div>
</main>
  )
}

export default Card