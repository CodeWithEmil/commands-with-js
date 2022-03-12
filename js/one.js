let input = document.querySelector("#input-one");
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        validate(e);
    }
});

let validate = (e) => {
    let exTxt = "";

    if (input.value === "My mom is amazing!")
        exTxt = " Now run and give her a hug! <3";

    alert(`"${input.value}" is the current text.${exTxt}`);
    input.value = null;
}