const header = document.getElementsByTagName("header")[0];
window.onscroll = moveHeader;





function moveHeader() {
    console.log(window.scrollY);
    if (window.scrollY > 60) {
        header.style.top = "-40px";
    }
    else {
        header.style.top = null;
    }
    
}