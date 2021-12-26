
let btn=document.getElementsByClassName("btn_play");
Array.from(btn).forEach(b => {
    b.addEventListener("click", function() {
      console.log("clicked");
      window.location.href = 'detail.html';
    });
});
// let div=document.getElementsByClassName("card card-cover  overflow-hidden text-white bg-dark rounded-5 shadow-lg")
// Array.from(div).forEach(b => {
//     b.addEventListener("click", function() {
//       console.log("clicked");
//       window.location.href = 'detail.html';
//     });
// });


stickyElem = document.querySelector(".songs_items");
     
 
    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
    window.onscroll = function() {
    
        if(window.pageYOffset > currStickyPos) {
            stickyElem.style.position = "fixed";
            stickyElem.style.top = "0px";
        } else {
            stickyElem.style.position = "relative";
            stickyElem.style.top = "initial";
        }
    }

// variables

    let songIndex = 0;
    let audioElement = new Audio('1.mp3');
    let masterPlay = document.getElementById('masterPlay');
    let myProgressBar = document.getElementById('myProgressBar');
    // let gif = document.getElementById('gif');
    let masterSongName = document.getElementsByClassName('name1')[0];
    let masterSongCover= document.getElementById("cover_img");
    let songItems = Array.from(document.getElementsByClassName('album'));
    let imgcover =Array.from(document.getElementsByClassName("songs"));
  
// songs array

let songs = [
  {songName: "The Nights",cover:"https://i.scdn.co/image/ab67616d000048510ae4f4d42e4a09f3a29f64ad" },
  {songName: "Dusk Till down",cover:"https://i.scdn.co/image/ab67616d000048512bdcb339402ebd78651f09c8" },
  {songName: "kinna Chir", cover:"https://i.scdn.co/image/ab67616d00004851fd983cf401180805b92fb386"},
  {songName: "Tera zikar", cover:"https://i.scdn.co/image/ab67616d00004851b560693c17b20f01614c585c"},
  {songName: "Treat you Better",cover:"https://i.scdn.co/image/ab67616d000048511376b4b16f4bfcba02dc571b" },
  {songName: "Unstoppable", cover:"https://i.scdn.co/image/ab67616d0000485149e0134c686547c28b7c999f"},
  {songName: "Tusnami", cover:"https://i.scdn.co/image/ab67616d0000485121d1a642761f8d4779cc2c38"},
  {songName: "Distance Love",cover:"https://i.scdn.co/image/ab67616d000048516b3733e73fe3d3c903788915" },
  
]
// updating songnames to titles
    songItems.forEach((element, i)=>{ 
        // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
        element.getElementsByTagName("h6")[0].innerText = songs[i].songName; 
    })
imgcover.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].cover;
})


// Listen to Events
    audioElement.addEventListener('timeupdate', ()=>{ 
        // Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        myProgressBar.value = progress;
    })
// change in seek bar
    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })

    // play songs on click
    Array.from(document.getElementsByClassName('songs')).forEach((element,i)=>{
        element.addEventListener('click', (e)=>{ 
            console.log(e.target)
            let a=document.getElementsByClassName("songs_play")[i]

            songIndex = parseInt(element.id)
            audioElement.src = `${songIndex}.mp3`;
            masterSongCover.setAttribute("src", songs[songIndex-1].cover);
            
            masterSongName.innerText = songs[songIndex-1].songName;
            audioElement.play();
            audioElement.currentTime = 0;
            document.getElementsByClassName("player")[0].style.display="block"
            a.classList.remove('fa-play');
            a.classList.add('fa-pause');

            
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            masterPlay.addEventListener('click', ()=>{
                if(audioElement.paused || audioElement.currentTime<=0){
                    audioElement.play();
                    a.classList.remove('fa-play');
                    a.classList.add('fa-pause');
                    masterPlay.classList.remove('fa-play');
                    masterPlay.classList.add('fa-pause');
                }
                else{
                    audioElement.pause();
                    a.classList.remove('fa-pause');
                    a.classList.add('fa-play');
                    masterPlay.classList.remove('fa-pause');
                    masterPlay.classList.add('fa-play');
                }
            }
    )})
    })


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}