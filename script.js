var throw1 = {
    x: document.getElementById("x1").value,
    z: document.getElementById("z1").value,
    angle: document.getElementById("angle1").value
}

var throw2 = {
    x: document.getElementById("x2").value,
    z: document.getElementById("z2").value,
    angle: document.getElementById("angle2").value
}

var errorMessage = document.getElementById("error")
var submitButton = document.getElementById("submit-button")
var ansX = document.getElementById("xans")
var ansZ = document.getElementById("zans")

errorMessage.style.display = "none";

submitButton.onclick = function () {
    errorMessage.style.display = "none";
    // atualizar coordenadas
    throw1 = {
        x: document.getElementById("x1").value,
        z: document.getElementById("z1").value,
        angle: document.getElementById("angle1").value
    }
    
    throw2 = {
        x: document.getElementById("x2").value,
        z: document.getElementById("z2").value,
        angle: document.getElementById("angle2").value
    }

    // verificar se está algum field vazio
    if (throw1.x == "" || throw1.z == "" || throw1.angle == "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : make sure none of the fields are left empty"
    }
    if (throw2.x == "" || throw2.z == "" || throw2.angle == "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : make sure none of the fields are left empty"
    }2

    
    // verificar angulos invalidos
    if (-180 > throw1.angle || throw1.angle > 180) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : invalid angle (on first throw)"
        console.log("invalid angle")
    }
    if (-180 > throw2.angle || throw2.angle > 180) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "error : invalid angle (on second throw)"
        console.log("invalid angle")
    }
    

    // angulo "certo" seria  360 - (document.getElementById("angle2").value + 90)
    console.log(document.getElementById("angle1").value , angle)
    
}

function calcX(x,y, angle) {
    // get eq b
    var b = y - (x/angle)

}