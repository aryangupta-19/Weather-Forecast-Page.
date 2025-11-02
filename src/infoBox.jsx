import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./infoBox.css";


export default function infoBox({info}){

    const initialImgUrl = "https://images.unsplash.com/photo-1643659345110-716ff9be3a9f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_Url = "https://images.unsplash.com/photo-1615752592676-f6bd84f9419d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670";
    const Cold_Url = "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670";
    const Rain_Url = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3540";

    // let info = {
    //     city: "Jammu",
    //     feels_like: 24.84,
    //     temp: 25.05,
    //     temp_min: 25.05,
    //     temp_max: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    // };

    return(
        <div className="infoBox">
            {/* <h1> Weather Info - {info.weather} </h1> */}
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        // image={initialImgUrl}
                        image={
                            info.humidity>80? Rain_Url: (info.temp>15)? Hot_Url: Cold_Url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {/* {info.city} */}
                        {info.city} &nbsp;
                        {info.humidity>80? <BeachAccessIcon/>: (info.temp>15)? <SunnyIcon/>: <AcUnitIcon/>}
                        </Typography>

                        <Typography variant="body2" color= 'text.secondary' component={"span"} >    
                            {/* add component span */}
                        <p>Temperature = {info.temp}&deg;c</p>
                        <p>Humidity = {info.humidity}&deg;c</p>
                        <p>Min Temp  = {info.temp_min}&deg;c</p>
                        <p>Min Temp  = {info.temp_max}&deg;c</p>
                        <p>The weather Feels Like  = {info.feels_like}&deg;c</p>
                        <p>
                            The weather can be descibed as = <i>{info.weather}</i> and feels like = {info.feels_like}&deg;c
                        </p>
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
        </div>
    );
}

//   ab heading toh center mai agyi but card center mai nahi aya 
//  so to take this card to center easy way is to make it wrap up in another div and use flexbox 