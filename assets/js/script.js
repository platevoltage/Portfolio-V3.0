const header = document.getElementsByTagName("header")[0];
const links = document.getElementById("left");
const about = document.getElementById("about");
const projects = document.getElementById("projects");




links.style.transition = "none";
header.style.transition = "none";
links.style.top = "100vh";
header.style.top = "-40px";
links.style.transition = null;
header.style.transition = "all 2s";
header.style.boxShadow = "none";
header.style.backgroundColor = "#00000000";


setTimeout(function() {
    header.style.transition = null;
    links.style.transition = "none";
    links.style.top = null;
    header.style.top = null;
    window.onscroll = moveHeader;
    
}, 100);

var furthestDown = 0;
function moveHeader() {
    let height = 45 - window.scrollY/200;
    if(window.scrollY > furthestDown) {
        furthestDown = window.scrollY;
        header.style.top = "-62px";
        header.style.boxShadow = null;
        header.style.backgroundColor = null;
    }
    if(window.scrollY < furthestDown-100) {
        furthestDown = window.scrollY;
        header.style.top = null;
    }
    // console.log(projects.offsetTop, window.scrollY);
    links.style.top = `${height}vh`;
    if (window.scrollY < 60) {
        header.style.top = null;
        header.style.boxShadow = "none";
        header.style.backgroundColor = "#00000000";
    }
    // else {
    //     header.style.top = null;
    // }
    if (projects.offsetTop-window.innerHeight/4 <= window.scrollY) {
        console.log("project");
        about.style.marginTop = "-100px";
    }
    else {
        about.style.marginTop = null;
    }
    
}



// projects.style.marginTop = "0";