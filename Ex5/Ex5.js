function scanStr(){
    var str = document.getElementById("string").value;
    var arr = str.split(' ');
    var min_str = [];
    var max_str = [];
    var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < min) min = arr[i].length;
        if (arr[i].length > max) max = arr[i].length;
 }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == min) min_str.push(arr[i]);
        if (arr[i].length == max) max_str.push(arr[i]);
 }

    document.getElementById("shortest").innerHTML = "Shortest word(s): " + min_str.toString();
    document.getElementById("longest").innerHTML = "Longest word(s): " + max_str.toString();
}

function calcBMI(){
    var h = parseFloat(document.getElementById("height").value)/100;
    var w = parseFloat(document.getElementById("weight").value);
    var bmi = w/ (h*h);
    var result;

    if (bmi < 18) result = "Underweight";
    else if (bmi>=18 && bmi < 25) result = 'Normal';
    else if (bmi>=25 && bmi < 30) result = 'Overweight';
    else if (bmi > 30) result = 'Obese';
    document.getElementById('bmi').innerHTML = "BMI: " + bmi.toPrecision(3);
    document.getElementById('result').innerHTML = "Result: You are "+ result + "!";
}
function grow(){
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);
    var img = ["https://img.freepik.com/premium-vector/apple-tree-isolated-white_1308-56079.jpg?w=2000", "https://thumbs.dreamstime.com/b/lush-orange-tree-juicy-fruits-garden-under-sunlight-84741528.jpg"]; 
    var garden = document.getElementById("garden");
    for (let i = 0; i < rows; i++){
        for (let j=0; j<cols; j++){
            var sapling = Math.floor(Math.random()* 2 + 0);
            var img = '<img src=' + img[sapling] + 'width ="150px" height = "150px"></img>';
            garden.innerHTML += img;
        }garden.innerHTML +="<br>";    
    }
}

function convert(){
    var val = parseFloat(document.getElementById("data").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    var INRtoUSD = 0.013;
    var INRtoYEN = 2;
    var USDtoINR = 79.75;
    var USDtoYEN = 136;
    var YENtoUSD = 0.0070;
    var YENtoINR = 0.59;
    var result;

    if (from== "USD"){
        if (to == "INR") result = val*USDtoINR;
        else if (to == "YEN") result = val*USDtoYEN;
        else result = val;
    } 
    else if (from == "INR"){
        if (to == "USD") result = val*INRtoUSD;
        else if (to == "YEN") result = val*INRtoYEN;
        else result = val;
    }
    else if (from == "YEN"){
        if (to == "USD") result = val*YENtoUSD;
        else if (to == "INR") result = val*YENtoINR;
        else result = val;
    } 
    document.getElementById("answer").value = result;    
}

function flip(){
   var img = document.getElementById("coin");
   var head = document.getElementById("num_heads");
   var tail = document.getElementById("num_tails");
   var h = parseInt(head.innerHTML);
   var t = parseInt(tail.innerHTML);
   var l = ["head.png", "tail.png"];
   var s = Math.floor(Math.random()*2);
   if (l[s]==l[0]) {
       head.innerHTML = h+1;
   } else {
       tail.innerHTML = t+1;
   };
}

function bill() {
    var half = parseInt(document.getElementById("small").value);
    var one = parseInt(document.getElementById("medium").value);
    var two = parseInt(document.getElementById("large").value);
    var total;
    var small = 100;
    var medium = 200;
    var large = 400;
    total = (half*small) + (one*medium) + (two*large);
    var tax = 0.09 * total;
    total += tax;
    var radio = document.getElementsByName("tip");
    var tip;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) tip = ((radio[i].value)/100)*total;
    }
    total += tip;
    document.getElementById("price").innerHTML = "Cost of order: " + total + "rupees!"
 }

