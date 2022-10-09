// Question 1
function time(){
    // get time
    var d= new Date();
    // extract hour,minutes and seconds
    var hr = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()

    return hr + " : " + min + " : " + sec;
}
function display(){ 
    document.getElementById("time").innerHTML= time();
}

function show(){ 
    // call the time display function for every one second
    setInterval("display()", 1000);

    display()
    document.getElementById("b1").remove()

}


// Question 2
function randomColor(){
    //create random colors using rgb function
    var red = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var color= "rgb("+red+","+green+","+blue+")";
    return color;
}
function setBackgroundColor(){
    //change or set body background color
    document.getElementsByTagName("body")[0].style.backgroundColor = randomColor();//"background-color:"+randomColor()+";";
}

function changeColor(){
    setBackgroundColor()
    cid = setInterval("setBackgroundColor()", 2000)
    document.getElementById("b2").value = "Stop";
    document.getElementById("b2").setAttribute('onclick',  'stopColor();');
    if(document.getElementById("q2").childElementCount==2){
        let reset = document.createElement("button"); reset.innerHTML="Reset"; reset.name="Reset";
        reset.type="submit"; reset.id="b21"; reset.onclick= function(){resetColor();};
        document.getElementById("q2").appendChild(reset);
    }   
}
function stopColor(){
    clearInterval(cid);
    document.getElementById("b2").value = "Change BG Color"
    document.getElementById("b2").setAttribute('onclick',  'changeColor();');
}
function resetColor(){
    clearInterval(cid);
    document.getElementsByTagName("body")[0].style.backgroundColor = "BlanchedAlmond"
    document.getElementById("b2").value = "Change BG Color"
    document.getElementById("b2").setAttribute('onclick',  'changeColor();');
    document.getElementById("b21").remove();
}


//Question3
function incSize() {
    document.getElementById("p1").style.fontSize = "1.5em";
}
function decSize() {
    document.getElementById("p1").style.fontSize = "1em";
}

//Question4
var interval;
var speed=pos=r=0
var car = document.getElementById('car');
function startCar(){
    clearInterval(interval);
    setInterval(console.log("Pos"+pos),1000)
    interval=setInterval(moveCar,10);

    document.getElementById("b3").value = "Accelerate";
    if(!!document.getElementById("b31")!=true){
        let reset = document.createElement("button"); reset.innerHTML="Brake"; reset.name="Brake";
        reset.type="submit"; reset.id="b31"; reset.onclick= function(){brake();};
        document.getElementById("b3").insertAdjacentElement("afterend", reset);
    }
}

function accelerate(){
    speed +=1
    console.log(speed)
}
function brake(){
    if(speed>0){
        speed-=1
    }
}

function reverseCar(){
    stopCar();
    if (r==0){
//     car.style= "transform:scaleX(-1);"; r=1;
        r=1;
    }
    else{
//     car.style= "transform:scaleX(1);"; r=0;
        r=0;
    }
    interval=setInterval(moveCar(),20);
}

function stopCar(){ 
    clearInterval(interval);speed=0;
    document.getElementById("b3").value = "Start";
    if(!!document.getElementById("b31")==true){
        document.getElementById("b31").remove()
    }

}

function moveCar(){ 
    var car = document.getElementById('car');
    
    if(r==0){
        pos += speed;
        if(pos+speed<=screen.width){
            car.style.left = pos + 'px';
        }
        else{
            stopCar();
        }
    }
    else{
        pos -= speed;
        if (pos-speed >= 0) {
            car.style.left = pos + 'px';
        }
        else {
        stopCar();
        }
    }
}

//Question5
var categorised=0;
function categorise(){
    document.getElementById("bfr").innerHTML="Before 2000";
    B=document.getElementById("before");
    document.getElementById("aft").innerHTML="After 2000";
    A=document.getElementById("after");
    let student=[{name:"Yesuraj Chuk",regNo:"URK13CS3001",dob:"11/Jul/1993"},
    {name:"Rajan Din",regNo:"URK19AC4032",dob:"25/Apr/2002"},
    {name:"Dopanni Ki",regNo:"URK21EC5056",dob:"14/Mar/2003"},
    {name:"Robinson",regNo:"URK14CS1222",dob:"11/Jul/1994"},]
    
    if(categorised==0){
        for(let i=0;i<student.length;i++){
            if(parseInt(student[i].dob.split("/")[2])<2000){
                B.innerHTML+=student[i].name+"\'s "+"Register Number is "+student[i].regNo+" and the DOB is "+student[i].dob+"<br><br>";
            }
            else{
                A.innerHTML+=student[i].name+"\'s "+"Register Number is "+student[i].regNo+" and the DOB is "+student[i].dob+"<br><br>";
            }
        }
        categorised=1;
    }  
}