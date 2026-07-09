function goNext() {
    document.body.style.transition = "0.8s";
    document.body.style.opacity = "0";

    setTimeout(function () {
        window.location.href = "page2.html";
    }, 800);
}
