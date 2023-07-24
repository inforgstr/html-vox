document.addEventListener("DOMContentLoaded", () => {
    var first = document.getElementById("first");
    var first_c = document.querySelector(".__initial");

    var second = document.getElementById("second");
    var second_c = document.querySelector(".__last");

    first.addEventListener("click", () => {main_logic(first_c)});
    second.addEventListener("click", () => {main_logic(second_c)});
});

function main_logic(content) {
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    };
};
