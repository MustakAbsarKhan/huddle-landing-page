let containerCheck = "";
let displayCheck = "";
let containSelctor = document.querySelectorAll(".logo,.logo-img,.body-text,.body-h1,.body-p,.footer,.devinfo,.body-img");
let containlength = containSelctor.length;

//this function opens the popup form->takes all the selected elements using loop-> checks if the click is made on selected elements->checks if the popup window is open and other elements are clicked
function openForm() {
    document.getElementById("myForm").style.display = "block";//opens the form
    displayCheck = "block";//reassigning displaycheck value for bothcheck function

    for (let i = 0; i < containlength; i++) {
        containSelctorinfo = containSelctor[i];//generating all elements where i want to check any click
        containerClickCheker(containSelctorinfo);
    };

    function bothCheck(containerdata){
        //if display is blocked and container is clicked then the closeform function will run
        if(displayCheck === "block" && containerdata === "clicked"){
            closeForm();
        };
    };

    function containerClickCheker(containSelctorinfo){//this function takes all elements from loop and captures click
        containSelctorinfo.addEventListener('click',()=>{
            containerCheck = "clicked";
            bothCheck(containerdata=containerCheck);
        });
    };
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    containerCheck = "";
    displayCheck = "";
};


