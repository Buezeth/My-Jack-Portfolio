(function () {
    let inputsList = document.getElementsByTagName("input"); // Fetch all the page inputs
    for (let i = 0; i < inputsList.length; i++) {
        inputsList[i].addEventListener("focus", function () {
            inputsList[i].parentNode.classList.add("input-filler");
            inputsList[i].parentNode.classList.remove("input-fillerout");
            inputsList[i].style.outline = "none";

            // When the div parent get the "input-filler" class, his ::before pseudo element grows up and then decorate the input
            // See the file ../css/form.css
        });
        inputsList[i].addEventListener("focusout", function () {
            inputsList[i].parentNode.classList.remove("input-filler");
            inputsList[i].parentNode.classList.add("input-fillerout");

            // The input-filler class is removed, to cancel the filling effect
        });
    }

    let textarea = document.querySelector("textarea");
    textarea.addEventListener("focus", function () {
        textarea.parentNode.classList.add("input-filler");
        textarea.parentNode.classList.remove("input-fillerout");
    });
    textarea.addEventListener("focusout", function () {
        textarea.parentNode.classList.remove("input-filler");
        textarea.parentNode.classList.add("input-fillerout");
    });
})();