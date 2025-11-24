// alert("Hello, world!");

function makeBigger() {
    //alert("Hello, world!");

    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
    let fancy = document.getElementById("fancy");

    if (fancy.checked) {
        alert("FancyShmancy selected!");
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "blue";
        document.getElementById("textArea").style.textDecorationLine = "underline";
    } else {
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecorationLine = "none";
    }
}

function mooify() {
    let str = document.getElementById("textArea").value.toUpperCase();

    let sentences = str.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-MOO";
    }

    document.getElementById("textArea").value = sentences.join(".");
}
