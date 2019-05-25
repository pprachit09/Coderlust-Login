const content1 = () => {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("main-content2").style.display = "none";
    document.getElementById("main-content3").style.display = "none";
    document.getElementById("welcome-content").style.display = "none";
}

const content2 = () => {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("main-content2").style.display = "block";
    document.getElementById("main-content3").style.display = "none";
    document.getElementById("welcome-content").style.display = "none";
}

const content3 = () => {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("main-content2").style.display = "none";
    document.getElementById("main-content3").style.display = "block";
    document.getElementById("welcome-content").style.display = "none";
}