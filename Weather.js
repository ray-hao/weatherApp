import React, {useState, useEffect} from "react"

const api = {
  key: "2ecc90681044ffa3960e4211bb4ea71d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {

    // useState hooks
    const[weather, setWeather] = useState({})
    const[current, setCurrent] = useState("")
    const[query, setQuery] = useState("Waterloo")

    // useEffect hook to fetch data and update query whenever our query changes
    useEffect(() => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
            })
    }, [query])

    // for submit button
    const handleClick = () => {
        if (current != "") {
        setQuery(current)
        }
    }

    // for regualr textbox
    const handleEnter = (e) => {
        if (current != "") {
            if (e.key === "Enter") {
              setQuery(current)
            }
        }
    }

    // gets date for output
    const getDate = info => {
        let weekDayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let weekday = weekDayList[info.getDay()];
        let date = info.getDate();
        let month = monthList[info.getMonth()];
        let year = info.getFullYear();

        return `${weekday}, ${month} ${date}, ${year}`
    }

    return(

        <div className="background">

            <input type="text"
                className="searchbar" 
                value={current} 
                placeholder="Search Location..." 
                onChange={
                    (e) => {
                    setCurrent(e.target.value)
                    }
                }
                onKeyPress={handleEnter}
            />

            <button onClick={handleClick} className="submitButton">Get Weather!</button>

             // assures the data actually exists
            {(typeof weather.main != "undefined") ? (

                <div className="output">
                <br />
                <div>Date: {getDate(new Date())}</div>
                <br />
                <div>Location: {weather.name}, {weather.sys.country}</div> 
                <div>Condition: {weather.weather[0].main}</div>
                <div>Temperature: {Math.round(weather.main.temp)}°C feels like {Math.round(weather.main.feels_like)}°C</div>
                </div>



                //console.log(weather.name), //Waterloo
                //console.log(weather.sys.country), //Canada
                //console.log(weather.weather[0].main), //Cloudy
                //console.log(Math.round(weather.main.temp)) //Temp

            ) : <div className="invalidInput"><br />Sorry, Please Enter a Valid City</div>}
        </div>

    )
}

export default Weather
