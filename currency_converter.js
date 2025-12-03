
async function init() {
// usd as  base currencey:
const res = await fetch("https://open.er-api.com/v6/latest");
const data = await res.json();
const pkrUsdRate = data.rates.PKR;
const eurUsdRate = data.rates.EUR

// pkr is base currency
const res2 = await fetch("https://open.er-api.com/v6/latest/PKR");
const data2 = await res2.json();
const eurPkrRate = data2.rates.EUR;
const usdPkr = data2.rates.USD

//EUR is base currency
const res3 = await fetch("https://open.er-api.com/v6/latest/EUR");
const data3 = await res3.json();
const usdEurRate = data3.rates.USD;
const pkrEurRate = data3.rates.PKR;


const dropdown1 = document.getElementById("currency1");
const dropdown2 = document.getElementById("currency2");
const input1 = document.getElementById("inputamount")
const input2 = document.getElementById("convertedAmount")


input1.addEventListener("input",function(){
    convert()
})
const convert = function(){
    const amount = parseFloat(input1.value)
    
    if (dropdown1.value === "USD" && dropdown2.value === "PKR"){
        const pkrvalue = ((amount)*(pkrUsdRate)).toFixed(5)
        input2.value = pkrvalue
    }
    else if (dropdown1.value === "PKR" && dropdown2.value === "USD"){
        
        const Usdvalue = ((amount)/(pkrUsdRate)).toFixed(5)
        input2.value = Usdvalue
    }
    else if (dropdown1.value === "USD" && dropdown2.value === "USD"){
         input2.value = amount
    }
    else if (dropdown1.value === "PKR" && dropdown2.value === "PKR"){
         input2.value = amount
    }
    else if (dropdown1.value === "EUR" && dropdown2.value === "EUR"){
         input2.value = amount
    }
    else if (dropdown1.value === "EUR" && dropdown2.value === "PKR"){
        const Eurvalue = ((amount)*(pkrEurRate )).toFixed(5)
        input2.value = Eurvalue
    }

    else if (dropdown1.value === "PKR" && dropdown2.value === "EUR"){
        const pkrvalue = ((amount)*(eurPkrRate )).toFixed(5)
        input2.value = pkrvalue
    }
    else if (dropdown1.value === "EUR" && dropdown2.value === "USD"){
        const Eurvalue = ((amount)*(usdEurRate )).toFixed(5)
        input2.value = Eurvalue
    }
     else if (dropdown1.value === "USD" && dropdown2.value === "EUR"){
        const usdvalue = ((amount)*(eurUsdRate )).toFixed(5)
        input2.value = usdvalue
    }
    
}

input2.addEventListener("input",function(){
    converted()
})
const converted = function(){
    const amount = parseFloat(input2.value)
    
    if (dropdown1.value === "USD" && dropdown2.value === "PKR"){
        const pkrvalue = ((amount)*(pkrUsdRate)).toFixed(5)
        input1.value = pkrvalue
    }
    else if (dropdown1.value === "PKR" && dropdown2.value === "USD"){
        
        const Usdvalue = ((amount)/(pkrUsdRate)).toFixed(5)
        input1.value = Usdvalue
    }
    else if (dropdown1.value === "USD" && dropdown2.value === "USD"){
         input1.value = amount
    }
    else if (dropdown1.value === "PKR" && dropdown2.value === "PKR"){
         input1.value = amount
    }
    else if (dropdown1.value === "EUR" && dropdown2.value === "EUR"){
         input1.value = amount
    }
    else if (dropdown1.value === "EUR" && dropdown2.value === "PKR"){
        const Eurvalue = ((amount)*(pkrEurRate )).toFixed(5)
        input1.value = Eurvalue
    }
     else if (dropdown1.value === "PKR" && dropdown2.value === "EUR"){
        const pkrvalue = ((amount)*(eurPkrRate )).toFixed(5)
        input1.value = pkrvalue
    }
    else if (dropdown1.value === "EUR" && dropdown2.value === "USD"){
        const Eurvalue = ((amount)*(usdEurRate )).toFixed(5)
        input1.value = Eurvalue
    }
     else if (dropdown1.value === "USD" && dropdown2.value === "EUR"){
        const usdvalue = ((amount)*(eurUsdRate )).toFixed(5)
        input1.value = usdvalue
    }
    
}
}
init()

//summary
//isme sb se phele to live rates chaiye the to api use kri or asyn fucntion ke andr api call kri using awit jo values chaiye thi unhe api data se fetch krke variables me store krlia, phir jo functionality bnani thi uske according mene event lsiten krwyaa dono input field taake user dono mese jisme bhi daley dosrre vali me use conversion mile, phir usme funciton dalan dono listen me ke using if els ke agr drop1 me yeh mile or drop 2 me yeh mile to input 1 me jo value user daale uspe yeh conversion formual lgake inpu2 pe dekhana, sam yehi kaam input2 ko listen krte hoe kia ke input2 me jo value daale user to use conversion ka formila lgake unput 1 me dkehana 
// mera code kaam to krrha lkn ye ek acha code nhi hai q ke ye dry code hai, aapne 2 input field ke lie do alg function bnae or phir sbme itne saare else if use kia isse behtr aap ek funciton general bnate dono ke lie, or aaapne 3 apis call ki aap ek call krte bs usd waaali baaqi sb usi se hoajta using * and /

//*******************************CHATGPT REVIEW*************************************888 */
// async function init() {
//     // ----- Fetch ALL currency rates (base = USD by default) -----
//     const res = await fetch("https://open.er-api.com/v6/latest");
//     const data = await res.json();
//     const rates = data.rates; // contains PKR, EUR, USD, AED, GBP etc.

//     // ----- Select Elements -----
//     const dropdown1 = document.querySelector(".currency1");
//     const dropdown2 = document.querySelector(".currency2");
//     const input1 = document.getElementById("inputamount");
//     const input2 = document.getElementById("convertedAmount");

//     // ----- Main Convert Function -----
//     function convert(fromInput) {
//         const amount1 = parseFloat(input1.value);
//         const amount2 = parseFloat(input2.value);

//         // ❌ Removed .toUpperCase()
//         const cur1 = dropdown1.value;
//         const cur2 = dropdown2.value;

//         if (!rates[cur1] || !rates[cur2]) return; // safety check

//         // Convert through USD
//         if (fromInput === "input1") {
//             const usdValue = amount1 / rates[cur1];
//             const final = usdValue * rates[cur2];
//             input2.value = final.toFixed(5);
//         } else {
//             const usdValue = amount2 / rates[cur2];
//             const final = usdValue * rates[cur1];
//             input1.value = final.toFixed(5);
//         }
//     }

//     // Input listeners
//     input1.addEventListener("input", () => convert("input1"));
//     input2.addEventListener("input", () => convert("input2"));

//     // Currency change triggers conversion
//     dropdown1.addEventListener("change", () => convert("input1"));
//     dropdown2.addEventListener("change", () => convert("input1"));
// }

// init();

//baaqi review is gpt ke code ke yeh kese bna isme o rhamare me kia diff agr yeh prhna hai to,
//https://chatgpt.com/s/t_6930886014548191ab007db1ab85f9aa is link pe jao














       

    












    
    





















   

   

















