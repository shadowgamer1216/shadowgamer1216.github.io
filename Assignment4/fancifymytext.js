
function hello() {
    alert("Hello, World!");
}

function alertChange() {
    alert("We're fancyfying your text!");
    fancy();
}

function borify() {
    alert("We're making your text boring!");
    boring();
}

function bigger() {
    document.getElementById("textArea1").style.fontSize = "24pt";
}


function fancy() {
    var text = document.getElementById("textArea1").value;
    document.getElementById("textArea1").style.fontWeight = "bold";
    document.getElementById("textArea1").style.color = "blue";
    document.getElementById("textArea1").style.textDecoration = "underline";
    
}

function boring() {
    document.getElementById("textArea1").style.fontWeight = "normal";
    document.getElementById("textArea1").style.color = "black";
    document.getElementById("textArea1").style.textDecoration = "none";
}

function moo() {
    var input = document.getElementById("textArea1").value;
    var parts = input.split(".");
    input = parts.join("-Moo");
    document.getElementById("textArea1").value = input;
}