
import './App.css'

// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';

import WeatherApp from "./weatherApp";

function App() {

  let handleClick = () => {
    console.log("Button was clicked");
  }
  return (

    <>
    {/* <h2>Material UI</h2>

    <Button onClick={handleClick} variant="contained" color="error" size="small"startIcon={<DeleteIcon />} >
       Delete
    </Button>

    {/* <Button onClick={handleClick} variant="contained" disabled>
      Click me 3 !!!
    </Button> */}

    {/* <Alert severity="error">Delete option is givern...</Alert> */} 



      
      <WeatherApp></WeatherApp>



    </>
  )
}

export default App

 
// ab button ko dispoay krwane ke liye phle import karwana padta hai (imp)-> button tabhi show hoga jab koi text like click me 
// and variant given hoga button ko 

//  ab handlars bana sakte hai onClick ke liye  


// Ab hum apne minor project ko banayenge 
// WEATHER WIDGET 

// search box -> search for cities + Search button 
// onClicking search btn a card will display showing weather details like temp (min-max) humidity , wind , hot , cold etc....

// ab batao weather information kese aygi kisi bhi city ki 
//  we will use weather API (which will send us data )

// note-> Generally in API's there's a chance of inaccurate data becoz they are sending data from third party source....

// important how will use API 
// and how on search data will come ....

