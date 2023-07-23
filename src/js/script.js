function hideSupport() {
    var element = document.querySelector(".support");
    element.style.display = "none";
};

function subDropDown() {
    var buttons = document.querySelectorAll(".btn-dropdown");

    buttons.forEach(button => {
        if (button.style.display === "block") {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        };
    });
};

function redirectButton() {
    window.location.href = "https://www.vox.com/archives";
}
