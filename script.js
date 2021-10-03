function changeBg() {
    const body = document.getElementById('body');
    const text = document.getElementById('title');

    const hexContent = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var i, colorCode = "#", random;

    for (i = 1; i <= 6; i++) {
        random = Math.floor(Math.random() * hexContent.length);
        colorCode += hexContent[random];
    }
    body.style.background = colorCode;
    text.innerHTML = "Current background color is <br>" + colorCode;
}