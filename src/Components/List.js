import React from 'react';
import {useEffect, useState} from 'react'
import './List.css';
import axios from 'axios';

function List() {

    const [data, setData] = useState([])
    const [location, setLocation] = useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e7946f7765931c840a35548ad3fa50c4`
    const img = ("https://www.google.com/search?q=sao+paulo+beach&tbm=isch&chips=q:sao+paulo+beach,g_1:brasil:wHp-AYP0L-4%3D&rlz=1C1PWSB_jaJP955JP955&hl=en&sa=X&ved=2ahUKEwiJob63oM35AhVeTPUHHXT3Cd0Q4lYoAnoECAEQKA&biw=1608&bih=954#imgrc=QPZ3gYUWxrt12M")

    useEffect = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData([data]))
        console.log(url)
    }

    const searchLocation = (event) => {
        if (event.key == 'Enter') {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
        }
        // setLocation("")
    }


    return (
        <div className="app">

            <div className="container">
                <div className="top">
                    <div className="search">
                        <input type="text" placeholder="Search" onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} />
                    </div>
                    <div className="location">
                        <h3>{data.name}</h3>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}</h1>: null}
                    </div>
                </div>

                <div className="bottom">
                    <div className="feels">
                        <p>Feels Like </p>
                        {data.main ? <h1>{data.main.feels_like.toFixed()}</h1>: null}
                    </div>
                    <div className="humidity">
                        <p>Humidity</p>
                        {data.main ? <h1>{data.main.humidity}</h1>: null}
                    </div>
                    <div className="wind">
                        <p>Wind Speed</p>
                        {data.main ? <h1>{data.wind.speed}</h1>: null}
                    </div>
                </div>
                
                
            </div>

        </div>
    )


}

export default List