var timer=60;
var score=0;
var newhitrn=0;



function scoreinc(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
function getnewhit(){
    newhitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent =newhitrn;


}
function makebubble(){
    var clutter="";
    for(var i=1; i<=160; i++){
       var rn=Math.floor(Math.random()*10)
     
       clutter +=`<div class="bubble"> ${rn} </div>`;
    }
   
    document.querySelector("#pbtm").innerHTML=clutter;
} 
    function runTimer(){
      var timerint=  setInterval(function(){
            if(timer>0){
                timer--;
           
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>  GAME OVER </h1> `;
        }
        },1000)
    }

   document.querySelector("#pbtm") 
   .addEventListener("click",function(details){
    var clickednum=Number(details.target.textContent);
    if(clickednum===newhitrn){
        scoreinc();
        makebubble();
        getnewhit();
    }

   })
 getnewhit();
runTimer(); 
makebubble();










