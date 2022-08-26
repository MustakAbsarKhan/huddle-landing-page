let bodyheaderTXT = document.querySelector(".body-h1");
let bodyparaTXT = document.querySelector(".body-p");

let text = "Build The Community Your Fans Will Love";
let textp = "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."

let speed = 130;
let speedp = 30;

let i = 0;
let p = 0;

const typeWriter = ()=>{
    if(i<text.length){
        bodyheaderTXT.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    };
};

const typeWriterp = ()=>{
    if(p<textp.length){
        bodyparaTXT.innerHTML += textp.charAt(p);
        p++;
        setTimeout(typeWriterp,speedp);
    };
};

document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
    typeWriterp();
  });