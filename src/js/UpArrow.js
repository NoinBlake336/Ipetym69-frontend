export const Scroll = () => {
    var upArrow = document.querySelector("#arrow-up");
    window.onscroll = () => {
        let y = window.scrollY;
        if (y < 700) {
            if (upArrow.classList.contains("hidden")) {
                return
            }
            else {
                upArrow.classList.add("hidden");
            }

        }
        else {
            if (!upArrow.classList.contains("hidden")) {

                return
            }
            else {

                upArrow.classList.remove("hidden");
            }

        }
    }
}

