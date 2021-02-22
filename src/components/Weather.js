import React, {useState, useEffect} from "react"

const api = {
  key: "2ecc90681044ffa3960e4211bb4ea71d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function DataFetch() {

    const[weather, setWeather] = useState({})
    const[current, setCurrent] = useState("")
    const[query, setQuery] = useState("Waterloo")

    useEffect(() => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
            })
    }, [query])

    const handleClick = () => {
        if (current != "") {
        setQuery(current)
        }
    }

    const handleEnter = (e) => {
        if (current != "") {
            if (e.key === "Enter") {
              setQuery(current)
            }
        }
    }

    return(

        <div>
            <input type="text" 
            value={current} 
            placeholder="Search Location..." 
            onChange={
                (e) => {
                setCurrent(e.target.value)
                }
            }
            onKeyPress={handleEnter}
            />
            <button onClick={handleClick}>Submit</button>

            {(typeof weather.main != "undefined") ? (

                <h1>{weather.name}, {weather.sys.country}, {weather.weather[0].main}, {Math.round(weather.main.temp)}, TEST</h1>

                //console.log(weather.name), //Waterloo
                //console.log(weather.sys.country), //Canada
                //console.log(weather.weather[0].main), //Cloudy
                //console.log(Math.round(weather.main.temp)) //Temp
            ) : ('')}
        </div>

    )
}

export default DataFetch