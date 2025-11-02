import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";

export default function searchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8cacc59bf4d45ea689f84cd1a37ce188";

    let getWeatherInfo = async () => {

        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // fetch data 
            // convert response to json format 
            let jsonResponse = await response.json();
            console.log(jsonResponse); 
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                // now weather dekh usme array hai jisme discription store karwa sakte hai 
                weather: jsonResponse.weather[0].description,
            };
            
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    } 


    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo =  await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }


    return(
        <div className="searchBox">
            {/* <h3>Search for Weather</h3> */}

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" onClick={handleSubmit} >
                    Search
                </Button>
                {error && <p style={{color:"red"}}> No!!1 Such place exists...</p>}
            </form>
        </div>
    );
}


// create a form 
// create input -> textField from MATERIAL UI
//  id label variant 

// Adding button 
// add type = submit (aditionally add)

// We can also add material ui validations 

// now we know we have to set stateVariables in form -> input and search button 
// make a city state variable and set city function which will be setteled in handle change function 

// use weather API create account and get your api key in profile details 

// now here in this api ->{https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}}

// We also have to pass lat and long (latitude and longitude) therefore we will use geocoder Api -> there small written built-in
// api use that 


// Built-in API request by city name
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// query string (q) ke anday city ka name or key ki information jayegi 

//  we can remove part after q from url 


// now to take weather information create another function and here we will do api call so function must be asynchronous 
// function 

//  now here fetch api url and send q string (which will involve city name )
// so our asynch function must have info of city so we can pass it as parameter 
//  or  we can take our state variable at top and state variable is accesseable from anywhere any fucntion...

//  recall how to pass Query string 

//   ?q=${city}&appid=${api_key}

//  ab jo response fetch kia hai usko json format mai convert kro then usko print krvado console mai 
//  note json mai convert krte samay await use krna imp hai becoz data ane mai thoda time delay bhi ho sakta hai 

// then jaise hi submit hojaye hum apne getweatherinfo ko call krdenge 

// we have given a lot of data for searched city like temp (max-min) coordinates humidity wind etc....

// note abi jo info ayi hai uske units matric mai nahi hai so to fix it we will use 

// &units=metric  in fetch request 

//  now we will create a new object from jsonResponse 

//  data sara object ke main mai hai 

// Ab data ko dom pr show krwavane ke liye ik baar apne components ko analyse krr 





//  App --> Weather App -> search + button + infoBox
//      weatherApp hamare do chizen render krvayega (search + info)

// search box ke paas jo bhi data ayega render krke vo uss data ko weatherApp ko pass krdega through some state varaible 
// then vp value weahterApp infoBox mai send krega ass props and and then infobox will do work to display

// now create a infoBox component and there create a object called weatherInfo initialise it with some data of weather 
// exactly similar to result data of previously searched cities 

//  now use a media card from material UI to show all this data via card 

//  give image to card using UNSPLASH




//  ab dono component completely ban chuke info box and seach now to combine them inka ik parent component bnadeng weatherApp 