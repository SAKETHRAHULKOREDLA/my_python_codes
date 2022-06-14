function compute()
{
    p = document.getElementById("principal").value;
    if(principal.value < 1){//To alert the user when he enters a negative number or zero
        alert("Enter a positive number")
        principal.focus()
        return
    }
    let interest = principal.value * years.value * rate.value / 100;//Simple Interest=principal amount*rate of interest*number of years/100
    yearInFuture = new Date().getFullYear() + parseInt(years.value);//To get the year
    result = document.getElementById("result")
    result.innerHTML = "<p>If you deposit <mark>"+ principal.value +"</mark>,<br>at an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+yearInFuture+"</mark></p>";

}

function refreshSlider(){//This function returns us the value of interest which was present on the slider
rate.value
document.getElementById("rateLabel").innerText = rate.value + "%"}

finishPage = () =>{
    var rate = document.getElementById("rate");
    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    years = document.getElementById("years");
    for(i=1; i<=10; i++){//This function is used to print the number of years which was given as a collapsable list
    	let element = document.createElement("option")
    	element.innerText = i
    	element.setAttribute("value", i)
    	years.appendChild(element)
    }
    
    
}
        