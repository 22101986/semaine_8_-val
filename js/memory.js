let cards = document.getElementsByClassName("card");

let colors = ["red", "yellow", "green", "blue", "orange", "purple"];

var randomColor = colors[Math.floor(Math.random()*colors.length)];


function cardColors(){
   for(const card of cards) {
    card.classList.toggle(randomColor);
       console.log(card);
   }
}


