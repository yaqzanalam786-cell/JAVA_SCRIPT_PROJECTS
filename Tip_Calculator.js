const FORM = document.querySelector("form")
FORM.addEventListener("submit",function(e){
     e.preventDefault()
    const bill = parseInt(document.getElementById("billAmount").value)
    const Tip = parseInt(document.getElementById("Tip").value)
    const button =  document.querySelector("button")
    const totalTip = document.getElementById("totaltip")
    const totalAmount = document.getElementById("totalbill")
    if (bill === "" || isNaN(bill)){
        totalAmount.innerHTML =  "Enter a valid bill"
        }
    else if (Tip === "" || isNaN(Tip)){
        totalTip.innerHTML =  "Enter a valid Tip"

    }
    else {
       const tip = Math.ceil(bill * (Tip/100))
       totalTip.innerHTML = `Total Tip :  ${tip}`
       const total =  bill + tip
       totalAmount.innerHTML = `Total Amount :  ${total}`
   }
})
//YEH BEST APPROACH HAI IS TYPE KE PROJECTS ME FORM USE KRNA OR USI PE EVENT LGANA


//************************AGR BUTTON USE KRIEN INSTEASD OF FORM *******************************88/

// const button = document.querySelector("button");
// const totalTip = document.getElementById("totaltip");
// const totalAmount = document.getElementById("totalbill");

// button.addEventListener("click", function(e){
//     e.preventDefault();
//     const bill = parseInt(document.getElementById("billAmount").value);
//     const Tip = parseInt(document.getElementById("Tip").value);

//     if (isNaN(bill) || bill <= 0) {
//         totalAmount.innerHTML = "Enter a valid bill";
//         return;
//     }
//     if (isNaN(Tip) || Tip < 0) {
//         totalTip.innerHTML = "Enter a valid tip";
//         return;
//     }

//     const tip = Math.ceil(bill * (Tip / 100));
//     totalTip.innerHTML = `Total Tip : ${tip}`;
//     totalAmount.innerHTML = `Total Amount : ${bill + tip}`;
// });


//*****************************************CHATGPT REVIEW*****************************************888 */
// const form = document.querySelector("form");
// const billInput = document.getElementById("billAmount");
// const tipInput = document.getElementById("Tip");
// const totalTip = document.getElementById("totaltip");
// const totalAmount = document.getElementById("totalbill");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const bill = parseInt(billInput.value);
//   const tipPercent = parseInt(tipInput.value);

//   if (isNaN(bill) || bill <= 0) {
//     totalAmount.textContent = "Enter a valid bill";
//     return;
//   }

//   if (isNaN(tipPercent) || tipPercent < 0) {
//     totalTip.textContent = "Enter a valid tip";
//     return;
//   }

//   const tip = Math.ceil(bill * (tipPercent / 100));
//   totalTip.textContent = `Total Tip : ${tip}`;

//   const total = bill + tip;
//   totalAmount.textContent = `Total Amount : ${total}`;
// });
// HAR ELEMENT KO EVENT LISTENER KE ANDR SELECT KRNE KI NEED NHI THI SIRF INPUT ME JO VALUES HAIN EVENT ME SELECT KRNA HOTA HAI, IF ME TIP="" YEH ISKI NEED NHI Q KE HAMNE PARSE INTLGAYAWA TO NUMBER HI AYEGA EMPTY STRING NHI.

      


       

