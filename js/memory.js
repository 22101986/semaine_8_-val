let cards = document.getElementsByClassName("card");

let colors = ["red", "yellow", "green", "blue", "orange", "purple"];

let randomColor = colors[Math.floor(Math.random()*colors.length)];


cards[0].onclick = function () { 
        this.classList.toggle("red");
    }
cards[1].onclick = function () {
        this.classList.toggle("green");    
}
cards[2].onclick = function () {
    this.classList.toggle("blue");    
}
cards[3].onclick = function () {
    this.classList.toggle("orange");    
}
cards[4].onclick = function () {
    this.classList.toggle("purple");    
}
cards[5].onclick = function () {
    this.classList.toggle("green");    
}
cards[6].onclick = function () {
    this.classList.toggle("yellow");    
}
cards[7].onclick = function () {
    this.classList.toggle("red");    
}
cards[8].onclick = function () {
    this.classList.toggle("orange");    
}
cards[9].onclick = function () {
    this.classList.toggle("blue");    
}
cards[10].onclick = function () {
    this.classList.toggle("purple");    
}
cards[11].onclick = function () {
    this.classList.toggle("yellow");    
}
    
    
 




