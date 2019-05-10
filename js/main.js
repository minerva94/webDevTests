
/*var ifPremiumUser = true;

if(ifPremiumUser == true){
    console.log("Thanks for being a loyal customer!")
}else{
    console.log("You should subscribe to our premium service.")
}

var myAge =24;

if(myAge <1) {
    console.log ("You are a baby.")
}else if (myAge <3){
    console.log ("You are a toddler.")
}else if (myAge <10){
    console.log("You are a big kid")
}else if (myAge <=19){
    console.log("You are a teenager")
}else if (myAge <40){
    console.log("You are an adult.")
}else{
    console.log("You must be old, you are not in our records.")
}


for(var i=0; i<10; i++){
    console.log("Current i value is", i);
}

function printName(name, age){
    console.log("Hello,", name,". You are", age);
}

printName("Giulia", "24 years old");
printName("Marco", "27 years old");*/

var btn= document.getElementById("go-button");

function buttonClicked(){
    console.log("Button clicked");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML= "Don't do it!";
    console.log (document.getElementById("text"));
}

btn.addEventListener("click", buttonClicked);



















