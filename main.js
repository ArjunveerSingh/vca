x = 0;
y = 0;
sw=0;
sh=0;
apple="apple.png";
draw_apple = "";
sd="";
tn="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 tn=Number(content);
 if(Number.isInteger(tn)){
  draw_apple="set";
  document.getElementById("status").innerHTML="Started drawing apple"
 }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 sw= window.innerWidth;
 sh= window.innerHeight;
 canvas= createCanvas(sw,sh-150);
 canvas.position();
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(i=1;i<=tn;i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = tn+"Apples drawn";
}

function preload(){
  apple=loadImage(apple.png);
}