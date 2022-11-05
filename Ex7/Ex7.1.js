function race(){
    if(ct1!=0){d1 = setInterval(driver1,200);}
    if(ct2!=0){d2 = setInterval(driver2,200);}
    if(ct3!=0){d3 = setInterval(driver3,200);}
    if(ct4!=0){d4 = setInterval(driver4,200);}
}

function driver1() {
let car=ct1
let r = Math.floor(Math.random() * 200);
let c = Math.floor(Math.random() * 15); 
let s = Math.floor(Math.random() * 200);
if (car.position().top >= 800 || car.position().top < 20) {
    clearInterval(d1);
    car.fadeOut(500); $('#d5').append(car); //car.fadeIn(500);
    console.log(car.position().left);
    console.log("car 1 crashed");    
}
else if (car.position().left >= 1800) {
    alert("car 1 Won the Race");
    stopall();
}
else {ct1.animate({left:'+='+(550-s), top:'+='+(r-c)},500);}
}

function driver2(){ 
let car=ct2
let r = Math.floor(Math.random() * 200); 
let c = Math.floor(Math.random() * 15);
let s = Math.floor(Math.random() * 200); 
if (car.position().top >= 800 || car.position().top < 20) {
    clearInterval(d2);
    car.fadeOut(500); $('#d6').append(car); //car.fadeIn(500);
    console.log(car.position().left);
    console.log("car 2 crashed");    
}
else if (car.position().left >= 1800) {
    alert("car 2 Won the Race");
    stopall();
}
else {ct2.animate({left:'+='+(550-s), top:'+='+(r-c)},500);}
}

function driver3() { 
let car=ct3
let r = Math.floor(Math.random() * 200); 
let c = Math.floor(Math.random() * 15); 
let s = Math.floor(Math.random() * 200);
if (car.position().top >= 800 || car.position().top < 20) {
    clearInterval(d3);
    car.fadeOut(500); $('#d7').append(car); //car.fadeIn(500);
    console.log(car.position().left);
    console.log("car 3 crashed");    
}
else if (car.position().left >= 1800) {
    alert("car 3 Won the Race");
    stopall();
}
else {ct3.animate({left:'+='+(550-s), top:'+='+(c-r)},500);}
} 

function driver4() { 
let car=ct4
let r = Math.floor(Math.random() * 200); 
let c = Math.floor(Math.random() * 15); 
let s = Math.floor(Math.random() * 200);
if (car.position().top >= 800 || car.position().top < 20) {
    clearInterval(d4);
    car.fadeOut(500); $('#d8').append(car); //car.fadeIn(500);
    console.log(car.position().left);
    console.log("car 4 crashed");    
}
else if (car.position().left >= 1800) {
    alert("car 4 Won the Race");
    stopall();
}
else {ct4.animate({left:'+='+(550-s), top:'+='+(c-r)},500);}
}

function stopall(){
clearInterval(d1); clearInterval(d2);
clearInterval(d3); clearInterval(d4);
console.log("All engines turned Off");
}

function stopall(){
clearInterval(d1); clearInterval(d2);
clearInterval(d3); clearInterval(d4);
console.log("All engines turned Off");
}