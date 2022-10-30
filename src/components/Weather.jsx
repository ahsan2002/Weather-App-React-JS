import React, { useEffect, useState } from 'react';
import './css/weather.css';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

const Weather = () => {
    const [city, setcity] = useState();
    const [query, setquery] = useState("");

    useEffect(() => {

        const fetchApi = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=4b702834ecffeeafffd7470923dd2ea2`);

            const data = await response.json();
            console.log(data);
            setcity(data.main);
            
            
        }
        fetchApi();
    }, [query])

    // var icon = `http://openweathermap.org/img/wn/${city?.weather[0]?.icon}@2x.png`;
    

    


    const mydata = (event) => {
        setquery(event.target.value)
    }

    return (
        <>
            <div className="box">
                <h1 style={{marginTop:"20px"}} >My Weather App</h1>

                <div className="inputData">
                    <input type="text" className='inputField' onChange={mydata} />
                </div>

                {
                    !city ? (
                        <p className='errorMsg'>No Data Found</p>
                    ) : (
                        <>
                            <div className="info">
                                <h5 className='location'><LocationOnSharpIcon style={{ fontSize: "80px" }} />{query} </h5>
                                <h1 className="temp">{city?.temp}°C</h1>
                                <h3 className='tempmin_max'>Min:{city?.temp_min}°C | Max:{city?.temp_max}°C</h3>
                                {/* <img src={icon} alt="error" /> */}
                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </>
                    )
                }

            </div>
        </>
    )
}


export default Weather;