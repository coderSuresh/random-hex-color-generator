const body = document.getElementById('body');
const text = document.getElementById('title');
const btn = document.querySelector(".button")
const copyBtn = document.getElementById("copy");
btn.addEventListener("click", () => {
    const hexContent = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var i, colorCode = "#", random;

    for (i = 1; i <= 6; i++) {
        random = Math.floor(Math.random() * hexContent.length);
        colorCode += hexContent[random];
    }
    body.style.background = colorCode;
    text.innerHTML = colorCode;
})

copyBtn.addEventListener("click", () => {
    console.log("clicked");
    let tempInput = document.createElement("input");
    tempInput.style.display = "none";
    body.append(tempInput);
    tempInput.value = text.innerText
    tempInput.focus();
    tempInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempInput.value);
    body.removeChild(tempInput);
    document.getElementById("alert").style.display = "block";
    setTimeout(() => {
        document.getElementById("alert").style.display = "none";

    }, 500);
})