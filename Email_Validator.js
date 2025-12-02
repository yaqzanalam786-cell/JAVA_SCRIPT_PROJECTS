// const button = document.querySelector("button")
// const remark1 = document.getElementById("remark1")
// const remark2 = document.getElementById("remark2")
// const remark3 = document.getElementById("remark3")
// const remark4 = document.getElementById("remark4")

// button.addEventListener("click",function(e){
//     e.preventDefault()
//     const userEmail = document.getElementById("mail").value.toLowerCase()
//     if (userEmail.includes("@") && !userEmail.includes(" ") && ( userEmail.endsWith(".com")||  userEmail.endsWith(".org") ||  userEmail.endsWith(".net") ) )   {
//         remark1.innerHTML = "@ is included"
//         remark2.innerHTML = "Email includes valid domain Name"
//         remark3.innerHTML = "No space detected"
//         remark4.innerHTML = "Email is Validated"
//     } 
//     else if (userEmail.includes("@") && userEmail.endsWith(".com")||  userEmail.endsWith(".org") ||  userEmail.endsWith(".net")){
//         remark1.innerHTML = "@ is included"
//         remark2.innerHTML = "Domain Name is valid"
//         remark3.innerHTML = "Space detected"
//         remark4.innerHTML = "Email is not Validated"

//     }
//     else if (!userEmail.includes(" ") &&   userEmail.endsWith(".com")||  userEmail.endsWith(".org") ||  userEmail.endsWith(".net")  ){
//         remark1.innerHTML = "Add@"
//         remark2.innerHTML = "Domain Name is valid"
//         remark3.innerHTML = "No Space detected"
//         remark4.innerHTML = "Email is not Validated"
//     }
//     else if (!userEmail.includes(" ") && userEmail.includes("@") ){
//         remark1.innerHTML = "@ is included"
//         remark2.innerHTML = "Domain Name is not valid"
//         remark3.innerHTML = "No space detected"
//         remark4.innerHTML = "Email is not Validated"
//     }
//     else if (userEmail.includes("@")){
//         remark1.innerHTML = "@ is included"
//         remark2.innerHTML = "Domain Name is not valid"
//         remark3.innerHTML = "Space detected"
//         remark4.innerHTML = "Email is not Validated"

//     }
//     else if (!userEmail.includes(" ")){
//         remark1.innerHTML = "Add @"
//         remark2.innerHTML = "Domain Name is not valid"
//         remark3.innerHTML = " No Space detected"
//         remark4.innerHTML = "Email is not Validated"

//     }
//     else if (userEmail.endsWith(".com")||  userEmail.endsWith(".org") ||  userEmail.endsWith(".net")){
//         remark1.innerHTML = "Add @"
//         remark2.innerHTML = "Domain Name is valid"
//         remark3.innerHTML = " Space detected"
//         remark4.innerHTML = "Email is not Validated"

//     }
//     else{
//         remark1.innerHTML = "ADD@"
//         remark2.innerHTML = "Domain Name is not valid"
//         remark3.innerHTML = "Space detected"
//         remark4.innerHTML = "Email is not Validated"

//     }
// })

//***************************************CHATGPT REVIEW********************************************88 */
// jb condition se && or || ye bhi use krna prhe to parenthesis ka usage kro ()
// baaar baar har if ya else if poora poora likhawa jese useremail.endswith(.com),, ye code ko messy bnara isse behtr teeenon condtion jo hain ek space wali ek @ wali or ek domain wali teeon ko ek varibale e daaldo

const button = document.querySelector("button");
const remark1 = document.getElementById("remark1");
const remark2 = document.getElementById("remark2");
const remark3 = document.getElementById("remark3");
const remark4 = document.getElementById("remark4");

button.addEventListener("click", function(e) {
    e.preventDefault();

    const userEmail = document.getElementById("mail").value.toLowerCase();

    // Booleans for clean logic
    const hasAt = userEmail.includes("@");
    const hasSpace = userEmail.includes(" ");
    const hasValidDomain = userEmail.endsWith(".com") || userEmail.endsWith(".org") || userEmail.endsWith(".net");

    // Clear previous remarks
    remark1.innerHTML = "";
    remark2.innerHTML = "";
    remark3.innerHTML = "";
    remark4.innerHTML = "";

    if (hasAt && !hasSpace && hasValidDomain) {
        remark1.innerHTML = "@ is included";
        remark2.innerHTML = "Email includes valid domain Name";
        remark3.innerHTML = "No space detected";
        remark4.innerHTML = "Email is Validated";
    } else {
        // @ check
        remark1.innerHTML = hasAt ? "@ is included" : "Add @";

        // domain check
        remark2.innerHTML = hasValidDomain ? "Domain Name is valid" : "Domain Name is not valid";

        // space check
        remark3.innerHTML = !hasSpace ? "No space detected" : "Space detected";

        // overall validation
        remark4.innerHTML = "Email is not Validated";
    }
});

// to yeh hai tariqa jisse hamne bachae numerous else if simple use kia ? or sbke check lgadie ke bhia @ dikhe to yeh likhna nhi to ye 

//acha iske illawa aaj kl rejex method use hota hai ye validators bnane ke lie







