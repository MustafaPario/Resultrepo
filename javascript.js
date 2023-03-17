function calculate(){

    var a = parseInt(document.getElementById("subone").value);
    var b = parseInt(document.getElementById("subtwo").value);
    var c = parseInt(document.getElementById("subthree").value);
    var d = parseInt(document.getElementById("subfour").value);
    var e = parseInt(document.getElementById("subfive").value);
     

    if(a > 100 || b > 100 || c > 100 || d > 100 || e > 100){

        alert("Please Enter the Correct Value");

    }

    else{

        var obtained = a + b + c + d + e;
        document.getElementById("obtained").innerHTML = obtained;

        var percentage = obtained/500*100;
        document.getElementById("Percentage").innerHTML = percentage;

        if(a > 40 && b > 40 && c > 40 && d > 40 && e > 40){
        document.getElementById("remarks").innerHTML = "<span style='color: green'>Passed</span>";
        }    

        else{
        document.getElementById("remarks").innerHTML = "<span style='color: red'>Failed</span>";

        }

        if(percentage >= 80){
        document.getElementById("grade").textContent = "A+";

        }   
        else if(percentage >= 70){
         document.getElementById("grade").textContent = "A";
     }

    else if(percentage >= 60){
        document.getElementById("grade").textContent = "B";
    }

   else if(percentage >= 50){
        document.getElementById("grade").textContent = "C";
    }

    else if(percentage < 50 && percentage === 45){
        document.getElementById("grade").textContent = "D";
    }

    else{
        document.getElementById("grade").textContent = "F";

        
    }



    
        }


    }

