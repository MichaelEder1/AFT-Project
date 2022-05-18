window.onload = function () {
    document.querySelector(".toggle").addEventListener("click", function () {
        toggleMenuClass();
    });
    document.querySelectorAll(".menuEntry").forEach(function (elem) {
        elem.addEventListener("click", function () {
            toggleMenuClass();
        });
    });

    function toggleMenuClass() {
        console.log("getriggert");
        document.querySelector(".menu").classList.toggle("active");
    }
}