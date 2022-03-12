let input = document.querySelector("#input-one");
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        validate(e);
    }
});

let validate = (e) => {
    alert(`"${input.value}" is the current text.`);
    input.value = null;
}