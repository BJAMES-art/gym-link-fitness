const quotes = [
"NO PAIN NO GAIN",
"PUSH YOUR LIMITS",
"STRONGER EVERY DAY",
"TRAIN HARD STAY HUMBLE",
"YOUR ONLY LIMIT IS YOU"
];

let index = 0;

function changeQuote(){

document.getElementById("quote").textContent = quotes[index];

index++;

if(index >= quotes.length){
index = 0;
}

}

changeQuote();

setInterval(changeQuote,4000);