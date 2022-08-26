let bodyheaderTXT = document.querySelector(".body-h1");
let bodyparaTXT = document.querySelector(".body-p");

let text = "Build The Community Your Fans Will Love";
let textp = "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."

let speed = 40;
let speedp = 40;

let i = 0;
let p = 0;

const typeWriter = ()=>{
    if(i<text.length){//prints each header text
        bodyheaderTXT.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    };
    if(bodyheaderTXT.innerHTML.length===39){//checks if the header text is fully printed then it will execute paragraph text running function
        typeWriterp();
    };
};

const typeWriterp = ()=>{//this function runs and prints paragraph text
    if(p<textp.length){
        bodyparaTXT.innerHTML += textp.charAt(p);
        p++;
        setTimeout(typeWriterp,speedp);
    };
};

document.addEventListener("DOMContentLoaded", ()=>{//this event listener loads the function when the DOM is already loaded
    typeWriter();
});