//First get apiKey from openweathermap website and put at the end &units=metric to view temp in celsius
const apiKey = `d6ac20ac97ae1330386597f6e356dae1&units=metric`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//add event listener to generate button 
const gen = document.getElementById("generate");
gen.addEventListener("click", async () => {
  //Save feelings and Zip values in variables 
  let feeling = document.getElementById("feelings").value;
  let code = document.getElementById("zip").value;
  //create api url and fetch the data as json object 
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${code}&appid=${apiKey}`;
  const response = await fetch(url).then((res) => res.json());
  const temp = await response.main.temp;
  console.log(temp);

  //POST request which is object passed as second parameter to fetch() 
  await fetch("/add", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    //convert data to json String 
    body: JSON.stringify({ temp: temp, date: newDate, feeling: feeling }),
    
  });
  //fetch all data from server side  
  const allData = await fetch('/all').then((res) => res.json());
  //Then update page with required data 
  document.getElementById("date").innerHTML = `Date: ${allData.date}`;
  document.getElementById("content").innerHTML = `Feeling: ${allData.feeling}`;
  document.getElementById("temp").innerHTML = `Temp: ${allData.temp}`;
});
