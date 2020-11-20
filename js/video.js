var video;
var rangeslider = document.getElementById("volumeSlider"); 
var output = document.getElementById("volume"); 

document.getElementById("play").onclick = function(){
	
    if (document.getElementById("myVideo").paused){
		document.getElementById("myVideo").play();
    } 
}

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.getElementById("volume").innerHTML = 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	document.getElementById("myVideo").pause(); 
	
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime +5;
	console.log(video.currentTime);

	if (video.currentTime > video.duration - 5){
		video.currentTime = 0
		document.getElementById("myVideo").play();
	}
});


document.querySelector("#mute").addEventListener("click", function() {

    if (!video.muted) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
    } else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
    }
});




  
rangeslider.oninput = function() { 
var vid = document.getElementById("myVideo");
  
  vid.volume = this.value / 100;
  output.innerHTML = vid.volume * 100 + "%";
  console.log(vid.volume) 
  
} 

document.querySelector("#old").addEventListener("click", function() {
	var circle = document.getElementById("myVideo");
	circle.classList.add('oldTime');
});

document.querySelector("#original").addEventListener("click", function() {
	var circle = document.getElementById("myVideo");
	circle.classList.remove('oldTime');
});

