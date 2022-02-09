
function changeColor(){
    const dayDivison = document.getElementById("daydiv");
    const day = document.getElementById("day").value;
    switch(day){
        case "0":
            dayDivison.style.backgroundColor = "green";
            break;
        case "1":
            dayDivison.style.backgroundColor = "yellow";
            break;
        case "2":
            dayDivison.style.backgroundColor = "red";
            break;
        case "3":
            dayDivison.style.backgroundColor = "orange";
            break;
        case "4":
            dayDivison.style.backgroundColor = "purple";
            break;
        case "5":
            dayDivison.style.backgroundColor = "pink";
            break;
        case "6":
            dayDivison.style.backgroundColor = "lightgreen"
            break;
    }
}


function calculateResult(){
    let result = "";
    const number = document.getElementById("inputbox").value;
    var oddOrEven = "";
    var primeOrcomp = "prime";
    var greaterOrless = "";
    //Odd or even calculation
    if(number % 2 == 0){
        oddOrEven = "even";
    }
    else{
        oddOrEven = "odd";
    }
    //Prime or Composite calculation
    if(number == 1){
        primeOrcomp = "composite";
    }
    else{
        for(var i = 2; i < number; i++){
            if(number % i == 0){
                primeOrcomp = "composite";
            }
        }
    }
    

    if(number <= 50){
        greaterOrless = "less than or equal to 50";
    }
    else if(number > 50 && number <= 75){
        greaterOrless = "greater than 50 and less than or equal to 75";
    }
    else if(number > 75 && number <= 100){
        greaterOrless = "greater than 75 and less than or equal to 100";
    }
    else{
        greaterOrless = "greater than 100";
    }
    
    result = "The number entered is an " + oddOrEven + " " + primeOrcomp + " number " + greaterOrless;
    console.log(result);
    document.getElementById("formResult").innerHTML = result;



}