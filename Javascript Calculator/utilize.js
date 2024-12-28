var Display=document.querySelector("#display")
var btn=document.querySelectorAll(".btn")

for (item of btn){
    item.addEventListener('click',(element)=>{
        btntext=element.target.innerText;

        if (btntext=="x"){
            btntext="*"
        }
        if (btntext=="\u00F7"){
            btntext="/"
        }
        Display.value+=btntext
    })
}

// function for sin 

function sin(){
    let radian=Display.value*(Math.PI/180)
    Display.value=Math.sin(radian)
}

//function for cos

function cos(){
    let radian=Display.value*(Math.PI/180)
    Display.value=Math.cos(radian)
}

function backspace(){
   let currentValue=Display.value
   Display.value=currentValue.slice(0,-1)
}

//function for tan

function tan(){
    let radian=Display.value*(Math.PI/180)
    Display.value=Math.tan(radian)
}
//function log

function Log(){
    Display.value=Math.log(Display.value)
}

//function squareroot

function sqrt(){
    Display.value=Math.sqrt(Display.value)
}

//function for pi

function pi(){
    let current_value=Display.value
    Display.value=current_value*3.14159265359
}

// function  for e

function e(){
    let current_value=Display.value
    Display.value=current_value*2.71828182846
}

//function for facttorial

function fact(){
    var i,num,fact
    fact=1
    num=Display.value
    for(i=1;i<=num;i++){
        fact*=i
    }
    Display.value=fact
}

//function for Ac
function ac(){
    Display.value=""
}
function equal(){

    Display.value=eval(Display.value)
    
   
}
//function for x to the power y

function power(){
    let values = Display.value.split('^');
    
    if (values.length === 2) {
        let base = parseFloat(values[0]); // x
        let exponent = parseFloat(values[1]); // y
        Display.value = Math.pow(base, exponent);
    } else {
        Display.value = 'Error'; // Handle incorrect input
    }
}

