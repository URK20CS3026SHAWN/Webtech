$(document).ready(function(){

    var name1, regno, email;
    $('#set').prop('disabled',true);
    $('#crb').prop('disabled',true);

    $('#get').click(function () {
        name1 = document.getElementById("name").value;
        regno = document.getElementById("regno").value;
        email = document.getElementById("email").value;
        console.log('Data Collected');
        $('#txt').prepend("<span id=temp>Hey <input type='text' id='n'> your Data is Safe! &nbsp;</span>")
        $('#n').val(name1);
        $('#get').prop('disabled',true);
        $('#set').prop('disabled',false);
    })

    $('#set').click(function() {
        $('#temp').remove();
        $('#txt').prepend("<span>Hey <input type='text' id='n1'></span>")
        $('#n1').val(regno);
        $('#txt').append("<div>Your Name is <input type='text' id='n2'></div>")
        $('#n2').val(name1);
        $('#txt').append("<span>\n Your Email is <input type='text' id='n3'></span><br>")
        $('#n3').val(email);
        $('#set').prop('disabled',true);
        $('#crb').prop('disabled',false);
    })

    $('#crb').click(function(){
        $('#txt').append('<div id="r"><label for="ta">View Results Below:</label><textarea id="ta" rows="4" cols="50"></textarea></div>')
        
        $('#ta').before("<button id ='pr'>Print Results</button><br>")
        $('#rt').after(" <button id ='rr'>Reset Results</button>")
        $('#crb').prop('disabled',true)
    })

    $('#pr').click(function(){
        $('#ta').val("Hey there Academician!")
        $('#ta').val("You are a Student of KITS. \nYour Fate is Destiny.")
        $('#ta').val("\n May the Founders be with you and God Bless you.")
    })

    $('#rr').click(function(){
        alert("welcome")
        $("r").remove()    
    })

    $('#rt').click(function(){
        $('#txt').children().remove();
        $("#rr").remove();
        $('#get').prop('disabled',false);
        $('#crb').prop('disabled',true)
    })

    // SECTION C CAR WORKSHOP

    $("#rc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".trapezoid").css("border-bottom-color", color); 
    });

    $("#bc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor; 
        $(".rectangle").css("background-color", color);
    });

    $("#its").click(function() { 
        $(".circle").css("width", "+=5"); 
        $(".circle").css("height", "+=5");
    });
   
    $("#dts").click(function() { 
        $(".circle").css("width", "-=5"); 
        $(".circle").css("height", "-=5");
    }); 
    
    ("#rt1").click(function() {
        alert('reset')
        $(".trapezoid").css("border-bottom-color", color); 
        $(".rectangle").css("background-color", color);
        $(".circle").css("width:60"); 
        $(".circle").css("height:60");
    })

});

