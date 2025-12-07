//Ye ek function hai jo weather data fetch karega.
async function getWeather(cityName) { 
    
//Ye line Open-Meteo ka geocoding API call kar rahi hai.
// Kaam: city name → latitude & longitude mil jaye.
//or json me ocnvert krdia jo bhi data aya
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&country=PK`);
    const geoData = await geoRes.json();
//Check karta hai agar city nahi mili API me, to null return krdena
    if (!geoData.results || geoData.results.length === 0) return null;

// Agar city mili → uska latitude aur longitude nikal liya.
// Ye information weather fetch karne ke liye zaroori hai.
    const { latitude, longitude } = geoData.results[0];

//ab lat long milgaya hai to yeh api call kri ye lat long ke hisaab se temp dedegi us city ka
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    //ab ye weather data me current weather object hota wo manglalia jisme hame temp, wind speed etc miljayega us particular long lat ka
    return weatherData.current_weather; // temp, wind, weathercode

    //summary: in short phela api call kia q ke city name dale to long lat mile, dosra call kia ke us lat long ka temp mile
}
//Ye function UI box create karega aur weather data dikhayega.
//city parameter = user ne dropdown me select kiya.
const weatherBox = async  function(city){ // yeh user drop down value hai yani city jo user select krega
    //to remove old box
    const oldBox = document.getElementById("weatherBox")
    if (oldBox)oldBox.remove()

// Ye line API call kar rahi hai aur result current me store ho raha hai.
//Agar current null hai (city nahi mili) → function kuch bhi nahi karega.
    const current = await getWeather(city);
    if (!current) return;    

// Ye div create kar raha hai jisme weather info dikhegi.
    const box = document.createElement("div")
    box.id = "weatherBox"
    box.style.height = '300px'
    box.style.width = "60%"
    

    const text = document.createElement("p")
    text.id = "heading"
    text.innerHTML =   `Current Weather : ${city} `// yeh city basically dropdown.value hai

    const temperature = document.createElement("div")
    temperature.id =  "temp"

//yeh isme api se jo current aya tha usme temp ko bolalia
    const degree = document.createElement("p")
    degree.innerHTML = `Temperature  ${current.temperature}°C` // API data
    degree.id = "deg"

//yeh isme api se jo current aya tha usme windspeed ko bolalia
    const detail = document.createElement("p")
    detail.innerHTML = `Wind Speed ${current.windspeed} km/h` // API data
    detail.id = "det"

    
    box.appendChild(text)
    temperature.appendChild(degree)
    temperature.appendChild(detail)
    box.appendChild(temperature)
    document.body.appendChild(box)
}
    
    


const dropdown = document.getElementById("search")
dropdown.addEventListener("change",function(){
    const city = dropdown.value;
    if(city !== "") weatherBox(city) // pass city name
})


//summary:
//User selects city → dropdown event fire.
// weatherBox(city) call → purana box remove.
// getWeather(city) call → API se latitude + longitude → current weather fetch.
// Divs create → temperature + wind dynamically add ho jata hai.
// Box screen pe dikhta hai → sirf ek box visible, purana remove.
// Har city ke liye kaam karega, jo Open-Meteo me available hai


//acha jo issse phele code likha tha usme issue th ake ek to api call nhi hoiwithi or agr chlo  krbhi lete to ahmne jese currency converter me ki thi ke sirf slected 2 3 curreienceu kelie krrhe the, lkn isme hamne kia naya tariwa jisse sirf chnd cities hi nhi blke  jinte opiotns aap dalte jaogey utneon ka temperature ata rahega

// is project me basically ham ne ke kia sb se phele api call kri jiske ham cityname denge to wo lat long degi or dosri api call kri jo hame us lat long ka weather degi or in dono ko ek functon me dallia 
// phir hamne drop dow me change listener lgaay or use bola ke dropdowm.value jo bhi ho uspe weatherBox banana or us weather box banane ki tarqeeeb hamne ek funtion me dali thi jiska nam weather box hai.
//ab usefuntion me dabbba bnaya or api call ka jjo funciton tha use cal kia or use bola ke jo drop .dwon value(city) tmhe dien uska temp fecth krke dedena or usnewohi kia
//ab jese skardu tm daldo options me to kia hoga chun ke hamne evetn lgate we funciton call kiawa weather box ka to skardu ka dabba bnaega or or weather box me hamnea api functon ko call kiawa to wo skardu ka pheele long lat layega phir uska temp orhame dega or ham sue dabbe me lgadenge
//isse yeh hoa ke ham jitna chae utne option dalde sbka weather box nmjaega if else ki zrroa nhi pr

//***************************8chatgpt review********************************************8 */
// --------------- GET WEATHER (API CALL) -----------------
// async function getWeather(cityName) {
//     try {
//         // city → lat long
//         const geoRes = await fetch(
//             `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&country=PK`
//         );
//         const geoData = await geoRes.json();

//         if (!geoData.results || geoData.results.length === 0) return null;

//         const { latitude, longitude } = geoData.results[0];

//         // weather data
//         const weatherRes = await fetch(
//             `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//         );
//         const weatherData = await weatherRes.json();

//         return weatherData.current_weather;
//     }
//     catch (error) {
//         console.log("API Error:", error);
//         return null;
//     }
// }



// // ---------------- WEATHER BOX CREATOR -------------------
// const weatherBox = async function (city) {

//     // Remove old box
//     const old = document.getElementById("weatherBox");
//     if (old) old.remove();

//     // Show loading before API
//     const loading = document.createElement("p");
//     loading.id = "loading";
//     loading.innerText = "Loading weather...";
//     document.body.appendChild(loading);

//     // Wait for API
//     const current = await getWeather(city);

//     loading.remove();  // remove loading msg

//     if (!current) return;



//     // Main box
//     const box = document.createElement("div");
//     box.id = "weatherBox";

//     const heading = document.createElement("p");
//     heading.innerHTML = `Current Weather : ${city}`;

//     const temperature = document.createElement("div");

//     const deg = document.createElement("p");
//     deg.innerHTML = `Temperature: ${current.temperature}°C`;

//     const det = document.createElement("p");
//     det.innerHTML = `Wind Speed: ${current.windspeed} km/h`;

//     // Append
//     box.appendChild(heading);
//     temperature.appendChild(deg);
//     temperature.appendChild(det);
//     box.appendChild(temperature);
//     document.body.appendChild(box);
// };



// // ----------------- EVENT LISTENER -----------------------
// const dropdown = document.getElementById("search");
// dropdown.addEventListener("change", function () {
//     const city = dropdown.value;
//     if (city !== "") weatherBox(city);
// });

