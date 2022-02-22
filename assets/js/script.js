const header = document.getElementsByTagName("header")[0];
const links = document.getElementById("left");
const introIndicator = document.getElementById("intro-indicator");
const aboutIndicator = document.getElementById("about-indicator");
const about = document.getElementById("about");
const projectsIndicator = document.getElementById("projects-indicator");
const projects = document.getElementById("projects");






links.style.transition = "none";
header.style.transition = "none";
links.style.top = "100vh";
header.style.top = "-40px";
links.style.transition = null;
header.style.transition = "all 2s";
header.style.boxShadow = "none";
header.style.backgroundColor = "#00000000";
header.style.border = "none";
about.style.opacity = 0;
projects.style.opacity = 0;


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
        header.style.top = "-60px";
        header.style.boxShadow = null;
        header.style.backgroundColor = null;
        header.style.border = null;
    }
    if(window.scrollY < furthestDown-100) {
        furthestDown = window.scrollY;
        header.style.top = null;
    }
    // console.log(projects.offsetTop, window.scrollY);
    links.style.top = `${height}vh`;
    if (window.scrollY < 60) {
        
        header.style.boxShadow = "none";
        header.style.backgroundColor = "#00000000";
        header.style.border = "none";
    }
    if (window.scrollY < 140) {
        header.style.top = null;
    }
    // else {
    //     header.style.top = null;
    // }
    
    if (about.offsetTop-window.innerHeight/4 <= window.scrollY) {
        console.log("about");
        introIndicator.style.marginTop = "-100px";
        about.style.transition = null;
        about.style.opacity = null;
        // about.style.marginTop = null;
    }
    else {
        introIndicator.style.marginTop = null;
        about.style.transitionDuration = ".5s";
        about.style.opacity = 0;
    }
    if (projects.offsetTop-window.innerHeight/4 <= window.scrollY) {
        console.log("project");
        projects.style.transition = null;
        projects.style.opacity = null;
        
        aboutIndicator.style.marginTop = "-100px";
    }
    else {
        aboutIndicator.style.marginTop = null;
        projects.style.transitionDuration = ".5s";
        projects.style.opacity = 0;
        // 
        
    
    }
    
}



// projects.style.marginTop = "0";