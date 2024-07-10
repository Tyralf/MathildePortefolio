document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");

    console.log(acc);
    var i;

    for (i = 0; i < acc.length; i++) {
        console.log("Adding event listener to accordion:", acc[i]);
        acc[i].addEventListener("click", function() {
            console.log("J'ai cliqué chef !");

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});