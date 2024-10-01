function checkOrentation() {
    if (window.innerWidth > window.innerHeight) {
        //landscape mode 
        document.body.classList.add("landscape-mode");
        document.body.classList.remove("portrait-mode");
    } else {
        //portrait mode 
        document.body.classList.remove("landscajpe-mode");
        document.body.classList.add("portrait-mode");
    }
}
//Initial check 
checkOrentation();
//Listen for orentation changes 
window.addEventListener("orentationchange", checkOrentation);