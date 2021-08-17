function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var result = document.getElementById("result").value;
    
    p = document.getElementById("principal").value;
    
    function updateRate(newRate) 
    {
        document.getElementById("rate_val").innerText=newRate;
    }
    
    function computeInterest()
    {
        document.getElementById("result").innerHTML="If you deposit <mark> "+principal+",\ <br\> </mark> at an interest rate of <mark> "+rate+"%\<br\> </mark>You will receive an amount of <mark> "+amount+",\<br\> </mark> in the year <mark> "+year+"\<br\>" </mark>
    }
    
    function validate()
    {
        if (principal <= 0) {
            alert("Enter a Positive Number);
        }
    }
        
    function resetForm()
        {
            document.getElementById("principal").focus();
        }
}
        
