let dayName =document.querySelector("#dayName")
let datea=document.querySelector("#date")
let city =document.querySelector("#city")
let degree=document.querySelector("#degree")
let cclick=document.querySelector("#cclick")
let search=document.querySelector("#search")
let stateOfWeather=document.querySelector("#stateOfWeather")
let weatherPicture=document.querySelector("#weatherPicture")
let degreeSecDayMax=document.querySelector("#degreeSecDayMax")
let degreeSecDayMin=document.querySelector("#degreeSexDayMin")
let stateOfWeatherSec=document.querySelector("#stateOfWeatherSec")
let iconTwo=document.querySelector("#iconTwo")
let dayOfThird=document.querySelector("#dayOfThird")
let degreeThirdDayMax=document.querySelector("#degreeThirdDayMax")
let degreeThirdDayMin=document.querySelector("#degreeThirdDayMin")
let stateOfWeatherThird=document.querySelector("#stateOfWeatherThird")
let iconThree=document.querySelector("#iconThree")



search.addEventListener( `keyup`,function () {
       country=search.value;
       getapi(country);
console.log(`ss`)
})


async function getapi(country) {   

    var apiResponse = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=2011140e026e4b13a2e172255221301&q=${country}&days=3&aqi=no&alerts=no`);
    var receive = await apiResponse.json();
console.log(receive);

    date=receive.forecast.forecastday[0].date;
    let a= date.toString();
    let s = a.split(`-`)
    let f=(s[2]);

    city.innerHTML=receive.location.name;
    degree.innerHTML=receive.current.temp_c;
    stateOfWeather.innerHTML=receive.current.condition.text;
    weatherPicture.src=`https:${receive.current.condition.icon}`; 
    city.innerHTML=receive.location.name;
    datea.innerHTML= f + ` january`;


  iconTwo.src=`https:${receive.forecast.forecastday[1].day.condition.icon}`;
    degreeSecDayMax.innerHTML=receive.forecast.forecastday[1].day.maxtemp_c;
   degreeSecDayMin.innerHTML=receive.forecast.forecastday[1].day.mintemp_c;
   stateOfWeatherSec.innerHTML=receive.forecast.forecastday[1].day.condition.text;
   iconThree.src=`https:${receive.forecast.forecastday[2].day.condition.icon}`;
   degreeThirdDayMax.innerHTML=receive.forecast.forecastday[2].day.maxtemp_c;
   degreeThirdDayMin.innerHTML=receive.forecast.forecastday[2].day.maxtemp_c;
   degreeSecDayMin.innerHTML=receive.forecast.forecastday[2].day.mintemp_c;
   stateOfWeatherThird.innerHTML=receive.forecast.forecastday[2].day.condition.text;



   }
   



//  omar=()=> {

//   console.log(this)
  
// }
// omar();

// function a() {
//   console.log(this)
  
// }
// // a();
// let count = document.getElementById(`count`)

// setTimeout(function () {
// count.innerHTML-=`1`    
// },1000);



// setInterval(function () {
// count.innerHTML-=`1`    
// },1000)
// var a =  [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
//   );
// console.log(a);
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers[5]);
// var a = [1,2,3].concat([4,5,6])
// console.log(a);

// let nam ,
//      age ,
//      statu ;
// function checkStatus(a, b, c) {
//     let info = [a,b,c];


//   for (let i = 0; i<3; i++ ){
//     typeof(info[i]) === "string"
//       ?(nam = info[i]) 
//       : typeof(info[i]) === "number" 
//       ? (age = info[i] )
//        :typeof(info[i]) === "boolean" 
//       if (info[i] === true) {
//       statu = "Available"
//     }else{
//        statu = " Not Available"
//       }
      

//     }


//   console.log( `Hello ${nam}, Your Age Is ${age}, You Are ${statu} For Hire`);
// }
// checkStatus("Aboud", 26, true); // "Hello Aboud, Your Age Is 26, You Are Available For Hire"
//  checkStatus(26, "Aboud", true); // "Hello Aboud, Your Age Is 26, You Are Available For Hire"
// checkStatus(true, 26, "Aboud"); // "Hello Aboud, Your Age Is 26, You Are Available For Hire"
// checkStatus(false, "Aboud", 26); // "Hello Aboud, Your Age Is 26, You Are Not Available For Hire"


// function a(age,name,ismarried) {
//     if (age===boolean ) {
        
//     }
//     console.log(` his age is ${age} his name is ${name} is  he married ${ismarried}`)
    
// }
// a(`moaaz`,13,true);

// new string with commas
// const stringWithCommas = 'moaazmohamed422@yahio.com';

// // split string by the commas into an array
// const wordArray = stringWithCommas.split('@')

// // join array into a string with a space as separator.
// const stringWithoutCommas = wordArray.join('@');

// console.log(wordArray)
// console.log(stringWithoutCommas)
// // output: I want to come home