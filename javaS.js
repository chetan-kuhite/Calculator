let prevalue = "";
let pastr = "";
function clearScreen() {
    prevalue = "";
    pastr = "";
    document.getElementById("pastresult").value = pastr;
    document.getElementById("result").value = prevalue;
}
// This function display values
function display(value) {
    if(value == "0"){
        if(prevalue!="")
        {
            prevalue = document.getElementById("result").value + value;
            pastr = document.getElementById("result").value + value;
            document.getElementById("result").value = prevalue;
            document.getElementById("pastresult").value = pastr;
        }
    }
    else
    {
        prevalue = document.getElementById("result").value + value;
        pastr = document.getElementById("result").value + value;
        document.getElementById("result").value = prevalue;
        document.getElementById("pastresult").value = pastr;
    }
}

function del() {    
    let newstr = String(prevalue); 
    prevalue = newstr.substring(0,newstr.length-1);
    pastr = prevalue;
    document.getElementById("result").value = prevalue;
    document.getElementById("pastresult").value = pastr;
}
function concat(){
    
    let newstr = String(prevalue);
    let i = -1;
    // newstr += ")";
    i = Math.max(newstr.indexOf("+"),newstr.indexOf("-"),newstr.indexOf("*"),newstr.indexOf("/"))
    // console.log(i);
    if(newstr.charAt(i) == "-")
    {
        newstr = newstr.substring(0,i) + "+" + newstr.substring(i+1,newstr.length);
        prevalue = newstr
        pastr = newstr
        document.getElementById("result").value = eval(prevalue);
        document.getElementById("pastresult").value = pastr;
        // console.log(newstr);
    }
    else
    {
        newstr = newstr.substring(0,i+1) + "-" + newstr.substring(i+1,newstr.length);
        prevalue = newstr
        pastr = newstr
        document.getElementById("result").value = eval(prevalue);
        document.getElementById("pastresult").value = pastr;
        // console.log(newstr);
    }
}
function squareroot()
{
    let newstr = String(prevalue);
    let i = Number(prevalue.length);
    
    i = Math.max(newstr.indexOf("+"),newstr.indexOf("-"),newstr.indexOf("*"),newstr.indexOf("/"))

    pastr = newstr.substring(0,i+1) + "√" +newstr.substring(i+1,newstr.length);

    let value = Math.sqrt(newstr.substring(i+1,newstr.length));
    newstr = newstr.substring(0,i+1) + value;
    
    prevalue = newstr;

    document.getElementById("result").value = eval(prevalue);
    document.getElementById("pastresult").value = pastr;


    // console.log(value);
}

function per()
{
    prevalue += "/100";
    pastr += "/100";
    document.getElementById("result").value = prevalue ;
    document.getElementById("pastresult").value = pastr ;
}

function calculate() {
    if(prevalue == "")
    {
        document.getElementById("result").value = "";
    }
    else
    {
        prevalue = eval(prevalue);
        document.getElementById("result").value = prevalue;
    }
    
}
