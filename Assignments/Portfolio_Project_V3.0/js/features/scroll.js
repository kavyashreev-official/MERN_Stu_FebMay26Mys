function scroll() {
    window.addEventListener("scroll",() => {
        const scrollTop = window.screenY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = (scrollTop / docHeight) * 100;
        document.getElementId("progress-bar").style.width = percent + "%";
    });
}