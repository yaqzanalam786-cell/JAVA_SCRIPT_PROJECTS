const randomQuotes = function(){
    const quotes = ["'Success starts with self-belief'", "'Small steps every day lead to big results'", "'Discipline beats motivation'", "'Think and Grow Rich'", "'Dont think too much to become over thinker'", "'Education is key to succes'", "'Work without watching a watch'","'East & West, Pakistan is best'","'Pakistan Zindabad'","'Hello World'"]
    let newQuote = ""
    newQuote+= quotes[Math.floor(Math.random()*10)]
    return newQuote
}
console.log(randomQuotes());
document.getElementById("button").addEventListener("click",function(){
    document.querySelector("p").innerHTML = randomQuotes()
    
})
//**************************************************CHATGPT REVIEW******************************** */
// const quotes = [
//   "Success starts with self-belief",
//   "Small steps every day lead to big results",
//   "Discipline beats motivation",
//   "Think and Grow Rich",
//   "Dont think too much to become over thinker",
//   "Education is key to success",
//   "Work without watching a watch",
//   "East & West, Pakistan is best",
//   "Pakistan Zindabad",
//   "Hello World"
// ];

// function randomQuotes() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   return quotes[randomIndex];
// }

// document.getElementById("button").addEventListener("click", () => {
//   document.querySelector("p").textContent = randomQuotes();
// });

// Simple summary:
// Tumhara approach theek tha aur efficient for this small project.
// Class version better practice hai agar ye project extend karna ho ya multiple instances create karni ho.

//FOR DETAILED REVIEW SEE CHATGPT JS ROADMAP FILE

  
    
    
 


   

