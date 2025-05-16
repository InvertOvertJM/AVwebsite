const playBothBtn = document.querySelector('#play-both-button'); 
const playBothBtn2 = document.querySelector('#play-both-button2'); 
const playBothBtn3 = document.querySelector('#play-both-button3'); 
//we use const instead of let simply because the button wont change, it will always be this button, however, let will work the same way 
let videoOne = document.querySelector("#video-one");
let audioOne = document.querySelector("#audio-one");

let videoTwo = document.querySelector("#video-two");
let audioTwo = document.querySelector("#audio-two");

let videoThree = document.querySelector("#video-three");
let audioThree = document.querySelector("#audio-three");

//we also save the video and audio into variables here so that we can affect them later

playBothBtn.addEventListener("click",function(){
    videoOne.play();
    audioOne.play();
});

playBothBtn2.addEventListener("click",function(){
    videoTwo.play();
    audioTwo.play();
});

playBothBtn3.addEventListener("click",function(){
    videoThree.play();
    audioThree.play();
});
