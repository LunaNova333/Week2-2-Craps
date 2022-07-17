//function for countdownTimer V1 for week1-2
function start(){
    console.log("start() function started");
    //created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //blastoff
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
        console.log(currTime);
    }, 10000)
}