const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.getElementById("from");
const toCurr = document.getElementById("to");

// Populate dropdowns
for (const select of dropdowns) {
  for (const currCode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    if(select.name === "from" && currCode ==="USD"){
        newoption.selected="selected";
    }
    else if(select.name ==="to" && currCode ==="INR" ){
        newoption.selected="selected";
    }
    select.append(newoption);
  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  });
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
} 

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    updateExchangeRate();

});
const updateExchangeRate = async ()=>{
    
    let amount = document.querySelector(".amount input");
    let amtVal = Number(amount.value);
    if(!Number.isFinite(amtVal) || amtVal < 1){
      amtVal = 1;
      amount.value = "1";
    }
    const fromCode = fromCurr.value.toLowerCase();
    const URL = `${BASE_URL}/${fromCode}.json`;
    const message = document.querySelector(".msg");

    try {
      const response = await fetch(URL);
      const data = await response.json();
      const rate = data[fromCode][toCurr.value.toLowerCase()];
      message.innerText = `${amtVal} ${fromCurr.value} = ${(amtVal * rate).toFixed(2)} ${toCurr.value}`;
    } catch {
      message.innerText = "Could not get the exchange rate. Please try again.";
    }

}
window.addEventListener("load",()=>{
    updateExchangeRate();
    // console.log("GET UPDATED VALUE");
});
// const fromImg = document.getElementById("fromImg");
// const toImg = document.getElementById("toImg");

// const fromCurr = document.getElementById("from");
// const toCurr = document.getElementById("to");
// // Reusable function to update flag

// function updateFlag(select, img) {
//   const currCode = select.value.toUpperCase();
//   const countryCode = countryList[currCode];

//   if (countryCode) {
//     img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   }
// }

// // Set initial flags
// updateFlag(fromCurr, fromImg);
// updateFlag(toCurr, toImg);

// // Reuse the same function for both dropdowns
// fromCurr.addEventListener("change", () => {
//   updateFlag(fromCurr, fromImg);
// });

// toCurr.addEventListener("change", () => {
//   updateFlag(toCurr, toImg);
// });

