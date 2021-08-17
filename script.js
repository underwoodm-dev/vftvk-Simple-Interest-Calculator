function compute()
{
    var principal = document.getElementById("principal").value;
    var principalInput = document.getElementById("principal");
    
    if (principal <= 0) {
        alert("Enter a positive number");
        principalInput.focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;

    var year = new Date()
    var this_year = year.getFullYear() + Number(years);

    document.getElementById("result").innerHTML = 
        "<div>" +
        "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "%</mark>. <br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" + this_year + "</mark>." +
        "</div>";        
}    

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
