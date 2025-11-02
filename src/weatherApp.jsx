import {useState} from "react";
import SearchBox from "./searchBox.jsx";
import InfoBox from "./infoBox.jsx";


export default function weatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jammu",
        feels_like: 24.84,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style  ={{textAlign: "center"}}>
            <h1>WEATHER APP</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}