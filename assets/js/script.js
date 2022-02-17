const header = document.getElementsByTagName("header")[0];
const links = document.getElementsByTagName("aside")[0];




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
    console.log(window.scrollY, furthestDown);
    links.style.top = `${height}vh`;
    if (window.scrollY < 60) {
        header.style.top = null;
        header.style.boxShadow = "none";
        header.style.backgroundColor = "#00000000";
    }
    // else {
    //     header.style.top = null;
    // }
    
}