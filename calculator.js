

const input = document.getElementById("number")
const Buttons = document.querySelectorAll("button")

Buttons.forEach((button)=>{
    button.addEventListener('click', function (e){
            if (e.target.id === "one"){
                 input.innerText += 1
            }
            else if (e.target.id === "two"){
                input.innerText += 2
            }
            else if (e.target.id === "three"){
                input.innerText += 3
            }
            else if (e.target.id === "plus"){
                input.innerText += "+"
            }
            else if (e.target.id === "four"){
                input.innerText += 4
            }
            else if (e.target.id === "five"){
                input.innerText += 5
            }
            else if (e.target.id === "six"){
                input.innerText += 6
            }
            else if (e.target.id === "minus"){
                input.innerText += "-"
            }
            else if (e.target.id === "seven"){
                input.innerText += 7
            }
            else if (e.target.id === "eight"){
                input.innerText += 8
            }
            else if (e.target.id === "nine"){
                input.innerText += 9
            }
            else if (e.target.id === "multiply"){
                input.innerText += "*"
            }
            else if (e.target.id === "CE"){
                input.innerText = ""
            }
            else if (e.target.id === "clear"){
                input.innerText = ""
            }
            else if (e.target.id === "remove"){
                input.innerText = input.innerText.slice(0, -1)

            }
            else if (e.target.id === "divide"){
                input.innerText += "/"
            }
            else if (e.target.id === "plusMinus"){
                input.innerText += "+-"
            }
            else if (e.target.id === "zero"){
                input.innerText += 0
            }
            else if (e.target.id === "point"){
                input.innerText += "."
                
            }
  

})
})


const addCal = document.getElementById("equalto")
addCal.addEventListener("click",function(e){
   
    let expression = input.innerText;   
    let result = eval(expression);        
    input.innerText = result;
})

//eval hai to powerful lkn khtrnaak hai q ke yeh sb ko as a string treat krta hai or eval krdeta hai agr kisi ne script me hacked ki sscriptlikhidi to security issue hojaega
//lkn begineer level pe yeh appraoch thk hai

//*************************************chatgpt*******************************************************/
// const input = document.getElementById("number");
// const Buttons = document.querySelectorAll("button");

// // HAR BUTTON EVENT
// Buttons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//         const id = e.target.id;

//         // NUMBERS
//         if (id === "one") input.innerText += "1";
//         else if (id === "two") input.innerText += "2";
//         else if (id === "three") input.innerText += "3";
//         else if (id === "four") input.innerText += "4";
//         else if (id === "five") input.innerText += "5";
//         else if (id === "six") input.innerText += "6";
//         else if (id === "seven") input.innerText += "7";
//         else if (id === "eight") input.innerText += "8";
//         else if (id === "nine") input.innerText += "9";
//         else if (id === "zero") input.innerText += "0";

//         // OPERATORS
//         else if (id === "plus") input.innerText += "+";
//         else if (id === "minus") input.innerText += "-";
//         else if (id === "multiply") input.innerText += "*";
//         else if (id === "divide") input.innerText += "/";
//         else if (id === "point") input.innerText += ".";

//         // CLEAR ALL
//         else if (id === "clear" || id === "CE") {
//             input.innerText = "";
//         }

//         // BACKSPACE
//         else if (id === "remove") {
//             input.innerText = input.innerText.slice(0, -1);
//         }

//         // PLUS / MINUS
//         else if (id === "plusMinus") {
//             if (input.innerText.startsWith("-")) {
//                 input.innerText = input.innerText.slice(1);
//             } else {
//                 input.innerText = "-" + input.innerText;
//             }
//         }
//     });
// });


// // = BUTTON
// const addCal = document.getElementById("equalto");

// addCal.addEventListener("click", function () {

//     let expression = input.innerText;

//     try {
//         // SAFER PARSER (Function Constructor)
//         let result = Function("return " + expression)();

//         if (result === undefined || isNaN(result)) {
//             input.innerText = "Error";
//         } else {
//             input.innerText = result;
//         }

//     } catch {
//         input.innerText = "Error";
//     }

// });
// isme eval ki jgaha parser technique use ki hai wo zyada better and safe ahi



