const buttons = document.querySelectorAll("button")
// 9 ke 9 buttons ko select kia or for loop lgadia taake sb listen krien click ko
buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
       
// or bola ke 9 mese jispe click ho uspe X likhdo or us dabbe ko disable krdo
        e.target.innerText = "X";
        e.target.disabled = true; //TAAKE WO BOX CHANGE NA HOSKE DOBARA
        // jo bache hoe button ko jama kia jo disabled na hon
        const remaining = document.querySelectorAll("button:not(:disabled)");
        
        if(remaining.length === 0) return; // agar koi button na bache
       
        // or bache hoe dbbon me random dabba bnaya
        const randomIndex = Math.floor(Math.random() * remaining.length);

        // 4. Random button par O lagagay isse
        remaining[randomIndex].innerText = "O";
        remaining[randomIndex].disabled = true; //jinpe ek dfa o ajaye unpe dobara na o aye na x islie use lock krdia


// ab simple if else ko use krke win loss condtions check krli

        const b1 = document.getElementById("b1");
        const b2 = document.getElementById("b2");
        const b3 = document.getElementById("b3");
        const b4 = document.getElementById("b4");
        const b5 = document.getElementById("b5");
        const b6 = document.getElementById("b6");
        const b7 = document.getElementById("b7");
        const b8 = document.getElementById("b8");
        const b9 = document.getElementById("b9");

        if ((
            b1.innerText === "X" &&
            b2.innerText === "X" &&
            b3.innerText === "X" 
            ) 
            ||
        (
            b4.innerText === "X" &&
            b5.innerText === "X" &&
            b6.innerText === "X" 
            )
            ||
        (
            b7.innerText === "X" &&
            b8.innerText === "X" &&
            b9.innerText === "X" 
            )
            ||
        (
            b1.innerText === "X" &&
            b4.innerText === "X" &&
            b7.innerText === "X" 
            )
            ||
        (
            b2.innerText === "X" &&
            b5.innerText === "X" &&
            b8.innerText === "X" 
            )
            ||
        (
            b3.innerText === "X" &&
            b6.innerText === "X" &&
            b9.innerText === "X" 
            )
            ||
        (
            b1.innerText === "X" &&
            b5.innerText === "X" &&
            b9.innerText === "X" 
            )
            ||
        (
            b3.innerText === "X" &&
            b5.innerText === "X" &&
            b7.innerText === "X" 
            )
        )
            
            {
                
                const result = document.getElementById("result")
                result.innerHTML = "You Won!"
                return
            }


        else if ((
            b1.innerText === "O" &&
            b2.innerText === "O" &&
            b3.innerText === "O" 
            ) 
            ||
        (
            b4.innerText === "O" &&
            b5.innerText === "O" &&
            b6.innerText === "O" 
            )
            ||
        (
            b7.innerText === "O" &&
            b8.innerText === "O" &&
            b9.innerText === "O" 
            )
            ||
        (
            b1.innerText === "O" &&
            b4.innerText === "O" &&
            b7.innerText === "O" 
            )
            ||
        (
            b2.innerText === "O" &&
            b5.innerText === "O" &&
            b8.innerText === "O" 
            )
            ||
        (
            b3.innerText === "O" &&
            b6.innerText === "O" &&
            b9.innerText === "O" 
            )
            ||
        (
            b1.innerText === "O" &&
            b5.innerText === "O" &&
            b9.innerText === "O" 
            )
            ||
        (
            b3.innerText === "O" &&
            b5.innerText === "O" &&
            b7.innerText === "O" 
            )
        )
            
            {
                
                const result = document.getElementById("result")
                result.innerHTML = "You Lost!"
                return
            }
        //y
        else
        {
                const result = document.getElementById("result")
                result.innerHTML = "Match Draw!"
        }
    })
})

//ek restart button dia taake saare dabbe emoty hojayien or dobara khelskien
// button.innerText = "" → saare buttons khali
// button.disabled = false → buttons dobara active
// result.innerText = "" → result area clear

const restart = document.getElementById("restart");
restart.addEventListener("click", function(e){
    buttons.forEach((button) => {
        button.innerText = "";    // X/O remove
        button.disabled = false;  // dobara click allow
    });
    document.getElementById("result").innerText = ""; // result clear
});
    
//***************CHatgpt review ******************************************************8 */
// Select all game buttons (exclude the restart button)
// const buttons = document.querySelectorAll(".cell");

// // Function to check winner
// function checkWinner() {
//     const b = []; // array to store board values
//     for (let i = 1; i <= 9; i++) {
//         b[i] = document.getElementById("b" + i).innerText;
//     }

//     const result = document.getElementById("result");

//     const winningCombos = [
//         [1,2,3], [4,5,6], [7,8,9], // rows
//         [1,4,7], [2,5,8], [3,6,9], // columns
//         [1,5,9], [3,5,7]           // diagonals
//     ];

//     for (let combo of winningCombos) {
//         const [i, j, k] = combo;
//         if (b[i] && b[i] === b[j] && b[j] === b[k]) {
//             result.innerText = b[i] === "X" ? "You Won!" : "You Lost!";
//             // Disable all buttons after win
//             buttons.forEach(btn => btn.disabled = true);
//             return true;
//         }
//     }

//     // Check for draw: all buttons filled and no winner
//     const allFilled = Array.from(buttons).every(btn => btn.innerText !== "");
//     if (allFilled) {
//         result.innerText = "Match Draw!";
//         return true;
//     }

//     return false; // game not over yet
// }

// // Add click event to each button
// buttons.forEach((button) => {
//     button.addEventListener("click", function(e) {
//         if (e.target.innerText !== "") return; // already clicked
//         e.target.innerText = "X";
//         e.target.disabled = true;

//         if (checkWinner()) return;

//         // Computer move (random O)
//         const remaining = Array.from(buttons).filter(btn => btn.innerText === "");
//         if (remaining.length === 0) return;

//         const randomIndex = Math.floor(Math.random() * remaining.length);
//         remaining[randomIndex].innerText = "O";
//         remaining[randomIndex].disabled = true;

//         checkWinner();
//     });
// });

// // Restart button
// const restart = document.getElementById("restart");
// restart.addEventListener("click", function() {
//     buttons.forEach((button) => {
//         button.innerText = "";    // Clear X/O
//         button.disabled = false;  // Enable buttons
//     });
//     document.getElementById("result").innerText = ""; // Clear result
// });

// ✅ What’s improved

// Single function for winner check – no repeated code for X and O.

// Draw logic fixed – only shows “Draw” when all cells are filled.

// Restart button safe – won’t interfere with main buttons.

// Easy to read and understand for a beginner.


    
        
        
        
        








        
     

           